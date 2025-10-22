import React from "react";
import photo from "../../../assets/images/photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "../Main/Main_styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

export const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>{t("sections:main.greeting")}</S.SmallText>
            <S.Name>
              {t("sections:main.name")}{" "}
              <span>{t("sections:main.fullName")}</span>
            </S.Name>
            {/*<S.MainTitle>A Web Developer</S.MainTitle>*/}
            <S.MainTitle>
              <p>{t("sections:main.title")}</p>
              <Typewriter
                options={{
                  strings: [
                    t("sections:main.typewriter.webDeveloper"),
                    t("sections:main.typewriter.frontendDeveloper"),
                    t("sections:main.typewriter.webDesigner"),
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="Photo" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
