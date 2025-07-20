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
margin-top:-2%;
// clip-path: polygon(100% 0, 100% 93%, 50% 100%, 0 93%, 0 0);
box-shadow:1rem 1rem 1rem 2rem #3a051dff;
// -webkit-background-clip: polygon(100% 0, 100% 93%, 50% 100%, 0 93%, 0 0);
`
export const Header = () => {
    return (
        <HeaderBg >
        </HeaderBg>
    )
}
