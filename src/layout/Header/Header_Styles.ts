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
export const S = {
    Header,
}