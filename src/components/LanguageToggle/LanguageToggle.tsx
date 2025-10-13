import React from "react";
import styled from "styled-components";
import { useTranslation } from "../../hooks/useTranslation";

const ToggleButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.secondaryBg};
  color: ${(props) => props.theme.colors.font};
  cursor: pointer;
  transition: ${(props) => props.theme.animations.transition};

  &:hover {
    background: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.primaryBg};
  }
`;

export const LanguageToggle: React.FC = () => {
  const { changeLanguage, currentLanguage } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(currentLanguage === "ru" ? "en" : "ru");
  };

  return (
    <ToggleButton onClick={toggleLanguage}>
      {currentLanguage === "ru" ? "EN" : "RU"}
    </ToggleButton>
  );
};
