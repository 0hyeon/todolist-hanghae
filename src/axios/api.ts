import axios from 'axios'

const instance = axios.create({
  // baseURL: `http://localhost:4000`,
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
})
export default instance
