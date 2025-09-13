import { DetailsApi } from "../MoviesDetails/DetailsApi";
import { GetYouTubeUrl } from "./GetYoutubeUrl";

export const GetMovieId = (props) => {
    return (
        <>
            {/* to get the video url  */}
            <GetYouTubeUrl id={props.idIs} type="tv" />
        </>
    )
}