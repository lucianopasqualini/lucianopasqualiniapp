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
                const { id, title, description, price, pictureUrl, stock, initial } = producto;
                return (
                <Item
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    price={price}
                    pictureUrl={pictureUrl}
                    stock={stock}
                    initial={initial}/>
                    )
            })}
        </>
    );
}

export default ItemList;