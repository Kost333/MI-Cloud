import React, {FC} from "react";
import Image from "next/image";

import {useMediaQuery} from "@/hooks";

import dropdownStyles from "@/styles/header/HeaderDropdownItem.module.css";
import {IProps} from "@/types/types";

const HeaderListItem: FC<IProps> = ({title, description, hasImage}) => {
    const isTabletView: boolean = useMediaQuery("(min-width: 1024px)");

    return (
        <div className={dropdownStyles["dropdown-product"]}>
            {hasImage && (
                <Image
                    src="/assets/header/product.svg"
                    alt="product"
                    width={isTabletView ? 96 : 30}
                    height={isTabletView ? 91 : 30}
                    className={dropdownStyles["dropdown-product-logo"]}
                />
            )}

            <div className={dropdownStyles["dropdown-product-info"]}>
                <div className={dropdownStyles["dropdown-product-info-title"]}>
                    <span>{title}</span>

                    {isTabletView && (
                        <Image
                            className={dropdownStyles["dropdown-product-info-title-icon"]}
                            width={15}
                            height={10}
                            src="/assets/header/arrow-product.svg"
                            alt="product_arrow"
                        />
                    )}
                </div>

                {isTabletView && description && (
                    <p className={dropdownStyles["dropdown-product-info-description"]}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default HeaderListItem;
