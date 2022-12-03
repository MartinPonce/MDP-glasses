

import React from "react";
import { Link, Route } from "react-router-dom";
import Cart from "./Cart";
import CartWidget from "./CartWidget";
import Checkout from "./Checkout";

export default function Navigationbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/category/sport">Sport</Link>
            <br />
            <Link to="/category/elegant">Elegant</Link>
            <br />
            <Link to="/cart">Cart</Link>
            <br />
            <Link to="/checkout">Checkout</Link>
            <br />  
            <CartWidget />
            <br />   
        </div>
    );
}



