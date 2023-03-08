import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buylistAction, makeListAction } from "../redux/pages/action";

import ShopCart from "./shopBox/choosingBorder";
import ChosenList from "./ChosenList";
import FinalStep from "./FinalStep";

const Index = () => {
  const data = useSelector((store: any) => store.Product);
  const finalList = useSelector((store: any) => store.MakeLists);

  const finalCost = finalList?.reduce(
    (addedItem: any, index: { totalCost: any }) => index.totalCost + addedItem,
    0
  );

  const [isOpen, setIsopen] = useState(false);
  const [amountItems, setAmountItems] = useState(1);
  const [selectedItemsCost, setSelectedItemsCost] = useState(0);

  const dispatch = useDispatch();
  const openList = () => {
    setIsopen(!isOpen);
  };

  const addToShopList = (
    item: {
      id: string;
      productName: string;
      maxAmount: string;
      taxRate: string;
      price: string;
    },
    amountItems: number,
    selectedItemsCost: number
  ) => {
    dispatch(makeListAction(item, amountItems, selectedItemsCost));
  };
  const buyItems = (finalBill: {
    finalBill: {
      id: string;
      productName: string;
      maxAmount: number;
      taxRate: number;
      price: number;
    };
  }) => {
    dispatch(buylistAction(finalBill));
  };
  return (
    <div className="app-bg">
      <ShopCart
        products={data}
        isOpen={isOpen}
        openList={openList}
        //@ts-ignore
        addToShopList={addToShopList}
        amountItems={amountItems}
        setAmountItems={setAmountItems}
        selectedItemsCost={selectedItemsCost}
        setSelectedItemsCost={setSelectedItemsCost}
      />
      {finalList.length !== 0 ? (
        <>
          <ChosenList finalList={finalList} />

          <FinalStep
            finalCost={finalCost}
            finalList={finalList}
            buyItems={buyItems}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Index;
