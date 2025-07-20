import { Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./Pages/Home"
import { Register } from "./Pages/Register"
import { Login } from "./Pages/Login"
import { Movie } from "./Pages/Movie"
import { Navbar } from "./Components/Navbar"
import { Header } from "./Components/Header"

const App = () => {
  return (<div className="subContainer">
    <div className="container" />
    <div className="mainContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </div>
  </div>
  )
}

export default App