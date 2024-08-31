import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { minusNumber, addNumber } from "../modules/goodsCounter"; // 액션 생성 함수

export default function GoodsCounter() {
  // 1.useSelector
  const { stock, goods } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
      goods: state.goodsReducer.goods,
    };
  }, shallowEqual);
  // 컴포넌트가 모종의 이유로 렌더링이 될때 state가 동일하더라도
  // useSelector는 불러온 state를 새로운 state로 판단한다.
  // shallowEqual: state의 객체 구조가 같고 각 속성의 값이 동일하다면,
  // 두 객체를 같다고 판단합니다.

  // 2.useDispatch
  const dispatch = useDispatch();

  // 3.event
  const onSubstractNumber = () => {
    dispatch(minusNumber());
  };
  const onAddNumber = () => {
    dispatch(addNumber());
  };

  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div>
        <button onClick={onSubstractNumber} disabled={goods <= 0}>
          MINUS
        </button>
        <span>{goods}</span>
        <button onClick={onAddNumber} disabled={stock <= 0}>
          PLUS
        </button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </div>
  );
}
