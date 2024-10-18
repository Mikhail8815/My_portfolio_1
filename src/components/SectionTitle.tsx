import styled from "styled-components";
import {theme} from "../styles/theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    color: #fff;
    position: relative;
    margin-bottom: 90px;
    
    &::before {
        content: "";
        width: 55px;
        height: 1px;
        display: inline-block;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`