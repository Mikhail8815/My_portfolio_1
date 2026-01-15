import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "../../../components/Link";

const Works = styled.section`
  ${FlexWrapper} {
      gap: 30px;
  }
    position: relative;
`
const Work = styled.div`
    background-color: ${props => props.theme.colors.primaryBg};
    transition: ${props => props.theme.animations.transition};
    
    ${Link} {
        padding: 10px 0;
        &+${Link} {
            margin-left: 20px;
        }
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
color: ${props => props.theme.colors.font};
`

const Text = styled.p`
    margin: 14px 0 10px;
    color: ${props => props.theme.colors.font};
`
const Description = styled.div`
    padding: 25px 20px;
`
const ShowProjectButton = styled.button`
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${props => props.theme.animations.transition};
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    color: white;
    background-color: ${props => props.theme.colors.accent};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: white;
        color: ${props => props.theme.colors.accent};
        transform: translate(-50%, -50%) scale(1.05);
    }
`
const ImageWrapper = styled.div`
    position: relative;
    &:hover {
        &::before {
           opacity: 1;
        }
        ${ShowProjectButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${props => props.theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${ShowProjectButton} {
            opacity: 1;
        }
    }
    
`


export const S = {
    Works,
    Work,
    Image,
    Title,
    Text,
    Description,
    ImageWrapper,
    ShowProjectButton
}