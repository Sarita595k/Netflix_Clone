import styled from "styled-components"

const RegisterDiv = styled.div`

`
const H3 = styled.h3`
font-weight:100;
font-size:1rem;
`

const InputBox = styled.input`
padding:1rem;
background-color:rgba(118,118,118,0.7);

`
export const Register = () => {
    return (
        <RegisterDiv>
            <H3>Ready to watch? Enter your email to create or restart your membership.</H3>
            <div className="div">
                <InputBox type="email" name="email" id="userEmail" placeholder="Email" autoComplete="off" />
                <button type="submit">get started</button><br />
            </div>
        </RegisterDiv>
    )
}