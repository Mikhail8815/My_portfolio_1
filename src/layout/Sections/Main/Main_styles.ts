import styled from "styled-components";
import {font} from "../../../styles/Common";

const Photo = styled.img`
    width: 330px;
    height: 430px;
    object-fit: cover;
    margin-right: 15px;
    
    @media screen and (max-width: 860px) {
        order: 2;
    }
    

    @media ${props => props.theme.media.mobile}{
        width: 260px;
        height: 330px;
    }
`
const Main = styled.section`
    min-height: 100vh;
    display: flex;
    transition: ${props => props.theme.animations.transition};
`
const TextContainer = styled.div`
    min-width: 350px; 
    max-width: 500px;
    flex: 1;

    @media screen and (max-width: 860px) {
        min-width: 100%;
        max-width: 100%;
        text-align: left;
        margin-bottom: 30px;
        padding: 0 20px;
        order: 1; 
    }
    
    @media ${props => props.theme.media.tablet} {
        min-width: 100%;
        text-align: left;
        margin-bottom: 50px;
    }
    
    @media ${props => props.theme.media.mobile} {
        min-width: 100%;
    }
`
const MainTitle = styled.h1`
    // ${font({ weight: 400, Fmax: 27, Fmin:20 })}
    color: ${props => props.theme.colors.font};
    .Typewriter {
        display: inline-block;
        min-width: 250px; 
    }
`
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin:36 })}
    letter-spacing: 0.05em;
    margin: 10px 0;
    color: ${props => props.theme.colors.font};
    
    span {
        position: relative;
        z-index: 0;
        display: inline-block;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${props => props.theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
    @media ${props => props.theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme.colors.font};
`

const PhotoWrapper = styled.div`
position: relative;
    z-index: 0;
    
    @media screen and (max-width: 860px) {
        order: 2; 
        margin-top: 20px;
    }
    &::before {
        content: "";
        width: 330px;
        height: 440px;
        border: 5px solid ${props => props.theme.colors.accent};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${props => props.theme.media.mobile} {
            width: 264px;
            height: 364px;
            top: -12px;
            left: 15px;
        }
        
    }
    @media ${props => props.theme.media.mobile} {
        margin-top: 65px;
    }
`

export const S = {
    Photo,
    Main,
    MainTitle,
    Name,
    SmallText,
    PhotoWrapper,
    TextContainer
}