import styled from "styled-components"


const HeaderBg = styled.div`
positon:relative;
margin:auto auto;
height:100vh;
width:95%;
background-image:url("header-bg-image.jpg");
background-size:cover;
border-radius:25px;
z-index:100;
opacity:0.41;
`
export const Header = () => {
    return (
        <HeaderBg >
        </HeaderBg>
    )
}
