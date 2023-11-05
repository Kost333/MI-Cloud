import React from "react";
import styles from "@/styles/main/WhatCanWeContainer.module.css";
import Image from "next/image";

const WhatCanWeContainer = () => {

    return (
        <div className={styles["container"]}>
            <div className={styles["info"]}>
                <h2>What can we do for you</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Eget ut aliquam rutrum tellus.
                    Potenti cras pretium lorem id varius venenatis egestas risus amet.
                    Enim suspendisse purus egestas et diam.
                    Et viverra ipsum volutpat risus eu. Sit quisque
                </p>
            </div>
            <div className={styles["info-container"]}>
                <div>
                    <div>
                        <Image src="/assets/Support.svg" alt="Support" width={18} height={17}/>
                        <h3>Administration</h3>
                        <Image src="/assets/arrow.svg" alt="arrow" width={24} height={24}/>
                    </div>
                    <div>
                        <Image src="/assets/Support.svg" alt="Support" width={18} height={17}/>
                        <h3>Support</h3>
                        <Image src="/assets/arrow.svg" alt="arrow" width={24} height={24}/>
                    </div>
                    <div>
                        <Image src="/assets/Support.svg" alt="Support" width={18} height={17}/>
                        <h3>IP Announcement</h3>
                        <Image src="/assets/arrow.svg" alt="arrow" width={24} height={24}/>
                    </div>
                </div>
                <Image src="/assets/aboutUs.svg" alt="about us" width={675} height={544}/>
            </div>
        </div>
    );

};

export default WhatCanWeContainer;