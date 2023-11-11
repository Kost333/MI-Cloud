import React from "react";
import styles from "@/styles/main/OurProducts.module.css";
import Image from "next/image";
import {ourProducts} from "@/utility/utils";
import {OurProducts} from "@/types/types";

const OurProducts = () => {

    return (
        <div className={styles["our-products-container"]}>
            <div className={styles["our-products-title"]}>
                <h3>Change the way you do business with</h3>
                <h4>Our Products</h4>
            </div>
            <div className={styles["our-products-content"]}>
                {
                    ourProducts.map((product: OurProducts) => (
                        <div key={product.id} className={styles["our-products-card"]}>
                            <Image className={styles["our-products-card-image"]} src={product.image} width={168}
                                   height={260}
                                   alt="our-products_card_image"/>
                            <div className={styles["our-products-card-info-container"]}>
                                <span className={styles["our-products-card-info-title"]}>{product.title}</span>
                                <span
                                    className={styles["our-products-card-info-description"]}>{product.description}</span>
                                <button className={`${styles["our-products-card-info-button"]} orange-btn`}>Get
                                    Started
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={`${styles["our-products-card-info-button"]} orange-btn`}>
                See all products
            </button>
        </div>
    );

};

export default OurProducts;