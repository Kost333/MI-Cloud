import React from "react";
import styles from "@/styles/main/FeaturedClientsStories.module.css"
import Image from "next/image";

const FeaturedClientsStories = () => {

    return (
        <div className={styles["container"]}>
            <h2>Featured Clients Stories</h2>
            <div className={styles["info-container"]}>
                <div className={styles["info"]}>
                    <div className={styles["stars"]}>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus.
                        Ut donec etiam aliquam mattis lacus rhoncus viverra.</p>
                    <div className={styles['profileInfo']}>
                        <Image src="/assets/profilePhoto.svg" alt="profile" width={50} height={50}/>
                        <div className={styles['ProfileDescription']}>
                            <h4>Name Surename</h4>
                            <h6>Position</h6>
                        </div>
                    </div>
                </div>
                <div className={styles["info"]}>
                    <div className={styles["stars"]}>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus.
                        Ut donec etiam aliquam mattis lacus rhoncus viverra.</p>
                    <div className={styles['profileInfo']}>
                        <Image src="/assets/profilePhoto.svg" alt="profile" width={50} height={50}/>
                        <div className={styles['ProfileDescription']}>
                            <h4>Name Surename</h4>
                            <h6>Position</h6>
                        </div>
                    </div>
                </div>
                <div className={styles["info"]}>
                    <div className={styles["stars"]}>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                        <Image src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Phasellus pharetra in id at tristique velit eget lacus.
                        Ut donec etiam aliquam mattis lacus rhoncus viverra.</p>
                    <div className={styles['profileInfo']}>
                        <Image src="/assets/profilePhoto.svg" alt="profile" width={50} height={50}/>
                        <div className={styles['ProfileDescription']}>
                            <h4>Name Surename</h4>
                            <h6>Position</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default FeaturedClientsStories;