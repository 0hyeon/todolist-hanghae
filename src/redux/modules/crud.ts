import { Iusers } from "../../page/Home";
const CREATE = "crud/CREATE"; //이걸하는 이유는 밑에 문자열로 넣어줘도 되는데 에러가 나면 오류를 찾기힘들고, 중복될경우 이거 사용한 컴포넌트는 다바꿔줘야해서, 휴먼에러
const READ = "crud/READ";
const UPDATE = "crud/UPDATE";
const DELETE = "crud/DELETE";

// type crudAction =
//   // | ReturnType<typeof increase>
//   // | ReturnType<typeof decrease>
//   // | ReturnType<typeof increaseBy>
//   any;

//action creator : 액션객체를 만들어주는역할을 하는 함수 (리덕스에서도 권장 휴먼에러를 방지하기 위한 방법)
export const todoCreate = (payload: Iusers) => {
  return {
    type: CREATE,
    payload,
  };
};
export const todoRead = () => {
  return {
    type: READ,
  };
};
export const todoUpdate = (payload: any) => {
  return {
    type: UPDATE,
    payload,
  };
};
export const todoDelete = (payload: any) => {
  return {
    type: DELETE,
    payload,
  };
};

// 초기상태값 필요(state)
const initialState = [
  {
    id: 1,
    title: "리액트 강의보기",
    content: "챕터 1부터 챕터 12까지 학습",
    done: false,
  },
  {
    id: 2,
    title: "점심 먹기",
    content: "점심 뭐먹지..?!",
    done: false,
  },
];

//* 리덕스플로우
//0. combineReducers에 객체를 넣어 스토어를 만드는 configStore설정후
//1. dispatch는 action객체를 store에게 던진다.
//2. store는 action객체에 type에 따라 state를 변경한다.
const crud = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case READ:
      return { ...state };
    case UPDATE:
      return [
        ...state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      ];
    case DELETE:
      return [...state.filter((todo) => todo.id !== action.payload)];
    default:
      return state;
  }
};

export default crud;
