import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletAllAction } from "../redux/pages/action";
const FinalStep = () => {
  const dispatch = useDispatch();

  const happyShop = () => {
    alert();
  };

  return (
    <div className="payment-border">
      <div className="total-price">
        <p>33</p>
      </div>
      <div className="operation">
        <div>
          <button onClick={() => dispatch(deletAllAction())} className="clear_card">
            clear Cart
          </button>
        </div>
        <div>
          <p>Progress Bar section</p>

          <button onClick={() => happyShop()} className="done_shop">
            Buy!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
