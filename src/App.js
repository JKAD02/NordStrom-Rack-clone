import {Women_Page} from "./component/women-page";
import{Men_Page} from "./component/men-page";
import{Kid_Page} from "./component/kid-page.jsx";
import{Shoes_Page}from"./component/shoes-page";
import{Activeware_Page}from"./component/activeware-page";
import{Bags_Page}from"./component/bags-page";
import{Beauty_Page}from"./component/beauty-page"
import{Gift_Page}from"./component/gift-page"
import{Nvabar} from"./component/navbar"
import{Routes,Route} from"react-router-dom"
import { CartProvider } from "react-use-cart";
import './App.css';
import { Cart } from "./component/cart_page";

function App() {
  return (
    <div className="App">
       <Nvabar/>
     <Routes>
      <Route path="/women" element={<CartProvider><Women_Page/></CartProvider>}></Route>
      <Route path="/cart" element={<CartProvider><Cart/></CartProvider>}></Route>
      <Route path="/men" element={<CartProvider><Men_Page/></CartProvider>}></Route>
      <Route path="/kid" element={<CartProvider><Kid_Page/></CartProvider>}></Route>
      <Route path="/shoes" element={<CartProvider><Shoes_Page/></CartProvider>}></Route>
      <Route path="/activeware" element={<CartProvider><Activeware_Page/></CartProvider>}></Route>
      <Route path="/bags" element={<CartProvider><Bags_Page/></CartProvider>}></Route>
      <Route path="/beauty" element={<CartProvider><Beauty_Page/></CartProvider>}></Route>
      <Route path="/gift" element={<CartProvider><Gift_Page/></CartProvider>}></Route>
    </Routes>
    </div>
  );
}

export default App;
