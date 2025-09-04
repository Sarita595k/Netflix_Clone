import { useEffect, useState } from "react"
import { Top10Shows } from "./Top10Shows"

export const ShowsApi = () => {
    const [showsList, setShowsList] = useState([])

    const fetchShows = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=426a13d01b97cad474a6729816a0e719&sort_by=popularity.desc&region=IN`)
            const data = await response.json()
            setShowsList(data.results)
            console.log(data.results)
        } catch (err) {

        }
    }

    useEffect(() => {
        fetchShows()
    }, [])
    return (
        <>
            <Top10Shows shows={showsList} />
        </>
    )
}