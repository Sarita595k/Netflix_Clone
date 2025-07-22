import styled from "styled-components"
import { FaDesktop } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import { LuMessagesSquare } from "react-icons/lu";

const Container = styled.div`
color:white;
margin:5rem 2rem 5rem 5rem;;
`
const H1 = styled.h1`
color:white;
font-weight:300;
font-size:1.5rem;
font-family: Arial, Helvetica, sans-serif;
font-size:1.5rem;
text-transform:lowercase;

&::first-letter{
text-transform:uppercase;
}
`
const CardContainer = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:2rem;
`
const Card = styled.div`
width:40%;
padding:1.7rem 2rem;
background-image:linear-gradient(150deg, #192044,#210e17);
border-radius:25px;
position:relative;
`

const CardTitle = styled.h3`
font-size:1.3rem;
margin:0;
font-weight:200;
text-transform:lowercase;

&::first-letter{
text-transform:uppercase;
}
`
const CardDescription = styled.p`
color:#9393a0;
margin-bottom:3rem;
`
const Icons = styled.span`
position:absolute;
bottom:0;
font-size:3rem;
background-color:transparent;
border:none;
right:2rem;
color:#9e2ba7;
// background-image:linear-gradient(45deg,#812796,#250f26,#9e2ba7);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;,
 display: inline-block;
`
const reasons = [{
    title: "enjoy on your tv",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: FaDesktop
},
{
    title: "Download your shows to watch offline",
    description: "Save your favourites easily and always have something to watch.",
    icon: FaArrowCircleDown
}, {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: GoTelescope
}, {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: LuMessagesSquare
}]


export const ReasonsToJoin = () => {
    return (
        <Container>
            <H1>more resaons to join</H1>
            <CardContainer>
                {reasons.map((reason, index) => {
                    const IconComponent = reason.icon;
                    return <Card key={index}>
                        <CardTitle>{reason.title}</CardTitle>
                        <CardDescription>{reason.description}</CardDescription>
                        <Icons><IconComponent /></Icons>
                    </Card>
                })}
            </CardContainer>
        </Container>
    )
}