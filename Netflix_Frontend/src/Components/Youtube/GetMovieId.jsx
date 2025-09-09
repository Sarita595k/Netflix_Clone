import { GetYouTubeUrl } from "./GetYoutubeUrl";

export const GetMovieId = (props) => {
    console.log(props.idIs);

    return (
        <>
            {/* {props.list.map((videoIs, index) => {
                return <GetYouTubeUrl idIs={videoIs.id} />
            })} */}
            <GetYouTubeUrl id={props.idIs} type="tv" />
        </>
    )
}