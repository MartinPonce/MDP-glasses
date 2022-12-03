import React from "react";
import { Link } from "react-router-dom";

export default function Item({producto}) {
    return (
        <>
            <Link to={"/item/" + producto.id}>
                <div>
                    <img 
                        style={{ height: "200px"}} 
                        src={producto.image} 
                        alt={producto.name}>
                    </img>
                    <p>Brand: {producto.brand}</p>
                    <p>Nombre: {producto.name}</p>
                    <p>Category: {producto.idCategory}</p>
                    <p>Color: {producto.color}</p>
                    <p>Description: {producto.description}</p>
                    <p>Id: {producto.id}</p>
                    
                    <p>MaxQuantity: {producto.maxQuantity}</p>
                    <p>Price: {producto.price}</p>
                    <p>Quantity: {producto.quantity}</p>
                    <p>Sizes: {producto.sizes}</p>                
                </div>
            </Link>    
            <br />
            
        </>
    );
}