import { useEffect, useState } from "react"
import styled from "styled-components"
import "./Style/commonStyle.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Div = styled.div`
padding:1rem;
color:white;
`
const MainContainer = styled.div`
display:flex;
`
const Container = styled.div`
display:flex;
gap:1rem;
flex-wrap:no-wrap;
`
const MovieContainer = styled.div`
display:flex;
flex-direction:column;
`
const Image = styled.img`
height:15rem;
width:10rem;`

export const RecommendedMovies = (props) => {
    console.log(props.movie)
    return (
        <Div>
            <h1 className="moviesHeading">recommended movies</h1>
            <MainContainer>
                <p className="styledButton"><MdOutlineKeyboardArrowLeft /></p>
                <Container>
                    {(props.movie).slice(0, 10)?.map((movie, index) => (
                        // {moviesList.map((movie, index) => (
                        <MovieContainer key={index}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </MovieContainer>
                    ))}
                </Container>
                <p className="styledButton"><MdKeyboardArrowRight /></p>
            </MainContainer>

        </Div>
    )
}