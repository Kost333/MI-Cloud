import React from "react";
import styles from "@/styles/Home.module.css"
import Header from "@/components/header/header";
import StatisticsContainer from "@/components/main/StatisticsContainer";
import OutProductsContainer from "@/components/main/OutProductsContainer";
import WhatWeCanContainer from "@/components/main/WhatWeCanContainer";
import ServicesWeProvideContainer from "@/components/main/ServicesWeProvideContainer";
import TheEasiestWayContainer from "@/components/main/TheEasiestWayContainer";
import QuestionsContainer from "@/components/main/QuestionsContainer";
import AreYouReadyContainer from "@/components/main/AreYouReadyContainer";
import Footer from "@/components/footer/footer";
import NavContainer from "@/components/main/NavContainer";

export default function Home() {

    return (
        <>
            <div className={styles['first-content']}>
                <Header/>
                <NavContainer/>
            </div>
            <div className={styles['second-content']}>
                <OutProductsContainer/>
                <WhatWeCanContainer/>
            </div>
            <StatisticsContainer/>
            <ServicesWeProvideContainer/>
            <TheEasiestWayContainer/>
            <QuestionsContainer/>
            <AreYouReadyContainer/>
            <Footer/>
        </>
    );
};
