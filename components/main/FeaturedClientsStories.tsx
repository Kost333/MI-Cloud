import React from "react";
import styles from "@/styles/main/FeaturedClientsStories.module.css"
import Image from "next/image";
import {clients} from "@/utility/utils/utils";

const FeaturedClientsStories = () => {

    return (
        <div className={styles["container"]}>
            <h2>Featured Clients Stories</h2>
            <div className={styles["info-container"]}>
                {
                    clients.map((client) => (
                        <div key={client.id} className={styles["info"]}>
                            <div className={styles["stars"]}>
                                {[...Array(5)].map((_, starIndex) => (
                                    <Image key={starIndex} src="/assets/Star 1.svg" alt="star" width={28} height={28}/>
                                ))}
                            </div>
                            <p>{client.description}</p>
                            <div className={styles['profileInfo']}>
                                <Image src={client.profileImage} alt="profile" width={50} height={50}/>
                                <div className={styles['ProfileDescription']}>
                                    <h4>{client.name}</h4>
                                    <h6>{client.position}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );

};

export default FeaturedClientsStories;