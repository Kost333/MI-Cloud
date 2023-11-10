import React from "react";
import Image from "next/image";

import styles from "@/styles/footer/Footer.module.css";
import { footerList } from "./footerList";

const Footer = () => {
  return (
    <footer className={`${styles["footer"]} container-lg`}>
      <div className={styles["info-container"]}>
        <div className={styles["footer-logo"]}>
          <Image
            src="/assets/footer/footerLogo.svg"
            alt="Logo"
            width={50}
            height={30}
          />
        </div>

        <div className={styles["footer-section-wrapper"]}>
          {footerList.map((item, index) => (
            <div key={index} className={styles["footer-section"]}>
              <h4>{item.title}</h4>

              <ul>
                {item.list.map((childItem, index) => (
                  <li key={index}>
                    <p>{childItem}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles["subscribe"]}>
          <h4 className={styles["subscribe-title"]}>
            Subscribe for Newsletters
          </h4>

          <p className={styles["subscribe-description"]}>
            Receive exclusive insights, updates, and offers by subscribing to
            the ML Cloud newsletter today!
          </p>

          <div className={styles["email-box"]}>
            <input type="email" placeholder="Email" />
            <button className="blue-btn">Get Started</button>
          </div>
        </div>
      </div>

      <div className={styles["copyright"]}>
        <p>© ML Cloud LLC, 2023</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
