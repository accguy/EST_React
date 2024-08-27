import { useContext } from "react";
import { CartContext } from "./CartProvider";

const Header = () => {
  const { getTotalCount } = useContext(CartContext);

  return (
    <header>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품의 개수: {getTotalCount()}</p>
    </header>
  );
};

export default Header;
