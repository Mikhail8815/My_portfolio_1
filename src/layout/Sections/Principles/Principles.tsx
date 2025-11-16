import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { useTranslation } from "../../../hooks/useTranslation";

export const Principles: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledPrinciples id={"principles"}>
      <Container>
        <SectionTitle  style={{ marginBottom: '30px' }}>{t("sections:principles.title")}</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledPrinciples>
  );
};

const StyledPrinciples = styled.section`
  background-color: ${(props) => props.theme.colors.primaryBg};
  transition: ${(props) => props.theme.animations.transition};
  position: relative;
`;
