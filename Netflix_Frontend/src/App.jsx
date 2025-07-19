import { Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Register } from "./Pages/Register"
import { Login } from "./Pages/Login"
import { Movie } from "./Pages/Movie"
import styled from "styled-components"
import { NavHeadContainer } from "./Components/NavHeadContainer"

const MainContainer = styled.div`
// background:black;
`

const App = () => {
  return (
    <MainContainer>
      <NavHeadContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </MainContainer>
  )
}

export default App