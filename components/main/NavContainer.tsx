import React from "react";
import styles from "@/styles/main/NavContainer.module.css";
import dynamic from 'next/dynamic'

const Model = dynamic(
    () => import('./globe/Model'),
    { ssr: false }
)

const NavContainer = () => {

    return (
        <nav className={styles["nav-container"]}>
            <div className={styles["nav-info-container"]}>
                <div className={styles["nav-info"]}>
                    <h1>Reliable IT infrastructure for</h1>
                    <h2>Projects of any size</h2>
                    <p>Lightning-fast Cloud Servers, Trusted Infrastructure, and Dedicated Customer Assistance</p>
                </div>
                <button className="orange-btn">Get Started</button>
            </div>
            <Model />
        </nav>
    );

};

export default NavContainer;