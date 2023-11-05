import React from "react";
import styles from "../../styles/header/Header.module.css";
import dropdownStyles from "../../styles/header/Header-dropdown-item.module.css";
import Image from 'next/image';

const generateArray = (length: number = 1) => new Array(length).fill(0);

const productsArray = generateArray(6);
const servicesArray = generateArray(3);

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/assets/header/logo.svg" alt="logo" width={139} height={20}/>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li className={`${styles['menu-item']} ${styles['dropdown-container']}`}>
                        <span className={styles['menu-item-title']}>Products</span>
                        <div className={styles['dropdown-icon']}></div>
                        <div className={styles['dropdown-content']}>
                            <div className={styles['dropdown-visible-content']}>
                                <div>
                                    {productsArray.slice(0, 3).map((_, index) => (
                                        <div key={index} className={dropdownStyles['dropdown-product-container']}>
                                            <div className={dropdownStyles['dropdown-product-logo']}>
                                                <Image src="/assets/header/product.svg" alt="product" width={96} height={91}/>
                                            </div>
                                            <div className={dropdownStyles['dropdown-product-info']}>
                                                <div className={dropdownStyles['dropdown-product-info-title']}>
                                                    <span>Virtual servers</span>
                                                    <Image className={dropdownStyles['dropdown-product-info-title-icon']} width={15} height={0}
                                                         src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                                </div>
                                                <p className={dropdownStyles['dropdown-product-info-description']}>with
                                                    GPUs</p>
                                                <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                                    resources and workloads
                                                    with our virtual servers.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {productsArray.slice(3, 6).map((_, index) => (
                                        <div key={index} className={dropdownStyles['dropdown-product-container']}>
                                            <div className={dropdownStyles['dropdown-product-logo']}>
                                                <Image src="/assets/header/product.svg" alt="product" width={96} height={91}/>
                                            </div>
                                            <div className={dropdownStyles['dropdown-product-info']}>
                                                <div className={dropdownStyles['dropdown-product-info-title']}>
                                                    <span>Virtual servers</span>
                                                    <Image className={dropdownStyles['dropdown-product-info-title-icon']} width={15} height={0}
                                                         src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                                </div>
                                                <p className={dropdownStyles['dropdown-product-info-description']}>with
                                                    GPUs</p>
                                                <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                                    resources and workloads
                                                    with our virtual servers.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles['menu-item']} ${styles['dropdown-container']}`}>
                        <span className={styles['menu-item-title']}>Services</span>
                        <div className={styles['dropdown-icon']}></div>
                        <div className={styles['dropdown-content']}>
                            <div className={styles['dropdown-visible-content']}>
                                {servicesArray.map((_, index) => (
                                    <div key={index} className={dropdownStyles['dropdown-product-container']}>
                                        <div className={dropdownStyles['dropdown-product-logo']}>
                                            <Image src="/assets/header/product.svg" alt="product" width={96} height={91}/>
                                        </div>
                                        <div className={dropdownStyles['dropdown-product-info']}>
                                            <div className={dropdownStyles['dropdown-product-info-title']}>
                                                <span>Virtual servers</span>
                                                <Image className={dropdownStyles['dropdown-product-info-title-icon']} width={15} height={0}
                                                     src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                            </div>
                                            <p className={dropdownStyles['dropdown-product-info-description']}>with
                                                GPUs</p>
                                            <p className={dropdownStyles['dropdown-product-info-description']}>Adjust
                                                resources and workloads
                                                with our virtual servers.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className={`${styles['menu-item']} ${styles['dropdown-container']}`}>
                        <span className={styles['menu-item-title']}>ML Cloud</span>
                        <div className={styles['dropdown-icon']}></div>
                        <div className={styles['dropdown-content']}>
                            <div className={`${styles['dropdown-visible-content']} ${styles['dropdown-link-content']}`}>
                                <div className={dropdownStyles['dropdown-product-link-container']}>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <Image className={dropdownStyles['dropdown-product-info-title-icon']} width={96} height={91}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-link-container']}>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <Image className={dropdownStyles['dropdown-product-info-title-icon']} width={15} height={0}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={dropdownStyles['dropdown-product-link-container']}>
                                    <div className={dropdownStyles['dropdown-product-info']}>
                                        <div className={dropdownStyles['dropdown-product-info-title']}>
                                            <span>Virtual servers</span>
                                            <Image className={dropdownStyles['dropdown-product-info-title-icon']} width={15} height={0}
                                                 src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles['menu-item']}>
                        <span className={styles['menu-item-title']}>Blog</span>
                    </li>
                    <li className={styles['menu-item']}>
                        <span className={styles['menu-item-title']}>Contact us</span>
                    </li>
                </ul>
            </div>
            <div className={styles['authentication']}>
                <span>Log In</span>
                <button>Get Started</button>
            </div>
        </header>
    );

};

export default Header;