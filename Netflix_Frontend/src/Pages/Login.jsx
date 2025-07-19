import styled from "styled-components"
import { NavLink } from "react-router-dom"
import "../App.css"
const LoginMainDiv = styled.div`
position:absolute;
top:50%;
left:50%;
tranform:translate(-50%,-50%);
left:auto;
padding:2% 5%;
background-color:rgba(21, 16, 16, 0.8);
text-align:left;
color:white;
z-index:200;
`
const FormDiv = styled.form`
text-align:center;
padding:.3rem;
`
const StyledNavLink = styled(NavLink)`
color:white;
font-size:1.2rem;
`
export const Login = () => {
    return (
        <LoginMainDiv>
            {/* <div style={{ opacity: "1" }} /> */}
            <h1 style={{ textTransform: "capitalize" }}>sign in</h1>
            <FormDiv className="formDiv">
                <input type="text" name="email" id="userEmail" placeholder="Email" /><br />
                <input type="password" name="password" id="userPassword" placeholder="Password" /><br />
                <button type="submit">Sign in</button><br />
                <StyledNavLink>forgot password</StyledNavLink><br />
            </FormDiv>
            <h3>new to netflix clone? <NavLink to="/register">Sign up</NavLink> now</h3>
        </LoginMainDiv>)
}