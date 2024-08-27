import { useContext } from "react";
import { CartContext } from "./CartProvider";

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

export default ProductList;
