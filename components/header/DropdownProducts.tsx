import React from "react";
import dropdownStyles from "../../styles/header/Header-dropdown-item.module.css";
import Image from 'next/image';
import {products} from "@/utility/utils/utils";

const DropdownProducts = () => {

    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className={dropdownStyles['dropdown-product-container']}>
                    <div className={dropdownStyles['dropdown-product-logo']}>
                        <Image src="/assets/header/product.svg" alt="product" width={96}
                               height={91}/>
                    </div>
                    <div className={dropdownStyles['dropdown-product-info']}>
                        <div className={dropdownStyles['dropdown-product-info-title']}>
                            <span>{product.title}</span>
                            <Image
                                className={dropdownStyles['dropdown-product-info-title-icon']}
                                width={15} height={0}
                                src="/assets/header/arrow-product.svg" alt="product_arrow"/>
                        </div>
                        <p className={dropdownStyles['dropdown-product-info-description']}>{product.description}</p>
                        <p className={dropdownStyles['dropdown-product-info-description']}>{product.description1}</p>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default DropdownProducts;