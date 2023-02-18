import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Detail from '../page/Detail'
import Style from '../page/Style'
import Fetch from '../page/Fetch'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/style" element={<Style />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
