import "./Style/commonStyle.css"
export const Top10Shows = (props) => {
    return (
        <> <h1 className="moviesHeading">top 10 shows in india today</h1>
            <div className="cardContainer">
                {props.shows?.map((show, index) => (
                    <div className="card" key={index}>
                        <img className="posterImage" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
                    </div>
                ))}
            </div>
        </>
    )
}