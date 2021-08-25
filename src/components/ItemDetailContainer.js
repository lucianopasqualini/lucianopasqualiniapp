import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import NavBar from "./NavBar"
import { useParams } from 'react-router-dom';
import ListaProductos from './productos.json'

function ItemDetailContainer() {
    
    const [items, setItem] = useState({});

    const { id } = useParams();

    const getItem = (abc) => {
        const UnItem = ListaProductos.find( (producto) => producto.id == abc);
        const obj = {...UnItem};
        setItem(obj)
        console.log(UnItem)
    };

    useEffect(() => {
        getItem(id);
    }, [id]);

    return (
        <div className="App container-fluid bg-light">
            <NavBar />
            <div className="bg-white py-5">
                <ItemDetail key={items.id} producto={items}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;