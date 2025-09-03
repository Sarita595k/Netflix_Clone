import { useEffect, useState } from "react"
import styled from "styled-components"

const Div = styled.div`
color:white;
`

const Image = styled.img`
height:20rem;
width:20rem;`
export const DashboardMoviesList = () => {
    const [moviesList, setMoviesList] = useState([])

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=426a13d01b97cad474a6729816a0e719&source_id=203&watch_region=IN&sort_by=primary_release_date.lte=${Date.now()}`)
            const data = await response.json();
            setMoviesList(data.results)
            console.log(data);
        } catch (err) {
            console.log("error in fetching data")
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <Div>
            <h1>movies are</h1>
            {moviesList.map((movie, index) => (
                <>
                    <h1 key={index}>{movie.title}</h1>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </>
            ))
            }


        </Div>
    )
}