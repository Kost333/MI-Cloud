import React, {useEffect, useState} from "react";
import styles from "@/styles/header/Header.module.css";
import dropdownStyles from "@/styles/header/HeaderDropdownItem.module.css";
import Image from "next/image";
import {useMediaQuery} from "@/hooks";
import {headerListItems} from "@/utility/utils";
import HeaderListItem from "./HeaderListItem";
import {childrenHeaderListItems, HeaderListItems, MenuIcon} from "@/types/types";

const menuIcon: MenuIcon = {
    open: {
        src: "/assets/header/burger.svg",
        alt: "burger",
    },
    close: {
        src: "/assets/header/close.svg",
        alt: "close",
    },
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openedMenuItemId, setOpenedMenuItemId] = useState<number>(-1);

    const isTabletView: boolean = useMediaQuery("(min-width: 1024px)");

    useEffect(() => {
        if (isMenuOpen) {
            window.document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
            return;
        }
        window.document.body.style.overflow = "auto";
    }, [isMenuOpen]);

    const handleToggleMenu = () => {
        setIsMenuOpen((prevState) => {
            const newValue = !prevState;
            if (newValue) {
                setOpenedMenuItemId(-1);
            }
            return newValue;
        });
    };

    const handleOpenMenuItem = (itemId: number) => {
        setOpenedMenuItemId((prevState) => {
            if (prevState === itemId) {
                return -1;
            }

            return itemId;
        });
    };

    return (
        <header className={`${styles.header} container-lg`}>
            <Image src="/assets/header/logo.svg" alt="logo" width={139} height={20}/>

            {!isTabletView && (
                <Image
                    src={isMenuOpen ? menuIcon.close.src : menuIcon.open.src}
                    alt={isMenuOpen ? menuIcon.close.alt : menuIcon.open.alt}
                    onClick={handleToggleMenu}
                    width={isMenuOpen ? 24 : 19}
                    height={40}
                />
            )}

            {isTabletView && (
                <>
                    <div className={styles["tablet-menu"]}>
                        <ul>
                            {headerListItems.map((item: HeaderListItems) => (
                                <li key={item.id}>
                                    <div className="d-flex align-center">
                                        <span className={styles["menu-item-title"]}>
                                            {item.title}
                                        </span>

                                        {item.children.length > 0 && (
                                            <div className={styles["dropdown-icon"]}/>
                                        )}
                                    </div>

                                    {item.children.length > 0 && (
                                        <div className={styles["dropdown-product-wrapper"]}>
                                            <div
                                                className={`${
                                                    dropdownStyles["dropdown-product-wrapper"]
                                                } ${
                                                    item.id === 3 &&
                                                    dropdownStyles[
                                                        "dropdown-product-wrapper-column-direction"
                                                        ]
                                                }`}
                                            >
                                                {item.children.map((child: childrenHeaderListItems) => (
                                                    <HeaderListItem
                                                        key={child.id}
                                                        title={child.title}
                                                        description={child.description}
                                                        hasImage={child.hasImage}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles["authentication"]}>
                        <button className="btn-outline">Log In</button>
                        <button className="orange-btn">Get Started</button>
                    </div>
                </>
            )}

            {!isTabletView && isMenuOpen && (
                <div className={styles["menu-mobile-wrapper"]}>
                    <ul>
                        {headerListItems.map((item: HeaderListItems) => (
                            <li key={item.id}>
                                <div
                                    className="d-flex align-center"
                                    onClick={() => handleOpenMenuItem(item.id)}
                                >
                  <span className={styles["menu-item-title"]}>
                    {item.title}
                  </span>

                                    {item.children.length > 0 && (
                                        <div
                                            className={`${styles["dropdown-icon"]} ${
                                                item.id === openedMenuItemId
                                                    ? styles["dropdown-icon_open"]
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </div>

                                {item.children.length > 0 && item.id === openedMenuItemId && (
                                    <div className={dropdownStyles["dropdown-product-wrapper"]}>
                                        {item.children.map((child: childrenHeaderListItems) => (
                                            <HeaderListItem
                                                key={child.id}
                                                title={child.title}
                                                description={child.description}
                                                hasImage={child.hasImage}
                                            />
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className={styles["authentication"]}>
                        <button className="btn-outline">Log In</button>
                        <button className="orange-btn">Get Started</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
