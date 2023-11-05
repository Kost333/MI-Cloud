import React, {Suspense} from "react";
import styles from "@/styles/Home.module.css"
import Header from "@/components/header/header";
import StatisticsContainer from "@/components/main/StatisticsContainer";
import GlobalInformation from "@/components/main/GlobalInformation";
import OurProducts from "@/components/main/OurProducts";
import WhatCanWeContainer from "@/components/main/WhatCanWeContainer";
import TheEasiestWayContainer from "@/components/main/TheEasiestWayContainer";
import QuestionsContainer from "@/components/main/QuestionsContainer";
import AreYouReadyContainer from "@/components/main/AreYouReadyContainer";
import Footer from "@/components/footer/footer";
import NavContainer from "@/components/main/NavContainer";
import AboutUs from "@/components/main/AboutUs";
import FeaturedClientsStories from "@/components/main/FeaturedClientsStories";

export default function Home() {

    return (
        <Suspense fallback="loading...">
            <div className={styles['first-content']}>
                <Header/>
                <NavContainer/>
            </div>
            <div className={styles['second-content']}>
                <GlobalInformation/>
                <OurProducts/>
                <AboutUs/>
                <WhatCanWeContainer/>
                <TheEasiestWayContainer/>
                <FeaturedClientsStories/>
                <QuestionsContainer/>

            </div>
            <StatisticsContainer/>
            <AreYouReadyContainer/>
            <Footer/>
        </Suspense>
    );
};
