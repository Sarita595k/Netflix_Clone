import styled from "styled-components"
import { GetMovieId } from "./Youtube/GetMovieId"
import { useState } from "react"
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`
const Image = styled.img`
width:80%;
height:100vh;
object-fit:fill;
cursor:pointer;
`
export const Num1 = (props) => {
    const [playVideo, setPlayVideo] = useState(false)

    // console.log(props.list)
    return (
        <Container>
            {props.list.slice(0, 1).map((poster, index) => {
                return (!playVideo ?
                    <Image src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`} alt={poster.name} onClick={() => setPlayVideo(true)} />
                    : <GetMovieId key={index} idIs={poster.id} type="tv" />
                )
            })}
        </Container >
    )
}