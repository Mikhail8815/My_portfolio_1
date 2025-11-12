import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`
const Slide = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

const Text = styled.p`
    color: ${props => props.theme.colors.font};
    max-width: 500px; 
    line-height: 1.4; 
    margin: 0 0 20px; 
`

const Title = styled.h3` 
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 20px; 
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 20px 0 15px;
    color: ${props => props.theme.colors.font};
`

const Pagination = styled.div`
span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    &+span {
        margin-left: 5px;
        
    }
    &.active {
        background-color: ${props => props.theme.colors.accent};
        width: 20px;
    }
}
`
export const S = {
    Slider,
    Slide,
    Text,
    Title,
    Pagination
}