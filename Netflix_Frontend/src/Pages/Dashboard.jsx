import { MainHeaderApi } from "../Components/MainHeaderApi"
import { MoviesApi } from "../Components/MoviesApi"
import { ShowsApi } from "../Components/ShowsApi"

export const Dashboard = () => {
    return (
        <>
            {/* <h1>Welcome to your dashboard</h1> */}
            <MainHeaderApi />
            <MoviesApi />
            <ShowsApi />
        </>
    )
}