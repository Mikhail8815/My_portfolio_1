import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const Works = styled.section`
  ${FlexWrapper} {
      gap: 30px;
  }
`
const Work = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;
    
    ${Link} {
        padding: 10px 0;
        &+${Link} {
            margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`
const Description = styled.div`
    padding: 25px 20px;
`
const ImageWrapper = styled.div`
    position: relative;
    &:hover {
        &::before {
           opacity: 1;
        }
        button {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        button {
            opacity: 1;
        }
    }
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }
`

export const S = {
    Works,
    Work,
    Image,
    Title,
    Text,
    Description,
    ImageWrapper
}