import "./Style/commonStyle.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Top10Shows = (props) => {
    return (
        <> <h1 className="moviesHeading">top 10 shows in india today</h1>
            <div className="cardContainer">
                <p className="styledButton"><MdOutlineKeyboardArrowLeft /></p>

                {props.shows.slice(0, 6)?.map((show, index) => (
                    <div className="card" key={index}>
                        <img className="posterImage" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
                    </div>
                ))}
                <p className="styledButton"><MdKeyboardArrowRight /></p>
            </div>
        </>
    )
}