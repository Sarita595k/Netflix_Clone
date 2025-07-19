import styled from "styled-components"

const HeaderContainer = styled.div`
background-image:url('/header-bg-image.jpg');
position:absolute;
opacity:0.16;
`
export const Home = () => {
    return (<HeaderContainer>
        <h1>Home Page</h1>
    </HeaderContainer>)
}