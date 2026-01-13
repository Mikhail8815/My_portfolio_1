import styled from "styled-components";

export const ToggleButton = styled.button`
    padding: 6px 12px;
    border: none; 
    border-radius: 20px;
    background: transparent;
    color: ${(props) => props.theme.colors.font};
    cursor: pointer;
    transition: ${(props) => props.theme.animations.transition};
    font-size: 14px;
    font-weight: 500;
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${(props) => props.theme.colors.secondaryBg};
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: scale(0.98);
    }
`;