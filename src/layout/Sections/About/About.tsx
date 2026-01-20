import React from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./About_styles";
import {useTranslation} from "react-i18next";
import { DownloadCVButton } from "../../../components/DownloadCVButton/DownloadCVButton";
import { ContactButton } from "../../../components/ContactButton/ContactButton";
import aboutPhoto from "../../../assets/images/photo.webp";
import { SectionTitle } from "../../../components/SectionTitle";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledPrinciplesLink = styled(Link)`
    color: ${props => props.theme.colors.accent};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px dashed ${props => props.theme.colors.accent};
    padding: 0 2px;
    transition: all 0.2s ease;

    &:hover {
        border-bottom: 2px solid ${props => props.theme.colors.accent};
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const About: React.FC = () => {
    const { t, i18n } = useTranslation();

    const linkText = i18n.language === "ru" ? "Принципы" : "Principles";


    return (
        <S.About id="about">
            <Container>
                <SectionTitle>{t("sections:about.title")}</SectionTitle>
                <FlexWrapper align="center" justify="space-around" wrap="wrap">
                    <S.Photo src={aboutPhoto} alt="Mikhail Gorlenko" />

                    <S.TextContainer>
                        <S.AboutText>
                            <strong>{t("sections:about.greeting")}</strong>{" "}
                            {t("sections:about.textPart1")}
                        </S.AboutText>
                        <S.AboutText>{t("sections:about.textPart2")}</S.AboutText>
                        <S.AboutText>
                            {t("sections:about.textPart3")}
                            <StyledPrinciplesLink
                                to="principles"
                                smooth={true}
                                duration={500}
                                offset={15}
                            >
                                {linkText}
                            </StyledPrinciplesLink>
                            {t("sections:about.textPart4")}
                        </S.AboutText>

                        <S.DesktopButtonContainer>
                            <FlexWrapper
                                justify="flex-start"
                                gap="20px"
                                wrap="wrap"
                                align="center"
                            >
                                <DownloadCVButton />
                                <ContactButton />
                            </FlexWrapper>
                        </S.DesktopButtonContainer>
                    </S.TextContainer>

                    <S.MobileButtonContainer className="about-buttons-container">
                        <FlexWrapper
                            direction="column"
                            gap="15px"
                            align="center"
                        >
                            <DownloadCVButton />
                            <ContactButton />
                        </FlexWrapper>
                    </S.MobileButtonContainer>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};