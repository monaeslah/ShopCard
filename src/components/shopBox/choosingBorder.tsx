//@ts-nocheck
import React, { useState, useEffect } from "react";
import arrow from "../../assets/img/dropdown-arrow.jpeg";
import Range from "./Bar";
const ShopCart = (props: {
  products: any[];
  setSelectedItemsCost: (arg0: any) => void;
  setAmountItems: (arg0: any) => void;
  amountItems: string | number | readonly string[] | undefined;
  addToShopList: (arg0: undefined, arg1: any, arg2: any) => void; 
  openList: React.MouseEventHandler<HTMLDivElement> | undefined;
  isOpen: any;
}) => {
  const [selecteingItemName, setSelectingItemName] =
    useState("Select a Product");
  const [itemDetails, setItemDetails] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const [rangeVal, setRangeVal] = useState(0);
  const [query, setquery] = useState("");
  const [seachResult, setSeachResult] = useState();

  const handleChange = (e) => {
    const results = props.products.filter((product) => {
      if (e.currentTarget.value === "") return props.products;
      return product.productName
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase());
    });
    setquery(e.currentTarget.value);
    setSeachResult(results);
    // console.log(seachResult, e.currentTarget.value);
  };
  const findItem = (id: any) => {
    const ChoosenItem = props.products.find((item) => item.id === id);
    setSelectingItemName(ChoosenItem.productName);
    setUnitPrice(ChoosenItem.price);
    props.setSelectedItemsCost(ChoosenItem.price);
    setItemDetails(ChoosenItem);
  };

  const updateRange = (val: React.SetStateAction<number>) => {
    setRangeVal(val);
  };
  const itemsAmountOnChange = (event: { currentTarget: { value: any } }) => {
    props.setAmountItems(event.currentTarget.value);
    props.setSelectedItemsCost(
      Number(event.currentTarget.value) * Number(unitPrice)
    );
  };

  useEffect(() => props.setSelectedItemsCost(props.selectedItemsCost), []);

  const addToCart = () => {
    //@ts-ignore
    if (itemDetails.maxAmount < props.amountItems) {
      alert(`please choose less than ${itemDetails.maxAmount} .`);
    } else {
      props.addToShopList(
        itemDetails,
        props.amountItems,
        props.selectedItemsCost
      );
    }
    setRangeVal(1);
    props.setAmountItems(1);
    setSelectingItemName("Select a Product");
  };
  return (
    <>
      <div className="choosen-border">
        <div className={`dd-wrapper ${props.isOpen ? "overlingFlow" : ""}`}>
          <div className="dd-header">
            <div className="dd-header-title" onClick={props.openList}>
              <p>{selecteingItemName}</p>
              <img src={arrow} alt="icon" />
            </div>
          </div>

          {props.isOpen ? (
            <>
              <input
                className="search_item"
                type="search"
                value={query}
                onChange={handleChange}
              />
              {seachResult
                ? seachResult?.map((results) => (
                    <div className="dd-list" key={results.id}>
                      <button
                        className="dd-list-item"
                        onClick={() => {
                          //@ts-ignore
                          props.openList();
                          findItem(results.id);
                        }}
                      >
                        {results.productName}
                      </button>
                    </div>
                  ))
                : props.products.map((product) => {
                    return (
                      <div className="dd-list" key={product.id}>
                        <button
                          className="dd-list-item"
                          onClick={() => {
                            //@ts-ignore
                            props.openList();
                            findItem(product.id);
                          }}
                        >
                          {product.productName}
                        </button>
                      </div>
                    );
                  })}
            </>
          ) : (
            ""
          )}
        </div>
        {selecteingItemName === "Select a Product" ? (
          ""
        ) : (
          <>
            <Range
              rangeVal={rangeVal}
              //@ts-ignore

              setRangeVal={setRangeVal}
              updateRange={updateRange}
              setSelectedItemsCost={props.setSelectedItemsCost}
              selectedItemsCost={props.selectedItemsCost}
              //@ts-ignore
              setAmountItems={(val) => {
                props.setAmountItems(Number(val));
              }}
              itemsAmountOnChange={itemsAmountOnChange}
              maxAmount={props.products}
            />
            <input
              className="product_number"
              value={props.amountItems}
              onChange={itemsAmountOnChange}
              pattern="[0-9]*"
            />
            <span>*</span>
            {/* add close img */}
            <span>{unitPrice}</span>
            <span>=</span>
            <p>{props?.selectedItemsCost as number}</p>
            <button className="add_card" onClick={() => addToCart()}>
              Add To Cart
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ShopCart;
