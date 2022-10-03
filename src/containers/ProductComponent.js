import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);   // how to get data from store
    console.log(products);

    // destructre
    const { id,title,category} = products[0];

    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">

                        <div className="header">{id}  {title} {category}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductComponent