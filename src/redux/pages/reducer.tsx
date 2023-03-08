//@ts-nocheck
import { SHOWPRODUCTS } from "./type";
const data = require("./products.json");

export const Product = (state = data, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SHOWPRODUCTS:
      return [action.payload];
    default:
      return state;
  }
};
