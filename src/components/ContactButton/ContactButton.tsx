import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const StyledButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 30px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.accent};
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: ${(props) => props.theme.animations.transition};
    border: 2px solid ${(props) => props.theme.colors.accent};
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    min-width: 250px; 
    width: 100%; 
    max-width: 250px; 
    box-sizing: border-box;

    &:hover {
        background-color: ${(props) => props.theme.colors.accent};
        color: ${(props) => props.theme.colors.primaryBg};
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
    
`;

const Icon = styled.span`
    font-size: 18px;
`;

export const ContactButton: React.FC = () => {
    const { i18n } = useTranslation();

    const buttonText = i18n.language === "ru" ? "Напишите мне" : "Contact Me";

    return (
        <StyledButton
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            offset={15}
            aria-label={buttonText}
        >
            <Icon>✉️</Icon>
            {buttonText}
        </StyledButton>
    );
};