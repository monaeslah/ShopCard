import React, { useEffect } from "react";
const ChosenList = () => {
  const deleteChosenItem = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <div className="summary-border">
        <div className="titles">
          <p>ProductName</p>
          <p>Amount</p>
          <p>Price</p>
        </div>
        <div className="data">{/* {selectedItemssss  area} */}</div>
      </div>
    </>
  );
};
export default ChosenList;
