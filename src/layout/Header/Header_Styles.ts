import styled from "styled-components";

const Header = styled.header`
    background-color: ${props => props.theme.colors.primaryBg};
    opacity: 0.9;
    padding: 10px 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99999;
    transition: ${props => props.theme.animations.transition};
`

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 20px);
`

const ControlsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; 
`
const RightGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 0; 
    flex-shrink: 1; 
    
    overflow: hidden; 
`
export const S = {
    Header,
    LeftGroup,
    ControlsWrapper,
    RightGroup
}