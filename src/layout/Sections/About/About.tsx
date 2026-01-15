import React from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./About_styles";
import { useTranslation } from "react-i18next";
import { DownloadCVButton } from "../../../components/DownloadCVButton/DownloadCVButton";
import { ContactButton } from "../../../components/ContactButton/ContactButton";
import aboutPhoto from "../../../assets/images/photo.jpg";
import { SectionTitle } from "../../../components/SectionTitle";

export const About: React.FC = () => {
    const { t } = useTranslation();

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
                        <S.AboutText>{t("sections:about.textPart3")}</S.AboutText>

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

                    <S.MobileButtonContainer>
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