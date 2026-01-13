import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primaryBg};
  border-radius: 30px; 
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: ${(props) => props.theme.animations.transition};
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.accent};
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

export const DownloadCVButton: React.FC = () => {
    const { i18n } = useTranslation();

    const fileName = "/cv_mikhail_gorlenko_ru.pdf"

    const buttonText = i18n.language === "ru" ? "Скачать резюме" : "Download CV";

    return (
        <StyledButton
            href={fileName}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttonText}
        >
            <Icon>📄</Icon>
            {buttonText}
        </StyledButton>
    );
};