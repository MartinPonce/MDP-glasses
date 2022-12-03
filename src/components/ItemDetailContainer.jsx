import React, {useEffect, useState} from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { idItem } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "productos", idItem )
        
        

        getDoc(refDoc).then((item) => {
            
            const aux = { 
                ...item.data(), 
                id: item.id,
            };
            setProducto(aux);
        });
    }, [idItem]);

    return <ItemDetail producto={producto} />;
}