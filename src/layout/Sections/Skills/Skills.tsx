import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "../Skills/Skills_Styles";
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "codeSvg",
        title: "HTML5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "react",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "css",
        title: "CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "ts",
        title: "TypeScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "styledComponents",
        title: "Styled Components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "webDisigne",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua Ut enim",
    }
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap="wrap" justify="space-between">
                    <Fade cascade={true} damping={.2}>
                        {skillData.map((skill, index) => {
                            return <Skill iconId={skill.iconId} key={index}
                                          title={skill.title}
                                          description={skill.description}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


