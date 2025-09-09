import { useEffect, useState } from "react"
import { Num1 } from "../Num1"

export const GetYouTubeUrl = (props) => {
    const [key, setKey] = useState("")

    const fetchKey = async () => {
        try {
            const fetchId = await fetch(`https://api.themoviedb.org/3/tv/${props.idIs}/videos?api_key=426a13d01b97cad474a6729816a0e719`)
            const data = await fetchId.json()
            console.log(data.results)
            setKey(data.results[0].key)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchKey()
    }, [])
    return (
        <>
            <Num1 list={key} />
            {/* <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe> */}

        </>
    )
}