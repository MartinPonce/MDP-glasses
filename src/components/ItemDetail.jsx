import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
    return (
        <div>
            <h1>Brand: {producto.brand}</h1>
            <h2>Nombre: {producto.name}</h2>
            <img 
                style={{ height: "350px"}} 
                src={producto.image} 
                alt={producto.name}>
            </img>
            <p>Category: {producto.idCategory}</p>
            <p>Color: {producto.color}</p>
            <p>Description: {producto.description}</p>
            <p>Id: {producto.id}</p>
            
            <p>MaxQuantity: {producto.maxQuantity}</p>
            <p>Price: {producto.price}</p>
            <p>Quantity: {producto.quantity}</p>
            <p>Sizes: {producto.sizes}</p>
            <ItemCount producto={producto} />                
        </div>
    );
}