import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "../Skills/Skills_Styles";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const skillData = [
  {
    iconId: "react",
    title: "React",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "ts",
    title: "TypeScript",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "js",
    title: "JavaScript",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "redux",
    title: "Redux",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },


  {
    iconId: "codeSvg",
    title: "HTML5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "css",
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "sass",
    title: "Sass",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styledComponents",
    title: "Styled Comp.",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

  {
    iconId: "webDisigne",
    title: "Figma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "material-ui",
    title: "Material UI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "radix",
    title: "Radix UI",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "nextjs",
    title: "Next JS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "storybook",
    title: "Storybook",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "git",
    title: "Git",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "github",
    title: "GitHub",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "swagger",
    title: "Swagger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },

];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>{t("sections:skills.title")}</SectionTitle>
        <FlexWrapper wrap="wrap" justify="center" gap="40px">
          <Fade cascade={true} damping={0.2}>
            {skillData.map((skill, index) => {
              return (
                <Skill iconId={skill.iconId} key={index} title={skill.title} />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};
