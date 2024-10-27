import styled from "styled-components";
import {theme} from "../styles/theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "\"Josefin Sans\", sans-serif", weight: 600, Fmax: 36, Fmin: 30})};
    text-align: center;
    letter-spacing: 5px;
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
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`