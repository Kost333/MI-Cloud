import React from "react";
import styles from "@/styles/main/AboutUs.module.css";
import Image from "next/image";

const AboutUs = () => {

    return (
        <nav className={styles["nav-container"]}>
            <Image src="/assets/aboutUs.svg" alt="about us" width={570} height={411}/>
            <div className={styles["nav-info-container"]}>
                <div className={styles["nav-info"]}>
                    <span>About Us</span>
                    <h2>What can we do for you</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget ut aliquam rutrum tellus.
                        Potenti cras pretium lorem id varius venenatis egestas risus amet.
                        Enim suspendisse purus egestas et diam.
                        Et viverra ipsum volutpat risus eu. Sit quisque
                    </p>
                </div>
                <button className="orange-btn">Learn more</button>
            </div>
        </nav>
    );

};

export default AboutUs;