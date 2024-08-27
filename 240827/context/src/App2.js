import React, { useContext, useState } from "react";
import ProductList from "./contexts/ProductList";

const ProductDisplay = ({ cartList, setCartList }) => {
  const products = useContext(ProductList);

  const handleAdd = (id, name, price) => {
    const cartItemId = cartList.length + 1;

    // 함수형 업데이트로 이전 상태의 값이 들어오는 것을 보장해준다!
    setCartList((prevCart) => {
      return [...prevCart, { id, cartItemId, name, price }];
    });
  };

  const li = products.map((product) => {
    return (
      <li key={product.id}>
        {product.name} - ₩{product.price}
        <button
          onClick={() => handleAdd(product.id, product.name, product.price)}
        >
          카트에 추가
        </button>
      </li>
    );
  });

  return (
    <>
      <h2>상품목록</h2>
      <ul>{li}</ul>
    </>
  );
};

const Cart = ({ cartList, setCartList }) => {
  const handleDelete = (cartItemId) => {
    // filter로 삭제
    setCartList((prevCart) => {
      return prevCart.filter((x) => x.cartItemId !== cartItemId);
    });
  };
  const handleDeleteAll = (productId) => {
    // filter로 삭제
    setCartList((prevCart) => {
      return prevCart.filter((x) => x.id !== productId);
    });
  };

  let uniqueCartList = [
    ...new Map(cartList.map((item) => [item.id, item])).values(),
  ];
  console.log("🚀 ~ Cart ~ uniqueCartList:", uniqueCartList);

  const li = uniqueCartList.map((product) => {
    const count = cartList.filter((x) => x.name === product.name).length; // 중복이 제거되지 않은 리스트에서 개수 확인

    return (
      <li key={product.cartItemId}>
        {product.name} - 수량: {count}
        <div>
          <button onClick={() => handleDelete(product.cartItemId)}>
            1개 제거(cartID)
          </button>
          <button onClick={() => handleDeleteAll(product.id)}>
            모두 제거(id)
          </button>
        </div>
      </li>
    );
  });

  return (
    <>
      <h2>장바구니</h2>
      {cartList.length === 0 ? <p>장바구니가 비어있습니다.</p> : <ul>{li}</ul>}
    </>
  );
};

export default function App2() {
  const [cartList, setCartList] = useState([]);
  return (
    <>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품 개수: {cartList.length}</p>
      <ProductDisplay cartList={cartList} setCartList={setCartList} />
      <Cart cartList={cartList} setCartList={setCartList} />
    </>
  );
}
