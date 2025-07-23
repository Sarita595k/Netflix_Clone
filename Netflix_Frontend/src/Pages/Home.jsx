import styled from "styled-components"
import { Header } from "../Components/Header"
import { Register } from "../Components/Register"
import { MovieList } from "../Components/MovieList"
import { ReasonsToJoin } from "../Components/ReasonsToJoin"
import { Frequently } from "../Components/Questions"

const MainContainer = styled.div`
position:relative;
width:100%;
overflow-x:hidden;
`
const MainDiv = styled.div`
width:100%;
height:10%;
background-color:rgba(22, 21, 21, 0.8);
`
const HeaderMainDiv = styled.div`
width:100%;
text-align:center;
color:white;
position:absolute;
top:12%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction:column;
align-items:center;
`
const H1 = styled.h1`
width:50%;
font-size:3.7rem;
margin-bottom:1rem;
`
const H3 = styled.h3`
display:inline;
font-size:1.5rem;
`

const TrendingNowH1 = styled.h1`
color:white;
font-weight:300;
font-size:1.5rem;
font-family: Arial, Helvetica, sans-serif;
text-transform:capitalize;
margin:6% 0 -3% 6%;
`

const Div = styled.div`
margin:0 25%`
export const Home = () => {
    return (
        <MainContainer>
            <Header />
            <MainDiv>
                <HeaderMainDiv>
                    <H1>Unlimited movies, <span>TV</span> shows and more</H1>
                    <H3>Starts at 149. Cancel anytime.</H3>
                    <Register />
                </HeaderMainDiv>
            </MainDiv>
            <TrendingNowH1>trending now</TrendingNowH1>
            <MovieList />
            {/* <TrendingNowH1>more resaons to join</TrendingNowH1> */}
            <ReasonsToJoin />
            <TrendingNowH1>Frequently asked questions</TrendingNowH1>
            <Frequently />
            <Div>
                <Register />
            </Div>
        </MainContainer>
    )
}