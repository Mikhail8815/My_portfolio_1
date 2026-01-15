import styled from "styled-components";

export const About = styled.section`
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    align-items: center;
    transition: ${(props) => props.theme.animations.transition};
    position: relative;
`;

export const TextContainer = styled.div`
    min-width: 350px;
    max-width: 500px;
    flex: 1;
    text-align: left;

    @media ${(props) => props.theme.media.tablet} {
        min-width: 100%;
        text-align: center;
        margin-bottom: 30px;
        order: 1;
    }

    @media ${(props) => props.theme.media.mobile} {
        min-width: 100%;
    }
`;

export const AboutText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.font};
    margin-bottom: 20px;
    text-align: justify;
`;

const Photo = styled.img`
    width: 330px;
    height: 430px;
    object-fit: cover;
    margin-right: 15px;

    @media ${(props) => props.theme.media.tablet} {
        order: 2; 
        margin-right: 0;
        margin-bottom: 30px;
    }

    @media ${(props) => props.theme.media.mobile} {
        width: 260px;
        height: 330px;
        margin-right: 0;
        margin-bottom: 30px;
    }
`;

export const DesktopButtonContainer = styled.div`
    margin-top: 30px;

    @media ${(props) => props.theme.media.tablet} {
        display: none;
    }
`;

export const MobileButtonContainer = styled.div`
  display: none; 
  width: 100%;
  margin-top: 20px;
  
  @media ${(props) => props.theme.media.tablet} {
    display: block;
    order: 3; 
  }
`;

export const S = {
    About,
    TextContainer,
    AboutText,
    Photo,
    DesktopButtonContainer,
    MobileButtonContainer,
};