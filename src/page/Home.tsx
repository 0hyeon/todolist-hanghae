import { useEffect, useState } from 'react'
import '../App.css'
import TodoBoxList from '../components/TodoBoxList'
import { useDispatch, useSelector } from 'react-redux'
import { todoCreate, todoDelete, todoUpdate } from '../redux/modules/crud'
import styled from 'styled-components'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addTodos, getTodos } from '../axios/todos'
// import { todoRead } from "./redux/modules/crud";
export interface Iusers {
  id?: number
  title?: string
  content?: string
  done?: boolean
  [prop: string]: any
}
interface IusersArray {
  crud: {
    crud: Iusers[]
  }
}

function Home() {
  // const crud = useSelector((state: any) => {
  //   return state.crud.crud
  // }) //state는 중앙데이터 전체

  const { isLoading, isError, data } = useQuery('todos', getTodos)
  console.log(data)
  // console.log(crud)
  const dispatch = useDispatch()
  const [isTitle, setTitle] = useState<string>('')
  const [isContent, setContent] = useState<string>('')

  // const ReadData = useCallback(() => dispatch(todoRead()), [dispatch]);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const contentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const queryClient = useQueryClient()
  const mutation = useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos') //refetcing  => db갱신 useQuery의 키값 'todos' 다시 불러옴 (키는유니크해야)
      console.log('성공하였습니다.')
    },
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isTitle === '' || isContent === '') {
      return
    }
    const newUser = {
      id: data?.length + 1,
      title: isTitle,
      content: isContent,
      done: false,
    }
    // dispatch(todoCreate(newUser as any)) //redux - 리턴되면서 메모리가 바뀜
    mutation.mutate(newUser) //react-query
    setTitle('')
    setContent('')
  }
  const RemoveClick = (id: number) => {
    // const removeUser = [...crud.filter((el) => el.id !== id)];
    dispatch(todoDelete(id))
  }
  const ModifyClick = (id: number) => {
    dispatch(todoUpdate(id))
    // setUsers((el) =>
    //   el.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    // );
  }

  return (
    <div className="App">
      <div
        className="layout"
        style={{ margin: '0 auto', maxWidth: '1200px', minWidth: '800px' }}
      >
        <div
          className="container"
          style={{
            alignItems: 'center',
            display: 'flex',
            border: '1px solid #ddd',
            justifyContent: 'space-between',
            padding: '0 20px',
            height: '60px',
            marginBottom: '24px',
          }}
        >
          <div>My Todo List</div>
          <div>React c반 김영현</div>
        </div>
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="form-label">제목</label>
            <input
              type="text"
              name="title"
              className="add-input input-body"
              value={isTitle}
              onChange={titleChangeHandler}
            />
            <label className="form-label">내용</label>
            <input
              type="text"
              name="body"
              className="add-input"
              value={isContent}
              onChange={contentChangeHandler}
            />
          </div>
          <button className="add-button">추가하기</button>
        </form>
        <div className="list-container">
          <H2 className="list-title">Working.. 🔥</H2>
          <div className="list-wrapper">
            <TodoBoxList
              users={data}
              done={false}
              RemoveClick={RemoveClick}
              ModifyClick={ModifyClick}
              greenText={'완료'}
            />
          </div>
          <H2 className="list-title">Done..! 🎉</H2>
          <div className="list-wrapper">
            <TodoBoxList
              users={data}
              done={true}
              RemoveClick={RemoveClick}
              ModifyClick={ModifyClick}
              greenText={'취소'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export const H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

export default Home
