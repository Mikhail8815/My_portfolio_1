import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/theme-context";
import { ToggleButton } from "../ToggleButton.styled";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <ToggleWrapper>
        <ToggleButton onClick={toggleTheme} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
            {isDark ? "☀️" : "🌙"}
        </ToggleButton>
    </ToggleWrapper>
  );
};
