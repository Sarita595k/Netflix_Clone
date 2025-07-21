import { NavLink } from "react-router-dom"
import styled from "styled-components"

const RegisterDiv = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const H3 = styled.h3`
font-weight:100;
font-size:1rem;
`

const InputBox = styled.input`
width:60%;
padding:1rem;
border:none;
background-color:rgba(118,118,118,0.7);
border-radius:25px;
color:white;
outline:none;
font-size:1rem;

&::placeholder{
color:rgba(218, 208, 208, 0.7);
word-spacing:1.2px;
font-weight:500;
}
`
const StyledNavLink = styled(NavLink)`
width: 30%;
padding: .8rem;
margin: 1rem;
border: none;
font-weight: bold;
font-size: 1rem;
background-color: red;
color:white;
text-transform: capitalize;
text-decoration:none;
border-radius:25px;
`


export const Register = () => {
    return (
        <>
            <H3>Ready to watch? Enter your email to create or restart your membership.</H3>
            <RegisterDiv>
                <InputBox type="email" name="email" id="userEmail" placeholder="Email Address" autoComplete="off" />
                <StyledNavLink to="/register">get started</StyledNavLink>
            </RegisterDiv>
        </>
    )
}