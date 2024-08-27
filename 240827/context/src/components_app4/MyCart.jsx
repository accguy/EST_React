import { useContext } from "react";
import { CartContext } from "./CartProvider";

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

export default MyCart;
