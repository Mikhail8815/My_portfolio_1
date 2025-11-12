import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "../contacts/Contacts_Styles";
import emailjs from "@emailjs/browser";
import { useTranslation } from "../../../hooks/useTranslation";

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_zewn5i5", "template_af8mx2p", form.current, {
        publicKey: "jA9b15dcRVzqmzJc1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <S.Contacts id={"contact"}>
      <Container>
        <SectionTitle>{t("sections:contact.title")}</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field
            required
            placeholder={t("sections:contact.form.name")}
            name={"user_name"}
          />
          <S.Field
            required
            placeholder={t("sections:contact.form.email")}
            name={"email"}
          />
          <S.Field
            required
            placeholder={t("sections:contact.form.subject")}
            name={"subject"}
          />
          <S.Field
            required
            placeholder={t("sections:contact.form.message")}
            as={"textarea"}
            name={"message"}
          />
          <Button type={"submit"}>{t("sections:contact.form.send")} </Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
