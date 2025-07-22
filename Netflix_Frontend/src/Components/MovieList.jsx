import { useState } from "react"
import styled from "styled-components"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const movies = [{
    id: 1,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZV4NmkRBbtoq8O_5Aro81rbq4CRwiku0decuhWlpXGKK4pGsQ9LDCWu_Yf0jv8z5goKbOMQxZ-7ZJDxzXDBbkQcobG_TzvyQsNq6FqbmzhZ-z2jB5kKb1mk6-4mwpXXdznp.jpg?r=609"
}, {
    id: 2,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb4gKZLhdC-EVRjZLQK3urvHlgV-lANKan3WXqOpghQwCT7RHMVQPGeaudSbc64jnCVOO9sKliR5aQowrDencoRfw-S3F134nJQ.jpg?r=d95"
}, {
    id: 3,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcp78Rdp55SSg20FF6XRLCVxiXCMAbHP1cuKb9J5t2wqPhrYFSR5mdQuZDy_CIYFBmIegxdVDj7qrz56Kg3XvGjxBY9zg_w22pMveJEd77e1HxODQTTR40HgyJKjv9y7SbyK.jpg?r=5d9"
}, {
    id: 4,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABct1RW0RPLDOf1ivX-O0WGjNZ5Cb9XH086B0iar_brke2zA_qSPaseR9omexohvwcqSIm6RzR7tnnEbdVFCOxWUK6B7IEWrgXkTICkd1stuvXZlhnBW8ptU-G1umAuxG_A_y.jpg?r=81a"
}, {
    id: 5,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWS-EyoFBa-Svry6VvSCb6i3SN_WT20j-Iy5uiKWKH9rNk9qGhr97KLX_so6qg-EGRk5kyuXamvO6bwxx_DptuTt_iIGWIAxkoA.jpg?r=c23"
}, {
    id: 6,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRe8IFKaQtN-uCfkGMACmNrWS4DdnpSmhijvGwoak50b-GpZwWcSv1-emLg0WUJy0wk5rsNQiwtrQzwhJjQxVWMvDVfO3tN1JqU.jpg?r=e74"
}, {
    id: 7,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZV4NmkRBbtoq8O_5Aro81rbq4CRwiku0decuhWlpXGKK4pGsQ9LDCWu_Yf0jv8z5goKbOMQxZ-7ZJDxzXDBbkQcobG_TzvyQsNq6FqbmzhZ-z2jB5kKb1mk6-4mwpXXdznp.jpg?r=609"
}, {
    id: 8,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABb4gKZLhdC-EVRjZLQK3urvHlgV-lANKan3WXqOpghQwCT7RHMVQPGeaudSbc64jnCVOO9sKliR5aQowrDencoRfw-S3F134nJQ.jpg?r=d95"
}, {
    id: 9,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcp78Rdp55SSg20FF6XRLCVxiXCMAbHP1cuKb9J5t2wqPhrYFSR5mdQuZDy_CIYFBmIegxdVDj7qrz56Kg3XvGjxBY9zg_w22pMveJEd77e1HxODQTTR40HgyJKjv9y7SbyK.jpg?r=5d9"
}, {
    id: 10,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABct1RW0RPLDOf1ivX-O0WGjNZ5Cb9XH086B0iar_brke2zA_qSPaseR9omexohvwcqSIm6RzR7tnnEbdVFCOxWUK6B7IEWrgXkTICkd1stuvXZlhnBW8ptU-G1umAuxG_A_y.jpg?r=81a"
}, {
    id: 11,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWS-EyoFBa-Svry6VvSCb6i3SN_WT20j-Iy5uiKWKH9rNk9qGhr97KLX_so6qg-EGRk5kyuXamvO6bwxx_DptuTt_iIGWIAxkoA.jpg?r=c23"
}, {
    id: 12,
    image: "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRe8IFKaQtN-uCfkGMACmNrWS4DdnpSmhijvGwoak50b-GpZwWcSv1-emLg0WUJy0wk5rsNQiwtrQzwhJjQxVWMvDVfO3tN1JqU.jpg?r=e74"
},
]

const CardContainer = styled.div`
margin:5rem 5rem 5rem 6rem;
display:flex;
align-items:center;
gap:3rem;
`
const Card = styled.div`
position:relative;
display:flex:
align-items:center;
justify-content:center;
transition:all .7s ease-in-out;
&:hover{
transform:scale(1.1)
}
`
const Image = styled.img`
height:12rem;
width:8rem;
border-radius:15px;
`
const H1 = styled.h1`
bottom:0;
margin-left:-1.7rem;
position:absolute;
font-size:4.8rem;
font-weight:bold;
color:rgba(0,0,0,0.8);
font-family: Arial, Helvetica, sans-serif;
-webkit-text-stroke: 2px rgba(255,255,255,0.8);
text-shadow:0 0 10px 0;
`
const StyledButton = styled.button`
padding:2.7rem 0rem;
border-radius:25px;
font-size:2rem;
text-align:center;
color:white;
background:rgba(66, 65, 65, 0.5);
border:none;
cursor:pointer;
transition:all 1s ease-in;

&:hover{
transform:scale(1.1);
}
}
`
export const MovieList = () => {
    const [movieIndex, setMovieIndex] = useState(0)

    const handleRightClick = () => {
        setMovieIndex(prev => Math.min(prev + 6, movies.length - 6))
    }
    const handleLeftClick = () => {
        setMovieIndex(prev => Math.max(prev - 6, 0))
    }
    const canGoLeft = movieIndex > 0
    const canGoRight = movieIndex + 6 < movies.length
    return (
        <CardContainer>
            {canGoLeft && <StyledButton onClick={handleLeftClick}><MdOutlineKeyboardArrowLeft /></StyledButton>}
            {movies.slice(movieIndex, movieIndex + 6).map(item => {
                return <Card>
                    <H1>{item.id}</H1>
                    <Image key={item.id} src={item.image} alt="image1" />
                </Card>
            })}

            {canGoRight && <StyledButton onClick={handleRightClick}><MdKeyboardArrowRight /></StyledButton>}
        </CardContainer>
    )
}