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
`

const Text = styled.p`
color: ${props => props.theme.colors.font}
`

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 32px;
    display: inline-block;
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
    Name,
    Pagination
}