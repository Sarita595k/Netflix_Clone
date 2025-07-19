import styled from "styled-components"

const HeaderBg = styled.div`
positon:relative;
margin:auto auto;
height:100vh;
width:95%;
background-image:url("header-bg-image.jpg");
background-size:cover;
border-radius:25px;
`
export const Header = () => {
    return (
        <HeaderBg >
        </HeaderBg>
    )
}