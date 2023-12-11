import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
function App() {
  return (
    <BrowserRouter>
      <nav className=" flex justify-between items-center bg-[#FFC107] text-[#E8F5E9] p-3">
        <h1 className="text-2xl font-bold">TANANAK</h1>
        <ul className="flex ">
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/About">About</Link>
          </li>
        </ul>
        <div className="flex">
          <div className="mx-1 "></div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
