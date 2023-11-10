import React, {useState} from "react";
import styles from "@/styles/main/ServicesWeProvideContainer.module.css";
import Image from "next/image";
import arrowRight from "../../public/assets/arrowRight.svg";
import arrowDown from "../../public/assets/arrowDown.svg";
import {services} from "@/utility/utils/utils";
import {useMediaQuery} from "@/hooks";

interface Service {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    serviceLogo: string;
}

const ServicesWeProvideContainer = () => {

    const [openedItem, setOpenedItem] = useState(services[0]);

    const isTabletView = useMediaQuery("(min-width: 1024px)");

    const openItem = (service: Service) => {
        setOpenedItem(service)
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["info"]}>
                <h2>Services we provide</h2>
                <p>
                    Experience the power of streamlined efficiency with our comprehensive suite of features.
                    We understand the importance of maximizing productivity and minimizing operational complexities.
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
                    {!isTabletView && (
                        <div className={styles["service-image"]}>
                            {
                                services.map(service => {
                                    return (
                                        <div key={service.id}>
                                            {openedItem.id === service.id &&
                                                <Image src={service.backgroundImage}
                                                       alt="services"
                                                       width={674}
                                                       height={544}
                                                       layout="responsive"
                                                       style={{minWidth: '300px', maxWidth: '674px'}}/>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}
                </div>
                {isTabletView && (
                    <div className={styles["service-image"]}>
                        {
                            services.map(service => {
                                return (
                                    <div key={service.id}>
                                        {openedItem.id === service.id &&
                                            <Image src={service.backgroundImage}
                                                   alt="services"
                                                   width={674}
                                                   height={544}
                                                   layout="responsive"
                                                   style={{minWidth: '200px', maxWidth: '674px'}}/>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServicesWeProvideContainer;