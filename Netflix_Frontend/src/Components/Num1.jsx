import styled from "styled-components"
import { GetMovieId } from "./Youtube/GetMovieId"
import { useEffect, useState } from "react"
import { DetailsApi } from "./MoviesDetails/DetailsApi"
import { Register } from "./Register"
// const MainContainer = styled.div`
// display:flex;
// flex-direction:row;
// `

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
const Image = styled.img`
positon:relative;
margin:auto auto;
height:100vh;
width:90%;
background:url("header-bg-image.jpg");
background-size:cover;
border-radius:25px;
z-index:100;
// opacity:0.41;
margin-top:-2%;
box-shadow:1rem 1rem 1rem 2rem #16020bff;
`
export const Num1 = (props) => {
    const [playVideo, setPlayVideo] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPlayVideo(true)
        }, 2000);

        return (() => clearTimeout(timer))
    })
    console.log(props.list)
    return (
        <div>
            <Container>
                {props.list.slice(0, 1).map((poster, index) => {
                    return (!playVideo ?
                        <Image src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} alt={poster.name} onClick={() => setPlayVideo(true)} />
                        : <GetMovieId key={index} idIs={poster.id} type="tv" />
                    )
                })}
            </Container >
        </div >
    )
}