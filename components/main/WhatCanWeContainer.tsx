import React, {useState} from "react";
import styles from "@/styles/main/WhatCanWeContainer.module.css";
import Image from "next/image";
import arrowRight from "../../public/assets/arrowRight.svg";
import arrowDown from "../../public/assets/arrowDown.svg";
import {services} from "@/utility/utils/utils";

interface Service {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    serviceLogo: string;
}

const WhatCanWeContainer = () => {

    const [openedItem, setOpenedItem] = useState(services[0]);

    const openItem = (service: Service) => {
        setOpenedItem(service)
    }

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
                <div className={styles["services"]}>
                    {
                        services.map(service => {
                            return (
                                <div className={styles["service"]} key={service.id} onClick={() => openItem(service)}>
                                    <div className={styles['service-title-container']}>
                                        <Image src={service.serviceLogo} alt="serviceLogo" width={18} height={17}/>
                                        <h3>{service.title}</h3>
                                        <Image src={openedItem.id === service.id ? arrowDown : arrowRight}
                                               alt="arrow right"
                                               width={24} height={24}/>
                                    </div>
                                    {openedItem.id === service.id &&
                                        <div className={styles['dropdown-content']}>
                                            <div><p>{service.description}</p></div>
                                            <div className={styles['dropdown-content-seeMore']}>See more</div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                {
                    services.map(service => {
                        return (
                            <div key={service.id}>
                                {openedItem.id === service.id &&
                                    <Image src={service.backgroundImage} alt="services" width={674} height={544}/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default WhatCanWeContainer;