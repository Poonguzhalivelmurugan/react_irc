import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import {Login} from "./components/Login";
import {Products} from "./components/Products";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home"element={<Home/>}/>
            <Route path="/" element={<Shop />} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login"element={<Login/>}/>
            <Route path="/Signup"element={<Signup/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
     <Footer/>
    </div>
  );
}

export default App;
