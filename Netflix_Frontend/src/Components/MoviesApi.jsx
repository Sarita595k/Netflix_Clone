import { useState, useEffect } from "react";
import { RecommendedMovies } from "./RecommendedMovies";

export const MoviesApi = () => {
    const [moviesList, setMoviesList] = useState([])

    // fetching the movie data from the api 
    const fetchMovies = async () => {
        try {
            const today = new Date().toISOString().split('T')[0];
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=426a13d01b97cad474a6729816a0e719&region=IN&primary_release_date.lte=${today}`);
            const data = await response.json();
            setMoviesList(data.results)
            // console.log(data);
        } catch (err) {
            console.log("error in fetching data")
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <>
            <RecommendedMovies movie={moviesList} />
        </>
    )
}