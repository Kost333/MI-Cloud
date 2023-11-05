import React from "react";
import styles from "@/styles/main/OutProducts.module.css";

const OutProductsContainer = () => {

    return (
        <div className={styles["out-products-container"]}>
            <div className={styles["out_product"]}>
                <img src="/assets/out-product-1.svg" alt="out_product"/>
                    <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["out_product"]}>
                <img src="/assets/out-product-1.svg" alt="out_product"/>
                    <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["out_product"]}>
                <img src="/assets/out-product-1.svg" alt="out_product"/>
                    <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["out_product"]}>
                <img src="/assets/out-product-1.svg" alt="out_product"/>
                    <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["out_product"]}>
                <img src="/assets/out-product-1.svg" alt="out_product"/>
                    <span>99.9% Uptime Guarantee</span>
            </div>
            <div className={styles["out_product"]}>
                <img src="/assets/out-product-1.svg" alt="out_product"/>
                    <span>99.9% Uptime Guarantee</span>
            </div>
        </div>
    );

};

export default OutProductsContainer;