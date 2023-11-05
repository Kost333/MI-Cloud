import React from "react";
import styles from "@/styles/main/OurProducts.module.css";
import Image from "next/image";

const OurProducts = () => {

    return (
        <div className={styles["our-products-container"]}>
            <div className={styles["our-products-title"]}>
                <h3>Change the way you do business with</h3>
                <h4>Our Products</h4>
            </div>
            <div className={styles["our-products-content"]}>
                <div className={styles["our-products-card"]}>
                    <Image className={styles["our-products-card-image"]} src="/assets/header/product.svg" width={168} height={260}
                         alt="our-products_card_image"/>
                    <div className={styles["our-products-card-info-container"]}>
                        <span className={styles["our-products-card-info-title"]}>Virtual servers</span>
                        <span className={styles["our-products-card-info-description"]}>Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.</span>
                        <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                            Started
                        </button>
                    </div>
                </div>
                <div className={styles["our-products-card"]}>
                    <Image className={styles["our-products-card-image"]} src="/assets/header/product.svg" width={168} height={260}
                         alt="our-products_card_image"/>
                    <div className={styles["our-products-card-info-container"]}>
                        <span className={styles["our-products-card-info-title"]}>Virtual servers</span>
                        <span className={styles["our-products-card-info-description"]}>Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.</span>
                        <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                            Started
                        </button>
                    </div>
                </div>
                <div className={styles["our-products-card"]}>
                    <Image className={styles["our-products-card-image"]} src="/assets/header/product.svg" width={168} height={260}
                         alt="our-products_card_image"/>
                    <div className={styles["our-products-card-info-container"]}>
                        <span className={styles["our-products-card-info-title"]}>Virtual servers</span>
                        <span className={styles["our-products-card-info-description"]}>Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.</span>
                        <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                            Started
                        </button>
                    </div>
                </div>
                <div className={styles["our-products-card"]}>
                    <Image className={styles["our-products-card-image"]} src="/assets/header/product.svg" width={168} height={260}
                         alt="our-products_card_image"/>
                    <div className={styles["our-products-card-info-container"]}>
                        <span className={styles["our-products-card-info-title"]}>Virtual servers</span>
                        <span className={styles["our-products-card-info-description"]}>Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.</span>
                        <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                            Started
                        </button>
                    </div>
                </div>
                <div className={styles["our-products-card"]}>
                    <Image className={styles["our-products-card-image"]} src="/assets/header/product.svg" width={168} height={260}
                         alt="our-products_card_image"/>
                    <div className={styles["our-products-card-info-container"]}>
                        <span className={styles["our-products-card-info-title"]}>Virtual servers</span>
                        <span className={styles["our-products-card-info-description"]}>Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.</span>
                        <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                            Started
                        </button>
                    </div>
                </div>
                <div className={styles["our-products-card"]}>
                    <Image className={styles["our-products-card-image"]} src="/assets/header/product.svg" width={168} height={260}
                         alt="our-products_card_image"/>
                    <div className={styles["our-products-card-info-container"]}>
                        <span className={styles["our-products-card-info-title"]}>Virtual servers</span>
                        <span className={styles["our-products-card-info-description"]}>Lorem ipsum dolor sit amet consectetur. Ac in nunc in nulla eu bibendum risus viverra.</span>
                        <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                            Started
                        </button>
                    </div>
                </div>
            </div>
            <button className={`${styles["our-products-card-info-button"]} orange-btn`}>
                See all products
            </button>
        </div>
    );

};

export default OurProducts;