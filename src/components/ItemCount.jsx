import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../CartContextComponent";
import { Link } from "react-router-dom";



export default function ItemCount({ producto }) {
    const [count, setCount] = useState(1);
    const [removeButton, setRemoveButton] = useState(false);
    const { cart, addToCart } = useContext(cartContext);
    
    function sum() {
        if (count < producto.quantity) {
            setCount(count + 1);
        }
    }
    function res(){
        if (count >= 2) {
        setCount(count - 1);
        }
    }
    function onAdd() {
        addToCart(producto, count);
        setRemoveButton(true);
    }
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    return (
        <div>
            <span style={{ cursor: "pointer"}} onClick={sum}>
                +
            </span>
            {count}
            <span style={{ cursor: "pointer"}} onClick={res}>
                -
            </span>
            <br />
            
            {removeButton ? (
                <>
                  Producto agregado...
                  <Link to="/">Seguir comprando..</Link>{" "}
                  <Link to="/checkout">Finalizar compra..</Link>
                </>
            ) : (
              <button onClick={onAdd}>AGREGAR AL CARRO</button>
            )}
        </div>        
    );
}