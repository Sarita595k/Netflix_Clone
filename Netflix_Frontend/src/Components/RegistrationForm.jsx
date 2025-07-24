import styled from "styled-components"
import { NavLink } from "react-router-dom"
import "../App.css"

const RegistrationMainDiv = styled.div`
width:30%;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding:2% 5%;
background-color:rgba(21, 21, 21, 0.9);
text-align:left;
color:white;
z-index:200;
`
const FormDiv = styled.form`
text-align:center;
padding:.3rem;
`
const H3 = styled.h3`
text-align:center;
`

const StyledNavLink = styled(NavLink)`
color:white;
font-size:1.2rem;
font-weight:bold;
`
export const RegistrationForm = () => {
    return (<>
        <RegistrationMainDiv>
            {/* <div style={{ opacity: "1" }} /> */}
            <h1 style={{ textTransform: "capitalize" }}>sign up</h1>
            <FormDiv className="formDiv">
                <input type="text" name="name" id="username" placeholder="Name" autoComplete="off" />
                <input type="email" name="email" id="userEmail" placeholder="Email" autoComplete="off" /><br />
                <input type="password" name="password" id="userPassword" placeholder="Password" autoComplete="off" /><br />
                <button type="submit">Sign up</button><br />
            </FormDiv>
            <H3 className="loginh3">Already have an account on Netflix clone? <NavLink className="signupLink" to="/login">Sign in</NavLink> now</H3>
        </RegistrationMainDiv>
    </>)
}