import styled from "styled-components";

const DivStyled = styled.div`
    width: 100%;
    height: auto;
    margin: 5px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
`;

function Card (props){
    return (<>
        <DivStyled key={props.key}>
            {props.children}
        </DivStyled>
    </>)
}

export default Card;