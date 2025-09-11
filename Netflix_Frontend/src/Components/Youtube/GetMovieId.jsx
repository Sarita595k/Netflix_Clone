import { DetailsApi } from "../MoviesDetails/DetailsApi";
import { GetYouTubeUrl } from "./GetYoutubeUrl";

export const GetMovieId = (props) => {
    return (
        <>
            <GetYouTubeUrl id={props.idIs} type="tv" />
        </>
    )
}