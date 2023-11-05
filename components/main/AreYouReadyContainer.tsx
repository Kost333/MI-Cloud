import React from "react";
import styles from "@/styles/main/AreYouReadyContainer.module.css";

const AreYouReadyContainer = () => {

    return (
        <div className={styles["container"]}>
            <h2>Are you ready?</h2>
            <div>
                <button>Request a quote</button>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default AreYouReadyContainer;