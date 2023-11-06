import React from "react";
import styles from "@/styles/main/GlobalInformation.module.css";
import Image from "next/image";

const GlobalInformation = () => {

    return (
        <div className={styles["global-information-container"]}>
            <div className={styles["global-information"]}>
                <Image src="/assets/global-information-1.svg" alt="global-information" width={39} height={45}/>
                <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["global-information"]}>
                <Image src="/assets/global-information-1.svg" alt="global-information" width={39} height={45}/>
                <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["global-information"]}>
                <Image src="/assets/global-information-1.svg" alt="global-information" width={39} height={45}/>
                <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["global-information"]}>
                <Image src="/assets/global-information-1.svg" alt="global-information" width={39} height={45}/>
                <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["global-information"]}>
                <Image src="/assets/global-information-1.svg" alt="global-information" width={39} height={45}/>
                <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["global-information"]}>
                <Image src="/assets/global-information-1.svg" alt="global-information" width={39} height={45}/>
                <span>99.9% Uptime Guarantee</span>
            </div>
        </div>
    );

};

export default GlobalInformation;