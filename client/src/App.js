import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import ProductForm from "./Components/ProductForm";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/create-product" element={<ProductForm />} />
      </Routes>
      {/* <Route path="/product/:id" component={ProductDetail} /> */}
      {/* <Routes>
        <Route path="/" element={<Header />} />
      </Routes> */}
    </>
  );
}

export default App;
