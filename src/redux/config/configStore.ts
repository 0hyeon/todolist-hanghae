import { configureStore } from '@reduxjs/toolkit'
import crud from '../modules/crud'
//ASIS :  일반리덕스

// 중앙데이터관리소
// const rootReducer = combineReducers({
//   crud,
// }); //reducer를 하나로 모아논 기본 리듀서 , modules폴더(state묶음들)를 객체안에 모아놓음
// const store = createStore(rootReducer); //만든 리듀서로 스토어생성 (인자는 리듀서의 묶음이 들어감)

//TODO : Redux tookit
const store = configureStore({
  reducer: {
    crud,
  },
})

export default store
