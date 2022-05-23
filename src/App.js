import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
// import CartItems from "./components"
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import { useState } from "react";
import DetailsPage from "./pages/DetailsPage";
function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route exact path="/" element={<Content setCart={setCart} />} />
        {/* <Route exact path="/cart" element={<CardDetail />} /> */}
        <Route exact path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
