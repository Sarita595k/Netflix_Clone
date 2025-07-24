import styled from "styled-components"
import { NavLink } from "react-router-dom"
import "../App.css"

const MainDiv = styled.div`
height:100vh;
background-image: url('/header2.jpg');
background-size:cover;
opacity:.7;
margin-top:-10rem;
`

const LoginMainDiv = styled.div`
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
const StyledNavLink = styled(NavLink)`
color:white;
font-size:1.2rem;
`
export const Login = () => {
    return (<>
        <MainDiv />
        <LoginMainDiv>
            {/* <div style={{ opacity: "1" }} /> */}
            <h1 style={{ textTransform: "capitalize" }}>sign in</h1>
            <FormDiv className="formDiv">
                <input type="email" name="email" id="userEmail" placeholder="Email" autoComplete="off" required /><br />
                <input type="password" name="password" id="userPassword" placeholder="Password" autoComplete="off" required /><br />
                <button type="submit">Sign in</button><br />
                <StyledNavLink>forgot password</StyledNavLink><br />
                {/* <label htmlFor="userRemember">
                    <input type="checkbox" name="remember" id="userRemember" />remember me</label> */}
            </FormDiv>
            <h3 className="loginh3">new to Netflix clone? <NavLink className="signupLink" to="/register">Sign up</NavLink> now</h3>
        </LoginMainDiv></>)
}