import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import ProductForm from "./Components/ProductForm";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/action";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  //  const navigate = useNavigate();

  useEffect(() => {
    // console.log("fetch");
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/create-product" element={<ProductForm />} />
      </Routes>
    </>
  );
}

export default App;
