import { useEffect, useState } from "react"
import { VideoPlayer } from "./VideoPlayer"

export const GetYouTubeUrl = (props) => {
    const [key, setKey] = useState("")

    const fetchKey = async () => {
        try {
            const fetchId = await fetch(`https://api.themoviedb.org/3/${props.type}/${props.id}/videos?api_key=426a13d01b97cad474a6729816a0e719`)
            const data = await fetchId.json()
            console.log(data.results)
            const trailer = data.results.find((video) => video.type === "Trailer" && video.site === "YouTube")
            if (trailer) {
                setKey(trailer.key)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchKey()
    }, [])
    return (
        <>
            <VideoPlayer keyValue={key} />
        </>
    )
}