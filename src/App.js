import './App.css';
import  { createContext, useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import CartContextComponent from "./CartContextComponent";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navigationbar from './components/Navigationbar';


export default function App() {
    return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <Navigationbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextComponent>
    </>
    );
}


