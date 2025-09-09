import styled from "styled-components"

const Div = styled.div`
width:80%;
height:80vw;
margin:auto;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:fill;
`

export const Num1 = (props) => {
    // console.log(props.list)
    return (
        <>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${props.list}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </>
    )
}