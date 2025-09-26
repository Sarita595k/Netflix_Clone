import { NavLink } from 'react-router-dom'
// imported styled component
import styled from 'styled-components'

const NavbarDiv = styled.div`
position:relative;
margin:-3% 6% 0 6%;
height:20vh;
display:flex;
align-items:center;
justify-content:space-between;
z-index:100;
`

const LogoImage = styled.img`
height:50%;
width:20%;
`
const SignInBtn = styled.button`
width:100%;
margin-right:5%;
background:white;
padding:.7rem 0;
border-radius:2.5rem;
border:none;
text-decoration:none;
`
const StyledNavLink = styled(NavLink)`
font-size:1rem;
font-weight:bold;
color:black;
text-transform:capitalize;
text-decoration:none;

&:hover
`
// navbar component created 
export const Navbar = () => {
    return (
        <NavbarDiv className='grid grid-cols-1'>
            <NavLink to='/'><LogoImage src='\Netflix_Logo_Print_.png' alt="logo image" /></NavLink>
            <SignInBtn><StyledNavLink to='/login'>sign in</StyledNavLink></SignInBtn>
        </NavbarDiv >
    )
}