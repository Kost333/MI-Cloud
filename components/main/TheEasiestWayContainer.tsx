import React from "react";
import styles from "@/styles/main/TheEasiestWayContainer.module.css"
import Image from "next/image";
import {servers} from "@/utility/utils/utils";

const TheEasiestWayContainer = () => {

    return (
        <div className={styles["container"]}>
            <h2>The easiest way to use servers</h2>
            <div className={styles["info-container"]}>
                {
                    servers.map((server) => (
                        <div key={server.id} className={styles["info"]}>
                            <Image src={server.image} alt="signUpFile" width={48} height={58}/>
                            <div className={styles["description"]}>
                                <h4>{server.title}</h4>
                                <p>{server.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

};

export default TheEasiestWayContainer;