import { useEffect, useState } from "react";
import { Num1 } from "./Num1";
// import { GetMovieId } from "./Youtube/GetMovieId";
// import { GetYouTubeUrl } from "./Youtube/GetYoutubeUrl";

export const MainHeaderApi = () => {
    const [show, setShow] = useState([])

    // fetching the api with mixed data movies as well as shows
    const fetchMainApi = async () => {
        try {
            const today = new Date().toISOString().split('T')[0];
            const url = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=426a13d01b97cad474a6729816a0e719&sort_by=popularity.desc&region=IN&primary_release_date.lte=${today}`)
            const data = await url.json()
            setShow(data.results)
            // console.log("new data" + data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchMainApi()
    }, [])
    return (
        <>
            <Num1 list={show} />
        </>
    )
}