import styled from "styled-components"
import { NavLink } from "react-router-dom"
import "../App.css"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/users/signup", {
                name, email, password
            })
            alert("Sign up successfully!")
            setName("")
            setEmail("")
            setPassword("")
        } catch (err) {
            alert("Failed to signup!:(")
        }
    }
    return (<>
        <RegistrationMainDiv>
            {/* <div style={{ opacity: "1" }} /> */}
            <h1 style={{ textTransform: "capitalize" }}>sign up</h1>
            <FormDiv className="formDiv" onSubmit={handleSignup}>
                <input type="text" name="name" id="username" placeholder="Name" autoComplete="off" value={name} onChange={(event) => setName(event.target.value)} required />
                <input type="email" name="email" id="userEmail" placeholder="Email" autoComplete="off" value={email} onChange={(event) => setEmail(event.target.value)} required /><br />
                <input type="password" name="password" id="userPassword" placeholder="Password" autoComplete="off" value={password} onChange={(event) => setPassword(event.target.value)} required /><br />
                <button type="submit">Sign up</button><br />
            </FormDiv>
            <H3 className="loginh3">Already have an account on Netflix clone? <NavLink className="signupLink" to="/login">Sign in</NavLink> now</H3>
        </RegistrationMainDiv>
    </>)
}