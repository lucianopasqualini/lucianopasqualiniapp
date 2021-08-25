import { React, useState, useEffect } from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import ListaProductos from './productos.json'

function ItemList () {

    const [items, setItems] = useState([]);
    
    useEffect(
        () => {
        setTimeout(async () => {
            setItems(ListaProductos);
        }, 1000);
        },
    );

    return (
        <>
            {items.map(producto => {
                return (
                    <Item key={producto.id} producto={producto}/>
                )
            })}
        </>
    );
}

export default ItemList;