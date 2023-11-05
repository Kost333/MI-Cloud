import React from "react";
import styles from "@/styles/main/TheEasiestWayContainer.module.css"
import Image from "next/image";

const TheEasiestWayContainer = () => {

    return (
        <div className={styles["container"]}>
            <h2>The easiest way to use servers</h2>
            <div className={styles["info-container"]}>
                <div className={styles["info"]}>
                    <Image src="/assets/signUpFile.svg" alt="signUpFile" width={48} height={58}/>
                    <h4>Sign up</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus.
                        Ut donec etiam aliquam mattis lacus rhoncus viverra.</p>
                </div>
                <div className={styles["info"]}>
                    <Image src="/assets/signUpFile.svg" alt="signUpFile" width={48} height={58}/>
                    <h4>Create your server</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus.
                        Ut donec etiam aliquam mattis lacus rhoncus viverra.</p>
                </div>
                <div className={styles["info"]}>
                    <Image src="/assets/signUpFile.svg" alt="signUpFile" width={48} height={58}/>
                    <h4>Checkout with 1 click</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus.
                        Ut donec etiam aliquam mattis lacus rhoncus viverra.</p>
                </div>
            </div>
        </div>
    );

};

export default TheEasiestWayContainer;