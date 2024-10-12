import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Skill iconId={"codeSvg"}
                       title={"HTML5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"react"}
                       title={"React"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"css"}
                       title={"CSS"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"ts"}
                       title={"TypeScript"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"styledComponents"}
                       title={"Styled Components"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"webDisigne"}
                       title={"WEB Design"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
                           "tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
   background-color: rgba(120,23,111,0.83);
    min-height: 100vh;
`
