import React from "react";
import styles from "@/styles/footer/Footer.module.css";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={styles["container"]}>
            <div className={styles["info-container"]}>
                <div>
                    <Image src="/assets/footer/footerLogo.svg" alt="Logo" width={50} height={30}/>
                </div>
                <div>
                    <h4>The Company</h4>
                    <p>About us</p>
                    <p>Roadmap</p>
                    <p>Contact us</p>
                    <p>News</p>
                    <p>Changelog</p>
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                </div>
                <div>
                    <h4>Services</h4>
                    <p>Virtual Servers</p>
                    <p>Dedicated Servers</p>
                    <p>Remote Desktop</p>
                    <p>Cloud Databases</p>
                    <p>Cloud Storage</p>
                    <p>Kubernetes clusters</p>
                    <p>Iaas, Cloud Private</p>
                </div>
                <div>
                    <h4>Products</h4>
                    <p>Load balancer</p>
                    <p>DNS</p>
                    <p>CDN</p>
                    <p>Neural Networks</p>
                    <p>Administration</p>
                    <p>Support</p>
                    <p>IP announcement</p>
                </div>
                <div className={styles["subscribe"]}>
                    <h4>Subscribe for Newsletters</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Commodo molestie gravida at.</p>
                    <div className={styles['email-btn']}>
                        <input type="email" placeholder="Email"/>
                        <button className="blue-btn">Get Started</button>
                    </div>
                </div>
            </div>
            <div className={styles["copyright"]}>
                <p>© ML Cloud LLC, 2023</p>
                <p>All rightscreserved</p>
            </div>
        </footer>
    );

};

export default Footer;