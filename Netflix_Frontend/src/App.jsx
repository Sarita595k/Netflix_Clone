import { Routes, Route } from "react-router-dom"
import './App.css'
import { Home } from "./Pages/Home"
import { RegisterPage } from "./Pages/RegisterPage"
import { Movie } from "./Pages/Movie"
import { Navbar } from "./Components/Navbar"
// import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { LoginPage } from "./Pages/LoginPage"

const App = () => {
  return (<div className="subContainer">
    <div className="container" />
    <div className="mainContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  </div>
  )
}

export default App