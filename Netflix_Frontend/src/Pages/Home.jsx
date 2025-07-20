import styled from "styled-components"
import { Header } from "../Components/Header"
import { Register } from "../Components/Register"


const HeaderMainDiv = styled.div`
width:50%;
text-align:center;
color:white;
position:absolute;
top:30%;
left:25%;
tranform:translate(-50%,-50%);
`
const H1 = styled.h1`
font-size:3.7rem;
margin-bottom:1rem;
`
const H3 = styled.h3`
display:inline;
font-size:1.5rem;
`
export const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMainDiv>
                <H1>Unlimited movies, <span>TV</span> shows and more</H1>
                <H3>Starts at 149. Cancel anytime.</H3>
                <Register />
            </HeaderMainDiv>
        </div>
    )
}