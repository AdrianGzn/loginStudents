import styled from "styled-components";

const ButtonStyled = styled.button`
font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: white;
    background-color: #171717;
    padding: 1em 2em;
    border: none;
    border-radius: .6rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
`;

function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;
