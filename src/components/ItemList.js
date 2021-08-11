import { React, useState, useEffect } from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';

const productos = [
    {
        id: '0',
        title: 'Producto',
        description: 'Acá iría la descripción del producto (por ahora sin posibilidad de "ver más" y "ver menos").',
        price: '1000',
        pictureUrl: 'https://sardivar.websites.co.in/twenty-nineteen/img/defaults/product-default.png',
        initial: '0',
        stock: '8',
    },
    {
        id: '1',
        title: 'Producto',
        description: 'Acá iría la descripción del producto (por ahora sin posibilidad de "ver más" y "ver menos").',
        price: '3000',
        pictureUrl: 'https://sardivar.websites.co.in/twenty-nineteen/img/defaults/product-default.png',
        initial: '0',
        stock: '30',
    },
    {
        id: '2',
        title: 'Producto',
        description: 'Acá iría la descripción del producto (por ahora sin posibilidad de "ver más" y "ver menos").',
        price: '750',
        pictureUrl: 'https://sardivar.websites.co.in/twenty-nineteen/img/defaults/product-default.png',
        initial: '0',
        stock: '12',
    },
    {
        id: '3',
        title: 'Producto',
        description: 'Acá iría la descripción del producto (por ahora sin posibilidad de "ver más" y "ver menos").',
        price: '2100',
        pictureUrl: 'https://sardivar.websites.co.in/twenty-nineteen/img/defaults/product-default.png',
        initial: '0',
        stock: '16',
    },
    {
        id: '4',
        title: 'Producto',
        description: 'Acá iría la descripción del producto (por ahora sin posibilidad de "ver más" y "ver menos").',
        price: '1650',
        pictureUrl: 'https://sardivar.websites.co.in/twenty-nineteen/img/defaults/product-default.png',
        initial: '0',
        stock: '3',
    }
];
  
function ItemList () {

    const [items, setItems] = useState([]);
    
    useEffect(
        () => {
        setTimeout(async () => {
            setItems(productos);
        }, 2000);
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
                    );
            })};
        </>
    );
}

export default ItemList;