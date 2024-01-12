import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="px-[5%] py-[2%] min-h-screen bg-base ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
