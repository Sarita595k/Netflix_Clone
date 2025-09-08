import { MoviesApi } from "../Components/MoviesApi"
import { Num1 } from "../Components/Num1"
import { ShowsApi } from "../Components/ShowsApi"

export const Dashboard = () => {
    return (
        <>
            <h1>Welcome to your dashboard</h1>
            <Num1 />
            <MoviesApi />
            <ShowsApi />

        </>
    )
}