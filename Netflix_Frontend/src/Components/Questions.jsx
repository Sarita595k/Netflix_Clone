import React, { useState } from "react"
import styled from "styled-components"
const questionsList = [{
    question: "What is Netflix",
    solution: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
}, {
    question: `How much does it cost?`,
    solution: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`
}, {
    question: `Where can I watch?`,
    solution: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
}, {
    question: `How do I cancel?`,
    solution: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
}, {
    question: `How can I watch on Netflix?`,
    solution: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
}, {
    question: `Is Netflix good for kids?`,
    solution: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
}]

const QuestionsContainer = styled.div`
width:100%;
padding:5%;
max-width:90%;
`

const Div = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
background-color:rgba(102, 100, 100, 0.5);
margin:1.2rem 0;
transition:all .3s ease-in-out;
cursor:pointer;

&:hover{
background-color:rgba(79, 77, 77, 0.5);
}
`
const QuestionH3 = styled.h1`
font-size:1.5rem;
font-weight:300;
padding:1rem 1rem;
color:white;
`
const PlusIcon = styled.h1`
font-size:2.3rem;
font-weight:600;
color:white;
margin-right:5%;
`
const Description = styled.div`
padding:2rem;
margin-top:-1rem;
font-size:1.6rem;
font-weight:500;
color:white;
background-color:rgba(102, 100, 100, 0.5);
`
export const Frequently = () => {
    const [showIndex, setShowIndex] = useState(null)

    const showDescription = (index) => {
        setShowIndex(prev => prev === index ? null : index)
    }
    return (
        <QuestionsContainer>
            {questionsList.map((item, index) => {
                return (<React.Fragment key={index}>
                    <Div onClick={() => showDescription(index)}>
                        <QuestionH3>{item.question}</QuestionH3>
                        <PlusIcon>{showIndex === index ? "x" : "+"}</PlusIcon>
                    </Div>
                    {showIndex === index &&
                        <Description>{item.solution}</Description>}
                </React.Fragment>
                )
            })}
        </QuestionsContainer>
    )
}