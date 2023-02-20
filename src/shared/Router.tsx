import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Detail from '../page/Detail'
import Style from '../page/Style'
import Fetch from '../page/Fetch'
import DebounceThrothling from '../page/DebounceThrothling'
import Search from '../page/Search'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/style" element={<Style />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/DebounceThrothling" element={<DebounceThrothling />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
