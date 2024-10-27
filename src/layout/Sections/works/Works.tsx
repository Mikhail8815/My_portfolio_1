import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./TabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/Proj - 1.jpg"
import timerImg from "./../../../assets/images/Proj - 2.jpg"
import {Container} from "../../../components/Container";
import {S} from "../works/Works_styles"
import {TabStatusType} from "./TabMenu/TabMenu";

// const tabsItems = ["All", "Landing Page", "React", "SPA"]

const tabsItems: Array<{ status: TabStatusType, title: string, }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    }
]

const worksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa"
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: timerImg,
        type: "react"
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>MyWorks</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((work, index) => {
                        return  <Work title={work.title} text={work.text} src={work.src} key={index} />
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


