import { CHOOSEPRUDUCTS ,DELETEONE,DELETE,BUYPRODUCT} from "./type";
export const makeListAction = (
  {
    id,
    productName,
    maxAmount,
    taxRate,
    price,
  }: {
    id: string;
    productName: string;
    maxAmount: string;
    taxRate: string;
    price: string;
  },
  Amount: number,
  totalCost: number
) => ({
  type: CHOOSEPRUDUCTS,

  payload: {
    id,
    productName,
    maxAmount,
    taxRate,
    price,
    Amount,
    totalCost,
  },
});
export const buylistAction = (payload: {
  finalBill: {
    id: string;
    productName: string;
    maxAmount: number;
    taxRate: number;
    price: number;
  };
}) => ({
  type: BUYPRODUCT,

  payload,
});
export const deletOneAction = (id: string) => ({
  type: DELETEONE,
  id
});
export const deletAllAction = () => ({
  type: DELETE,
});