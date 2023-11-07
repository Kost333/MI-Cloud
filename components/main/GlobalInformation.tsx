import React from "react";
import styles from "@/styles/main/GlobalInformation.module.css";
import Image from "next/image";
import {globalInformation} from "@/utility/utils/utils";

const GlobalInformation = () => {

    return (
        <div className={styles["global-information-container"]}>
            {
                globalInformation.map((item) => (
                    <div key={item.id} className={styles["global-information"]}>
                        <Image src={item.image} alt="global-information" width={39} height={45}/>
                        <span>{item.title}</span>
                    </div>
                ))
            }
        </div>
    );

};

export default GlobalInformation;