import { GetYouTubeUrl } from "./GetYoutubeUrl";

export const GetMovieId = (props) => {
    console.log(props.list);

    return (
        <>
            {props.list.map((videoIs, index) => {
                return <GetYouTubeUrl idIs={videoIs.id} />
            })}
        </>
    )
}