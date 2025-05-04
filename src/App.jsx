import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ProductItems } from "./components/product/ProductItem";
import { CartContextfunc } from "./context/CartCantext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextfunc>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductItems />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CartContextfunc>
      </BrowserRouter>
    </>
  );
}

export default App;
