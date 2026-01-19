import styled, {css} from "styled-components";
import {Link} from "react-scroll";

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow: hidden;
    color: ${props => props.theme.colors.accent};
    transition: ${props => props.theme.animations.transition};
    
    &+&{
        top: 50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const NavLink = styled(Link)`
    font-family: "Josefin Sans", "Jost", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: ${props => props.theme.colors.font};
    text-decoration: none;
    position: relative;
    padding: 5px 0;
    transition: ${props => props.theme.animations.transition};

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${props => props.theme.colors.accent};
        transition: width 0.3s ease;
    }

    &:hover, &.active {
        color: ${props => props.theme.colors.accent};

        &::after {
            width: 100%;
        }
    }
`;

const MenuItem = styled.li`
  list-style: none;
`;

//Mobile menu

const MobileMenu = styled.nav`
    
`
const MobileMenuPopap = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${props => props.theme.colors.primaryBg};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 1s ease-in-out;
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        transition: .2s ease-in-out;
    }
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);
        & ul {
            gap: 30px;
        }
    `}
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 60px;
    height: 60px;
    top: 15px;
    right: 30px;
    z-index: 99999;

    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${props => props.theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${props => props.theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
        `}
        }
        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${props => props.theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
        `}
        }
    }
`

//DesktopMenu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: clamp(10px, 1.5vw, 25px);
        justify-content: center;
`

export const S = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    MobileMenuPopap,
    BurgerButton,
    DesktopMenu
}