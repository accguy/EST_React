// action 생성 함수
export const sale = () => {
  return { type: "ON_SALE" };
};
export const soldOut = () => {
  return { type: "SOLD_OUT" };
};

// state 초기값
const initialState = {
  message: "판매중!!",
};

// reducer
const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_SALE":
      return { ...state, message: "판매중!!" };
    case "SOLD_OUT":
      return { ...state, message: "완판!!" };
    default:
      return state;
  }
};

export default stockReducer;
