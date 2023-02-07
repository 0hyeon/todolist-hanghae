import React from "react";
import { Iusers } from "../App";
interface Itodolist {
  users: any;
  done: boolean;
  RemoveClick(id: number): any;
  ModifyClick(id: number): any;
  greenText: string;
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
          .filter((todo: any) => todo.done === done)
          .map((el: any) => (
            <div className="todo-container">
              <div>
                <h2 className="todo-title">{el.title}</h2>
                <div>{el.content}</div>
              </div>
              <div className="button-set">
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
              </div>
            </div>
          ))}
    </>
  );
};

export default TodoBoxList;
