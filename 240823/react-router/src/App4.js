import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

const Index = () => {
  return <h1>Home</h1>;
};

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>id: {id}</p>
      <Link to="notice/">products/{id}/notice</Link>
      <Outlet />
    </div>
  );
};
const ProductNotice = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>ProductNotice</h2>
      <p>id: {id}</p>
    </div>
  );
};

const Cart = () => {
  return <h1>Cart</h1>;
};
const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
};

const UsersIndex = () => {
  return <div>Index</div>;
};
const Coupon = () => {
  return <div>Coupon</div>;
};
const Question = () => {
  return <div>Question</div>;
};
const UserNotice = () => {
  return <div>UserNotice</div>;
};

function App4() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="products/1">products/1</Link>
          </li>
          <li>
            <Link to="products/2">products/2</Link>
          </li>
          <li>
            <Link to="products/3">products/3</Link>
          </li>
          <li>
            <Link to="products/4">products/4</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <Link to="/users/coupon">users/coupon</Link>
          </li>
          <li>
            <Link to="/users/question">users/question</Link>
          </li>
          <li>
            <Link to="/users/notice">users/notice</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}>
          <Route path="/products/:id/notice" element={<ProductNotice />} />
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/users" element={<Users />}>
          <Route index element={<UsersIndex />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<UserNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App4;
