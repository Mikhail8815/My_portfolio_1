import styled from "styled-components";

const Skills = styled.section`
   position: relative;
`
const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkillTitle = styled.h3`
  margin: 20px 0 0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.3;
  max-width: 110px; 
  word-wrap: break-word;
  color: ${props => props.theme.colors.font};
  
  @media ${props => props.theme.media.mobile} {
    font-size: 12px;
    max-width: 90px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden; 
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px; 
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 30px;
    background: ${props => props.theme.colors.accent};
    filter: blur(15px);
    opacity: 0.6;
    z-index: 1;
  }
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%; 
    background: linear-gradient(
      to top,
      ${props => props.theme.colors.accent}30 0%,
      transparent 100%
    );
    border-radius: 0 0 100px 100px; 
    z-index: 1;
  }
  
  & > svg {
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 2;
    color: ${props => props.theme.colors.accent};
  }
  
  @media ${props => props.theme.media.mobile}  {
    width: 80px;
    height: 80px;
    
    &::after {
      bottom: -8px;
      height: 20px;
      filter: blur(12px);
    }
    
    & > svg {
      width: 40px;
      height: 40px;
    }
  }
`

export const S = {
    Skills,
    Skill,
    SkillTitle,
    IconWrapper
}