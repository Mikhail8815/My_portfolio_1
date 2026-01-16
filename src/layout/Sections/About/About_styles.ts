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
    min-width: 380px;
    max-width: 550px;
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
    line-height: 1.5;
    color: ${(props) => props.theme.colors.font};
    margin-bottom: 20px;
    text-align: justify;
`;

const Photo = styled.img`
    width: 380px; 
    height: 480px; 
    object-fit: cover;
    object-position: center 15%;  
    margin-right: 20px; 
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); 

    @media ${(props) => props.theme.media.tablet} {
        width: 320px;
        height: 420px;
        order: 2;
        margin-right: 0;
        margin-bottom: 30px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    @media ${(props) => props.theme.media.mobile} {
        width: 280px;
        height: 380px; 
        border-radius: 6px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
    }
`;

export const DesktopButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center; /* Центрируем кнопки */
    width: 100%;

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