import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 카트의 상태
  const [cart, setCart] = useState([]);
  console.log("🚀 ~ CartProvider ~ cart:", cart);

  // 카트에 상품 추가하기
  // ex) product = { id: 3, name: "태블릿", price: 300 },
  const addToCart = (product) => {
    setCart((prevCart) => {
      // product가 이미 카트에 존재하는 아이템인지 확인하는 변수
      const isAlreadyInCart = prevCart.find((item) => item.id === product.id);

      return isAlreadyInCart
        ? // 이미 카트에 존재하는 아이템이라면 해당 아이템의 count만 1증가시킴
          // 배열의 map 메소드를 사용할때, 카트에 있는 아이템중 product의 아이디와 일치하는 아이템은 count++, 나머지 아이템들은 그대로 반환 해줘야됨!!
          prevCart.map((item) => {
            // if (item.id === product.id) {
            //   return { ...item, count: item.count + 1 };
            // }
            // return item;
            return item.id === product.id
              ? { ...item, count: item.count + 1 }
              : item;
          })
        : // 카트에 처음 추가되는 경우라면 count: 1로 배열에 product 새로 추가
          [...prevCart, { ...product, count: 1 }];
    });
  };

  // 카트에서 제거하기
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((x) => x.id !== productId));
  };

  // 카트에 담겨있는 상품의 총합 구하기
  const getTotalCount = () => {
    return cart.reduce((a, c) => {
      return a + c.count;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
