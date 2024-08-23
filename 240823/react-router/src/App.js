import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    // BrowserRouter 컴포넌트:
    <BrowserRouter>
      {/* Routes 컴포넌트: */}
      <Routes>
        {/* // Route 컴포넌트: */}
        <Route path="/" element={<Index name="DAON" />}></Route>
        <Route path="/one" element={<One />}></Route>
        <Route path="/two" element={<Two />}></Route>
        <Route path="/three" element={<Three />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/courses" element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function ProductList() {
  // useLocation(): url 관련된 정보
  const location = useLocation();
  // url의 쿼리스트링에 접근해서 원하는 데이터를 가져올때 사용
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  return (
    <div>
      <h1>ProductList</h1>
      <p>category: {category}</p>
      <p>sort: {sort}</p>
      <Link to="/">home</Link>
    </div>
  );
}

function ProductDetails() {
  const location = useLocation();
  console.log("🚀 ~ ProductDetails ~ location:", location);

  const { productId, fromPage, lastScrollPosition } = location.state || {};
  return (
    <>
      <div style={{ height: "2000px" }}>
        <h1>ProductDetails</h1>
        <p>productId: {productId}</p>
        <p>fromPage: {fromPage}</p>
        <p>lastScrollPosition: {lastScrollPosition}</p>
        <Link to="/">home</Link>
      </div>

      <div id="the-hash">ss</div>
    </>
  );
}

function Index(props) {
  return (
    <div>
      <h1>Index~~</h1>
      <h2>name: {props.name}</h2>
      <Link to="/one">one</Link>
      <br />
      <Link to="/two">two</Link>
      <br />
      <Link to="/three">three</Link>
      <br />
      search 속성 사용:
      <Link
        to={{
          pathname: "/products",
          search: "?category=electronics&sort=price",
        }}
      >
        전자제품 (가격순)
      </Link>
      <br />
      state 속성 사용:
      <Link
        to="/product-details"
        state={{ productId: 123, fromPage: "list", lastScrollPosition: 1500 }}
      >
        제품 상세 보기
      </Link>
      <br />
      search & state 속성 사용:
      <Link
        to={{
          pathname: "/courses",
          search: "?sort=name&sorting=asc",
          hash: "#the-hash",
        }}
        state={{ productId: 123, fromPage: "list", lastScrollPosition: 1500 }}
      >
        제품 상세 보기
      </Link>
    </div>
  );
}

function One() {
  return (
    <div>
      <h1>One</h1> <Link to="/">home</Link>
    </div>
  );
}

function Two() {
  return (
    <div>
      <h1>hello world2</h1> <Link to="/">home</Link>
    </div>
  );
}

function Three() {
  return (
    <div>
      {" "}
      <h1>hello world3</h1> <Link to="/">home</Link>
    </div>
  );
}

export default App;
