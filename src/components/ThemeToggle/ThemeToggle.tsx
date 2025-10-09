import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/theme-context";

const ToggleButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${(props) => props.theme.colors.accent};
  border-radius: 25px;
  background: transparent;
  color: ${(props) => props.theme.colors.font};
  cursor: pointer;
  transition: ${(props) => props.theme.animations.transition};
  font-size: 14px;

  &:hover {
    background: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.primaryBg};
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  console.log("Current theme is dark:", isDark);
  return (
    <ToggleWrapper>
      <ToggleButton onClick={toggleTheme}>
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </ToggleButton>
    </ToggleWrapper>
  );
};
