import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletAllAction } from "../redux/pages/action";
const FinalStep = (props: {
  buyItems: (arg0: any) => void;
  finalCost: number;
  finalList: any[];
}) => {
  const dispatch = useDispatch();

  const happyShop = (items: any[], currency: number) => {
    const financList = { items, currency };
    props.buyItems(financList);
    alert("You will be redirected to the payment portal")
  };

  return (
    <div className="payment-border">
      <div className="total-price">
        <p>{props.finalCost.toFixed(3)}</p>
      </div>
      <div className="operation">
        <div>
          <button
            onClick={() => dispatch(deletAllAction())}
            className="clear_card"
          >
            clear Cart
          </button>
        </div>
        <div>
          <p>Progress Bar section</p>

          <button
            onClick={() => happyShop(props.finalList, props.finalCost)}
            className="done_shop"
          >
            Buy!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
