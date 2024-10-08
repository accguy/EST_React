import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/"> home </Link>
          </li>
          <li>
            <Link to="/one"> one </Link>
          </li>
          <li>
            <Link to="/two"> two </Link>
          </li>
          <li>
            <Link to="/three"> three </Link>
          </li>
          <li>
            <Link to="/blog/1"> four_1 </Link>
          </li>
          <li>
            <Link to="/blog/2"> four_2 </Link>
          </li>
          <li>
            <Link to="/blog/3"> four_3 </Link>
          </li>
        </ul>
      </nav>

      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

function Blog() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Blog</h1>;
}

export default App;
