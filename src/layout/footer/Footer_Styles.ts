import styled from "styled-components";
import {font} from "../../styles/Common";


const Footer = styled.footer`
    background-color: ${props => props.theme.colors.primaryBg};
    padding: 40px 0;
    position: relative;
    transition: ${props => props.theme.animations.transition};
`
const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
    color: ${props => props.theme.colors.font};
`

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme.colors.font};
    transition: ${props => props.theme.animations.transition};
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
  
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    gap: 8px;
    align-items: center; 
    width: 100%; 
    
    a {
      justify-content: center; 
      text-align: center;
    }
  }
`
const SocialList = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.animations.transition};
    
    &:hover {
        color: ${props => props.theme.colors.primaryBg};
        transform: translateY(-4px);
        background: ${props => props.theme.colors.accent};
    }

`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.7;
    color: ${props => props.theme.colors.font};
`
export const S = {
    Footer,
    Name,
    ContactInfo,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}