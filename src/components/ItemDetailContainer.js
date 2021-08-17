import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import NavBar from "./NavBar"
import { useParams } from 'react-router-dom';

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

function ItemDetailContainer() {
    
    const [items, setItem] = useState({});

    const { id } = useParams();

    const getItem = (abc) => {
        const UnItem = productos.find( producto => producto.id === abc);
        setItem(UnItem)
        console.log(UnItem)
    };

    useEffect(() => {
        getItem(id);
    }, []);

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