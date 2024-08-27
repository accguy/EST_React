import { useContext } from "react";
import { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 카트의 상태
  const [cart, setCart] = useState([]);
  console.log("🚀 ~ CartProvider ~ cart:", cart);

  // 카트에 상품 추가하기
  const addToCart = (product) => {
    setCart((prevCart) => {
      // 카트에 상품이 이미 존재하는지 확인
      // find: 조건에 만족하는 첫번째 원소를 반환합니다.
      const isExist = prevCart.find((item) => product.id === item.id);

      // 상품이 이미 존재하는 경우
      if (isExist) {
        return prevCart.map((item) => {
          // 내가 찾고자 하는 상품과 일치하는 상품의 count 값을 증가시킵니다.
          return item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      }

      // 상품이 카트에 처음 들어가는 경우
      return [...prevCart, { ...product, count: 1 }];
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
    // CartContext.Provider로 자식 컴포넌트들에게 카트 관련 기능들을 제공합니다.
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const Header = () => {
  const { getTotalCount } = useContext(CartContext);

  return (
    <header>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품의 개수: {getTotalCount()}</p>
    </header>
  );
};

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];

  return (
    <>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₩{product.price}
            <button onClick={() => addToCart(product)}>카트에 추가하기</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const MyCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비었습니다.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - 수량: {product.count}
              <button onClick={() => removeFromCart(product.id)}>제거</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <MyCart />
    </CartProvider>
  );
};

export default App;
