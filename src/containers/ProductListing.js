import React from "react";
// import {  useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    // const products = useSelector((state) => state);   // how to get data from store
    // console.log(products);

    return (
        <div className="ui grid container">
            
            <ProductComponent />
        </div>
    );
};

export default ProductListing;