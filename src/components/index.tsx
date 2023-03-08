import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShopCart from "./shopBox/choosingBorder";
import ChosenList from "./ChosenList";
import FinalStep from "./FinalStep";

const Index = () => {
  const data = useSelector((store: any) => store.Product);

  return (
    <div className="app-bg">
      <ShopCart products={data} />

      <ChosenList />

      <FinalStep />
    </div>
  );
};

export default Index;
