import React from "react";
import styles from "@/styles/main/QuestionsContainer.module.css";
import Image from "next/image";

const QuestionsContainer = () => {

    return (
        <div className={styles["container"]}>
            <h5>Your Questions Answered</h5>
            <h2>Frequently asked</h2>
            <h3>questions</h3>
            <div className={styles["info-container"]}>
                <div>
                    <p>What do you need to get started?</p>
                    <Image src="/assets/plus.svg" alt="plus" width={17} height={16}/>
                </div>
                <div>
                    <p>What do you need to get started?</p>
                    <Image src="/assets/plus.svg" alt="plus" width={17} height={16}/>
                </div>
                <div>
                    <p>What do you need to get started?</p>
                    <Image src="/assets/plus.svg" alt="plus" width={17} height={16}/>
                </div>
                <div>
                    <p>What do you need to get started?</p>
                    <Image src="/assets/plus.svg" alt="plus" width={17} height={16}/>
                </div>
            </div>
        </div>
    );

};

export default QuestionsContainer;