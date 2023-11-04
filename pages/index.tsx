import React from "react";
import styles from "../styles/Home.module.css"
import Header from "@/components/header/header";
import StatisticsContainer from "@/components/main/StatisticsContainer";
import OutProductsContainer from "@/components/main/OutProductsContainer";
import WhatWeCanContainer from "@/components/main/WhatWeCanContainer";
import ServicesWeProvideContainer from "@/components/main/ServicesWeProvideContainer";
import TheEasiestWayContainer from "@/components/main/TheEasiestWayContainer";
import QuestionsContainer from "@/components/main/QuestionsContainer";
import AreYouReadyContainer from "@/components/main/AreYouReadyContainer";
import Footer from "@/components/footer/footer";

export default function Home() {

    return (
        <>
            <div className={styles['first-content-padding']}>
                <Header/>
                <nav className={styles.nav}></nav>
            </div>
            <StatisticsContainer/>
            <OutProductsContainer/>
            <WhatWeCanContainer/>
            <ServicesWeProvideContainer/>
            <TheEasiestWayContainer/>
            <QuestionsContainer/>
            <AreYouReadyContainer/>
            <Footer/>
        </>
    );
};
