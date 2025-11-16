import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    
    .alice-carousel {
        margin-top: 20px; 
    }

    .alice-carousel__dots {
        margin: 20px 0 0 0; 
    }

    .alice-carousel__dots-item {
        background-color: ${props => props.theme.colors.font}!important;
        opacity: 0.3;
        width: 8px;
        height: 8px;
        margin: 0 4px;
        border-radius: 50%;
        transition: all 0.3s ease;
    }

    .alice-carousel__dots-item.__active {
        background-color: ${props => props.theme.colors.accent}!important;
        opacity: 1;
        width: 20px;
        border-radius: 10px;
    }
`
const Slide = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
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

export const S = {
    Slider,
    Slide,
    Text,
    Title,
}