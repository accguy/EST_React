import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter"; // 액션 생성 함수

export default function StockCounter() {
  // 1.useSelector
  const { message, stock } = useSelector((state) => {
    return {
      message: state.stockReducer.message,
      stock: state.goodsReducer.stock,
    };
  }, shallowEqual);

  // 2.useDispatch
  const dispatch = useDispatch();
  useEffect(() => {
    if (stock === 0) {
      dispatch(soldOut()); // dispatch(action 객체)
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return <h2>{(stock, message)}</h2>;
}
