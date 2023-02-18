import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axios from 'axios'
//이걸하는 이유는 밑에 문자열로 넣어줘도 되는데 에러가 나면 오류를 찾기힘들고, 중복될경우 이거 사용한 컴포넌트는 다바꿔줘야해서, 휴먼에러

// *액션밸류 부분
// const CREATE = 'crud/CREATE' as const
// const READ = 'crud/READ' as const

// type crudAction =
//   // | ReturnType<typeof todoCreate> //유틸리티 타입
//   // | ReturnType<typeof todoRead>
//   // | ReturnType<typeof todoUpdate>
//   // | ReturnType<typeof todoDelete>
//   any

//* 액션크리에이터 부분  : 액션객체를 만들어주는역할을 하는 함수 (리덕스에서도 권장 휴먼에러를 방지하기 위한 방법)

// export const todoCreate = (payload: Iusers) => {
//   return {
//     type: CREATE,
//     payload,
//   }
// }
// export const todoUpdate = (payload: number) => {
//   return {
//     type: UPDATE,
//     payload,
//   }
// }
// export const todoDelete = (payload: number) => {
//   return {
//     type: DELETE,
//     payload,
//   }
// }
interface Icrud {
  id: number
  title: string
  content: string
  done: boolean
}
// 초기상태값 필요(state)
const initialState: any = {
  crud: [
    {
      id: 1,
      title: '리액트 강의보기',
      content: '챕터 1부터 챕터 12까지 학습',
      done: false,
    },
    {
      id: 2,
      title: '점심 먹기',
      content: '점심 뭐먹지..?!',
      done: false,
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
}

//* 리덕스플로우
//0. combineReducers에 객체를 넣어 스토어를 만드는 configStore설정후
//1. dispatch는 action객체를 store에게 던진다.
//2. store는 action객체에 type에 따라 state를 변경한다.

//리듀서 부분
// const crud = (state = initialState, action: crudAction) => {
//   switch (action.type) {
//     case CREATE:
//       return [...state, action.payload]
//     case READ:
//       return { ...state }
//     case UPDATE:
//       return [
//         ...state.map((todo) =>
//           todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//         ),
//       ]
//     case DELETE:
//       return [...state.filter((todo) => todo.id !== action.payload)]
//     default:
//       return state
//   }
// }

export const __getTodos = createAsyncThunk(
  'getCrud',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:4000/todos')
      console.log('response : ', response)
      thunkAPI.fulfillWithValue(response)
    } catch (error) {
      console.log('error')
      thunkAPI.fulfillWithValue(error)
    }
  }
)
const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    todoCreate: (state, action) => {
      //return [...state, action.payload]
      return { crud: [...state.crud, action.payload] }
      //return [...state.crud, action.payload]
    },
    todoUpdate: (state, action) => {
      return {
        crud: [
          ...state.crud.map((todo: any) =>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
          ),
        ],
      }
    },
    todoDelete: (state, action) => {
      return {
        crud: [...state.crud.filter((todo: any) => todo.id !== action.payload)],
      }
    },
  },
  extraReducers: (builder) => {
    //진행중일때
    builder.addCase(__getTodos.pending, (state: any, action: any) => {
      state.isLoading = true
      state.isError = true
    })
    //완료됐을때
    builder.addCase(__getTodos.fulfilled, (state: any, action: any) => {
      state.isLoading = false
      state.isError = false
      state.todos = action.payload
    })
    //에러시
    builder.addCase(__getTodos.fulfilled, (state: any, action: any) => {
      state.isLoading = false
      state.isError = console.error('error')
      state.error = action.payload
    })
  },
})
export default crudSlice.reducer //리듀서
export const { todoDelete, todoCreate, todoUpdate } = crudSlice.actions //액션크리에이터
