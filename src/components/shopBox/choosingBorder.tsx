//@ts-nocheck
import React, { useState, useEffect } from "react";
import arrow from "../../assets/img/dropdown-arrow.jpeg";
import Range from "./Bar";
const ShopCart = (props: { products: any[] }) => {
  const [selecteingItemName, setSelectingItemName] =
    useState("Select a Product");
  return (
    <>
      <div className="choosen-border">
        <div className="dd-wrapper">
          <>
            {props.products.map((product) => {
              return <div key={product.id}>{product.productName}</div>;
            })}
          </>
        </div>
        range area
        <input className="product_number" value={1} pattern="[0-9]*" />
        <span>*</span>
        <span>pp</span>
        <span>=</span>
        <p></p>
        <button className="add_card" onClick={() => addToCart()}>
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ShopCart;
