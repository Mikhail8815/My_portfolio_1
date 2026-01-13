import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { ToggleButton } from "../ToggleButton.styled";


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
