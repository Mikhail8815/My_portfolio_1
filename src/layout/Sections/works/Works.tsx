import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./TabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import todoImg from "./../../../assets/images/todolist.webp";
import ecommerceImg from "./../../../assets/images/e-commerce.webp";
import socialImg from "./../../../assets/images/social-network.webp";
import { Container } from "../../../components/Container";
import { S } from "../works/Works_styles";
import { TabStatusType } from "./TabMenu/TabMenu";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "../../../hooks/useTranslation";


const tabsItems: Array<{ status: TabStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "React/SPA",
    status: "react",
  },
  {
    title: "Next JS",
    status: "nextjs",
  },
];

const worksData = [
  {
    titleKey: "sections:works.projects.todoList.title",
    descriptionKey: "sections:works.projects.todoList.description",
    src: todoImg,
    type: "react",
    id: 1,
    demoLink: "https://mikhail8815.github.io/Todolist",
    codeLink: "https://github.com/Mikhail8815/Todolist"
  },
  {
    titleKey: "sections:works.projects.ecommerce.title",
    descriptionKey: "sections:works.projects.ecommerce.description",
    src: ecommerceImg,
    type: "react",
    id: 2,
    demoLink: "https://www.mgorlenko-shop.online/",
    codeLink: "https://github.com/Mikhail8815/Shop"
  },
  {
    titleKey: "sections:works.projects.social-network.title",
    descriptionKey: "sections:works.projects.social-network.description",
    src: socialImg,
    type: "nextjs",
    id: 3,
    demoLink: "https://github.com/Mikhail8815/vopp.me",
    codeLink: "https://github.com/Mikhail8815/vopp.me"
  }
];

export const Works: React.FC = () => {
  const { t } = useTranslation();

  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "nextjs") {
    filteredWorks = worksData.filter((work) => work.type === "nextjs");
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={"works"}>
      <Container>
        <SectionTitle>{t("sections:works.title")}</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          <AnimatePresence>
            {filteredWorks.map((work) => {
              return (
                <motion.div
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={work.id}
                >
                  <Work
                      titleKey={work.titleKey}
                      descriptionKey={work.descriptionKey}
                      src={work.src}
                      demoLink={work.demoLink}
                      codeLink={work.codeLink}
                      key={work.id}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
