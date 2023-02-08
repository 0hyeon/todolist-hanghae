import { useState } from "react";
import "./App.css";
import TodoBoxList from "./components/TodoBoxList";
export interface Iusers {
  id?: number;
  title?: string;
  content?: string;
  done?: boolean;
}

function App() {
  const [isTitle, setTitle] = useState<string>("");
  const [isContent, setContent] = useState<string>("");

  const [users, setUsers] = useState<Iusers[]>([
    {
      id: 1,
      title: "리액트 공부하기99",
      content: "리액트 기초를 공부해봅시다.",
      done: true,
    },
    {
      id: 2,
      title: "리액트 공부하기100",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
  ]);
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(typeof isTitle, typeof isContent);
    if (isTitle === "" || isContent === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      title: isTitle,
      content: isContent,
      done: false,
    };

    setUsers([...users, newUser]);
  };
  const RemoveClick = (id: number) => {
    const removeUser = users.filter((el) => el.id !== id);
    setUsers(removeUser);
  };
  const ModifyClick = (id: number) => {
    setUsers((el) =>
      el.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };
  return (
    <div className="App">
      <div
        className="layout"
        style={{ margin: "0 auto", maxWidth: "1200px", minWidth: "800px" }}
      >
        <div
          className="container"
          style={{
            alignItems: "center",
            display: "flex",
            border: "1px solid #ddd",
            justifyContent: "space-between",
            padding: "0 20px",
            height: "50px",
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
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="list-wrapper">
            <TodoBoxList
              users={users}
              done={false}
              RemoveClick={RemoveClick}
              ModifyClick={ModifyClick}
              greenText={"완료"}
            />
          </div>
          <h2 className="list-title">Done..! 🎉</h2>
          <div className="list-wrapper">
            <TodoBoxList
              users={users}
              done={true}
              RemoveClick={RemoveClick}
              ModifyClick={ModifyClick}
              greenText={"취소"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
