import { useEffect, useState } from "react"
import styled from "styled-components"
import "./Style/commonStyle.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


export const RecommendedMovies = (props) => {
    // console.log(props.movie)
    return (
        <div className="mainContainer">
            <h1 className="moviesHeading">recommended movies</h1>
            <div className="cardContainer">
                <p className="styledButton"><MdOutlineKeyboardArrowLeft /></p>
                {(props.movie).slice(0, 6)?.map((movie, index) => (
                    // {moviesList.map((movie, index) => (
                    <div className="card" key={index}>
                        <img className="posterImage" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
                <p className="styledButton"><MdKeyboardArrowRight /></p>
            </div>

        </div>
    )
}