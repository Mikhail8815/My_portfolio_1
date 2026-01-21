import React, {useEffect, useState} from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "../Skills/Skills_Styles";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ShowMoreButton = styled.button`
  padding: 10px 20px;
  background: transparent;
  color: ${props => props.theme.colors.accent};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  margin-top: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.primaryBg};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const skillData = [
  { iconId: "react", title: "React", isEssential: true },
  { iconId: "ts", title: "TypeScript", isEssential: true },
  { iconId: "js", title: "JavaScript", isEssential: true },
  { iconId: "redux", title: "Redux", isEssential: true },
  { iconId: "styledComponents", title: "Styled Comp.", isEssential: true },
  { iconId: "css", title: "CSS", isEssential: true },

  { iconId: "sass", title: "Sass", isEssential: false },
  { iconId: "nextjs", title: "Next JS", isEssential: false },
  { iconId: "storybook", title: "Storybook", isEssential: false },
  { iconId: "webDisigne", title: "Figma", isEssential: false },
  { iconId: "material-ui", title: "Material UI", isEssential: false },
  { iconId: "radix", title: "Radix UI", isEssential: false },
  { iconId: "git", title: "Git", isEssential: false },
  { iconId: "github", title: "GitHub", isEssential: false },
  { iconId: "codeSvg", title: "HTML5", isEssential: false },
  { iconId: "swagger", title: "Swagger", isEssential: false },
];

export const Skills = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleSkills = isMobile && !showAll
      ? skillData.filter(skill => skill.isEssential)
      : skillData;

  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>{t("sections:skills.title")}</SectionTitle>
        <FlexWrapper wrap="wrap" justify="center" gap="40px">
          <Fade cascade={true} damping={0.2}>
            {visibleSkills.map((skill, index) => {
              return (
                <Skill iconId={skill.iconId} key={index} title={skill.title} />
              );
            })}
          </Fade>
        </FlexWrapper>
        {isMobile && !showAll && (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <ShowMoreButton onClick={() => setShowAll(true)}>
                {t("sections:skills.showMore")}
              </ShowMoreButton>
            </div>
        )}

        {isMobile && showAll && (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <ShowMoreButton onClick={() => setShowAll(false)}>
                {t("sections:skills.showLess")}
              </ShowMoreButton>
            </div>
        )}
      </Container>
    </S.Skills>
  );
};
