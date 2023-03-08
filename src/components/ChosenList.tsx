import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../assets/img/icons8-close-16.png";
import { deletOneAction } from "../redux/pages/action";
const ChosenList = (props: { finalList: any[] }) => {
  const dispatch = useDispatch();

  const deleteChosenItem = (id: string) => {
    console.log(id);
    dispatch(deletOneAction(id));
  };
  useEffect(() => {}, [props.finalList]);

  return (
    <>
      <div className="summary-border">
        <div className="titles">
          <p>ProductName</p>
          <p>Amount</p>
          <p>Price</p>
        </div>
        <div className="data">
          {props.finalList.map((item: any) => {
            return (
              <div className="final-list" key={item.id}>
                <p>{item.productName}</p>
                <p>{item.Amount}</p>
                <p>{item.totalCost.toFixed(3)}
                </p>
                  <img
                    src={close}
                    alt="close"
                    onClick={() => deleteChosenItem(item.id)}
                  />
              
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ChosenList;
