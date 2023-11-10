import React, {Suspense} from "react";
import styles from "@/styles/Home.module.css"
import Header from "@/components/header/header";
import GlobalInformation from "@/components/main/GlobalInformation";
import OurProducts from "@/components/main/OurProducts";
import ServicesWeProvideContainer from "@/components/main/ServicesWeProvideContainer";
import TheEasiestWayContainer from "@/components/main/TheEasiestWayContainer";
import QuestionsContainer from "@/components/main/QuestionsContainer";
import AreYouReadyContainer from "@/components/main/AreYouReadyContainer";
import Footer from "@/components/footer/footer";
import NavContainer from "@/components/main/NavContainer";
import WhatCanWeContainer from "@/components/main/WhatCanWeContainer";
import FeaturedClientsStories from "@/components/main/FeaturedClientsStories";

export default function Home() {

    return (
        <Suspense fallback="loading...">
            <Header/>

            <div className={styles["first-content"]}>
                <NavContainer/>
            </div>
            <div className={styles['second-content']}>
                <GlobalInformation/>
                <OurProducts/>
                <WhatCanWeContainer/>
                <ServicesWeProvideContainer/>
                <TheEasiestWayContainer/>
                <FeaturedClientsStories/>
                <QuestionsContainer/>
                <AreYouReadyContainer/>
            </div>

            <div className="blue-bg">
                <Footer/>
            </div>
        </Suspense>
    );
}
