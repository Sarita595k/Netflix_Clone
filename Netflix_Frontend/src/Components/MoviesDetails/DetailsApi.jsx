import { useEffect, useState } from "react"

export const DetailsApi = (props) => {
    const [details, setDetails] = useState({})
    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${props.id}?api_key=426a13d01b97cad474a6729816a0e719`)
            const data = await response.json()
            console.log(data)
            setDetails(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])
    return (
        <>
            <h1>{details.name}</h1>
            <h3>language: {details.original_language}</h3>
        </>
    )
}