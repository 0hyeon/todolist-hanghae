import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../axios/api'
import { __getTodos } from '../redux/modules/crud'
import { Input } from './Style'

function Fetch() {
  interface Itodos {
    id?: number | undefined
    title?: string
    content?: string
  }
  const [todos, setTodos] = useState<Itodos[]>([])
  const [inputValue, setInputValue] = useState({ title: '' })
  const [targetId, setTargetId] = useState<string>('')
  const [contents, setContents] = useState('')

  const dispatch = useDispatch()
  const fetchTodos = async () => {
    const { data } = await api.get('/todos')
    setTodos(data)
  }
  const changeEnteredNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value // 입력값을 value 라고 선언
    const numCheck = /^[0-9,]/.test(value) // 입력값이 숫자와 콤마(,)인지 확인 (불린값이 나옴)
    if (!numCheck && value) return // 숫자가 아닌 문자로 이루어져 있으면 pass! (입력이 x)

    if (numCheck) {
      // 숫자이면
      const numValue = value.replaceAll(',', '') // 잠시 콤마를 때주고
      value = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 받은 값에 3자리수마다 콤마를 추가
    }
    setTargetId(value) // 바깥에서 사용할 수 있도록 state 값에 세팅해주자
  }
  //   추가함수
  const onSubmitHandler = async () => {
    await api.post('/todos', inputValue)
    // setTodos([...todos, inputValue])
    fetchTodos()
  }
  //삭제함수
  const onDeleteButtonHandler = async (id: number | undefined) => {
    await axios.delete(`http://localhost:4000/todos/${id}`)
    setTodos([...todos, inputValue])
    setTodos(
      todos?.filter((item: Itodos) => {
        return item.id !== id
      })
    )
  }
  //수정함수
  const onUpldateHandler = async () => {
    axios.patch(`http://localhost:4000/todos/${targetId}`, {
      title: contents,
    })
    setTodos(
      todos.map((el) => {
        if (el.id + '' == targetId) {
          return { ...el, title: contents }
        } else {
          return el
        }
      })
    )
  }

  return (
    <>
      <div>
        {/* 수정영역 */}
        <Input
          type="text"
          value={targetId}
          onChange={changeEnteredNum}
          placeholder="수정할아이디"
        />
        <Input
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          placeholder="수정할내용"
        />
        <button onClick={onUpldateHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmitHandler()
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value,
              })
            }}
          />
          <button type="submit">추가</button>
        </form>
        {/* data영역 */}
        <div>
          {todos?.map((el) => {
            return (
              <div key={el.id}>
                {el.id} : {el.title}
                &nbsp;
                <button onClick={() => onDeleteButtonHandler(el.id)}>
                  삭제
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Fetch
