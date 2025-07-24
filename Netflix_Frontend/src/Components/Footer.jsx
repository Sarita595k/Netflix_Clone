import styled from "styled-components"

const Div = styled.div`
margin:5% 0;
display:flex;
justify-content:space-evenly;
color:white;`
export const Footer = () => {
    return (
        <Div><p>Questions? call 0000-000-000</p>
            <p>Avsar &copy; All rights reserved!</p>
            <p>Netflix_Clone India</p>
        </Div>
    )
}