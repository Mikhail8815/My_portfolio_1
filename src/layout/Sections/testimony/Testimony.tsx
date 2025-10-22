import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "../Skills/Skills_Styles";
import { Container } from "../../../components/Container";
import { useTranslation } from "../../../hooks/useTranslation";

export const Testimony: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>{t("sections:testimony.title")}</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quote"} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: ${(props) => props.theme.colors.primaryBg};
  transition: ${(props) => props.theme.animations.transition};

  ${S.IconWrapper} {
    margin: 48px 0 72px;
  }
  position: relative;
`;
