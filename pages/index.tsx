import React from "react";
import Header from "@/components/header/header";
import styles from "../styles/Home.module.css"

export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles['first-content-padding']}>
                <Header/>
                <nav className={styles.nav}></nav>
            </div>
            {/*<Statistics-container/>*/}
            {/*<Out-products-container/>*/}
            {/*<What-we-can-container/>*/}
            {/*<Services-we-provide-container/>*/}
            {/*<The-easiest-way-container/>*/}
            {/*<Questions-container/>*/}
            {/*<Are-you-ready-container/>*/}
            {/*<Footer/>*/}
        </div>
    );
};
