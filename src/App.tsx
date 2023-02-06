import { useState } from "react";
import "./App.css";

function App() {
  const [isTitle, setTitle] = useState<string>("");
  const [isContent, setContent] = useState<string>("");

  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: true,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
  ]);
  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e: any) => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    const newUser = {
      id: users.length + 1,
      title: isTitle,
      content: isContent,
      done: false,
    };

    setUsers([...users, newUser]);
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
          <div>React</div>
        </div>
        <form className="add-form" onSubmit={() => handleSubmit()}>
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
          <button className="add-button" onClick={handleSubmit}>
            추가하기
          </button>
        </form>
        <div className="list-container">
          <h2 className="list-title">Working.. 🔥</h2>
          <div className="list-wrapper">
            <div className="todo-container">
              {/* {users.map((el: any, index) => (
                <div key={index}>{el}</div>
              ))} */}
              <div>
                <h2 className="todo-title">리액트 공부하기</h2>
                <div>리액트 기초를 공부해봅시다.</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button">삭제하기</button>
                <button className="todo-complete-button button">완료</button>
              </div>
            </div>
          </div>
          <h2 className="list-title">Done..! 🎉</h2>
          <div className="list-wrapper">
            <div className="todo-container">
              <div>
                <h2 className="todo-title">리액트 공부하기</h2>
                <div>리액트 기초를 공부해봅시다.</div>
              </div>
              <div className="button-set">
                <button className="todo-delete-button button">삭제하기</button>
                <button className="todo-complete-button button">취소</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
