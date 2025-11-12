import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { useTranslation } from "../../../hooks/useTranslation";
import { scroller } from "react-scroll";

export const Slogan: React.FC = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction="column" align={"center"}>
          <SectionTitle>{t("sections:slogan.title")}</SectionTitle>
          <Button onClick={scrollToContact}>
            {t("sections:slogan.button")}
          </Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: ${(props) => props.theme.colors.accent};
`;
