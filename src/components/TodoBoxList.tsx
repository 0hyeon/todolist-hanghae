import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { H2, Iusers } from '../page/Home'
interface ArrayIusers extends Array<Iusers> {}
interface Itodolist {
  users: ArrayIusers
  done: boolean
  RemoveClick: (id: number) => void
  ModifyClick: (id: number) => void
  greenText: string
}
const TodoBoxList = ({
  users,
  done,
  RemoveClick,
  ModifyClick,
  greenText,
}: Itodolist): React.ReactElement => {
  return (
    <>
      {users &&
        users
          .filter((todo) => todo.done === done)
          .map((el) => (
            <Container className="todo-container" key={el.id}>
              <Link to={`/${el.id}`} state={el}>
                상세보기
              </Link>
              <div>
                <H2>{el.title}</H2>
                <div>{el.content}</div>
              </div>
              <ButtonSet>
                <button
                  className="todo-delete-button button"
                  onClick={() => RemoveClick(Number(el.id))}
                >
                  삭제하기
                </button>
                <button
                  className="todo-complete-button button"
                  onClick={() => ModifyClick(Number(el.id))}
                >
                  {greenText}
                </button>
              </ButtonSet>
            </Container>
          ))}
    </>
  )
}
const Container = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`
const ButtonSet = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`
export default TodoBoxList
