// action 생성 함수
export const addNumber = () => {
  return { type: "ADD" };
};
export const minusNumber = () => {
  return { type: "MINUS" };
};

// state 초기값
const initialState = {
  stock: 10,
  goods: 1,
};

// reducer
const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, stock: state.stock - 1, goods: state.goods + 1 };
    case "MINUS":
      return { ...state, stock: state.stock + 1, goods: state.goods - 1 };
    default:
      return state;
  }
};

export default goodsReducer;
