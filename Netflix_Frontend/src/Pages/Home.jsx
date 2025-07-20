import styled from "styled-components"
import { Header } from "../Components/Header"
import { Register } from "../Components/Register"


const HeaderMainDiv = styled.div`
width:50%;
text-align:center;
color:white;
position:absolute;
top:50%;
left:0%;
tranform:translate(-50%,-50%);
`
const H1 = styled.h1`
font-size:3.7rem;
text-transform:lowercase;

&::first-letter{
text-transform:uppercase;
}
`
export const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMainDiv>
                <H1>unlimited movies, TV shows and more</H1>
                <h3>starts at 149. cancel anytime.</h3>
                <Register />
            </HeaderMainDiv>
        </div>
    )
}