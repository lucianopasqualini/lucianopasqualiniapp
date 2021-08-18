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
    //    const UnItem = productos.find( (producto) => producto.id === abc);
        setItem(obj)
        console.log(UnItem)
    };

    useEffect(() => {
        getItem(id);
    }, [id]);

    return (
        <div className="App container-fluid justify-content-center">
            <NavBar />
            <ItemDetail
                key={items.id}
                id={items.id}
                title={items.title}
                description={items.description}
                price={items.price}
                pictureUrl={items.pictureUrl}
                stock={items.stock}
                initial={items.initial}
            />
        </div>
    );
}

export default ItemDetailContainer;