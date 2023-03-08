//@ts-nocheck
import {
  SHOWPRODUCTS,
  CHOOSEPRUDUCTS,
  DELETEONE,
  DELETE,
  BUYPRODUCT,
} from "./type";
const data = require("./products.json");

export const Product = (state = data, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SHOWPRODUCTS:
      return [action.payload];
    default:
      return state;
  }
};
export const MakeLists = (
  state = [],
  action: { type: any; payload: any; id: any }
) => {
  switch (action.type) {
    case CHOOSEPRUDUCTS:
      console.log("newitem", state);
      const middleList = Object.values(
        state?.reduce((acc, item) => {
          acc[item.productName] = acc[item.productName]
            ? {
                ...item,
                Amount:
                  Number(item.Amount) + Number(acc[item.productName].Amount),
                totalCost:
                  Number(item.totalCost) +
                  Number(acc[item.productName].totalCost),
              }
            : item;
          return acc;
        }, {})
      );

      const newState = [...middleList, action.payload];
      if (newState.length > 10) {
        alert("you can not add any items");
        return middleList;
      }
      return Object.values(
        newState?.reduce((acc, item) => {
          acc[item.productName] = acc[item.productName]
            ? {
                ...item,
                Amount:
                  Number(item.Amount) + Number(acc[item.productName].Amount),
                totalCost:
                  Number(item.totalCost) +
                  Number(acc[item.productName].totalCost),
              }
            : item;

          return acc;
        }, {})
      );

    case DELETEONE:
      return [...state.filter((item) => item.id !== action.id)];

    case DELETE:
      return (state = []);

    default:
      return state;
  }
};
export const finalShop = (
  state = data,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case BUYPRODUCT:
      console.log("state>>>>>", action);
      return [action.payload];
    default:
      return state;
  }
};
