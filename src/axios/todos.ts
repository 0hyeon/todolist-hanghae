// axios요청들어가는 모든 모듈
import axios from 'axios'
import { Iusers } from '../page/Home'

const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`)
  console.log(response.data)
  return response.data
}
const addTodos = async (newTodo: Iusers) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo)
}
export { getTodos, addTodos }
