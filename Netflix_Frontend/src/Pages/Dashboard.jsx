import { MainHeaderApi } from "../Components/MainHeaderApi"
import { MoviesApi } from "../Components/MoviesApi"
import { DetailsApi } from "../Components/MoviesDetails/DetailsApi"
import { ShowsApi } from "../Components/ShowsApi"
import styled from "styled-components"

const Container = styled.div`
display:flex;
flex-direction:column;
`
export const Dashboard = () => {
    return (
        <Container>
            {/* <h1>Welcome to your dashboard</h1> */}
            <MainHeaderApi />
            <DetailsApi />
            <MoviesApi />
            <ShowsApi />
        </Container>
    )
}