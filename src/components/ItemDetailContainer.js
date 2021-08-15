import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "./productos.json"

function render(item) {
    return(
        <ItemDetail
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
            stock={item.stock}
            initial={item.initial}/>
        )
}

function ItemDetailContainer() {
    
    const [items, setItem] = useState({});

    const getItem = () => {
        setItem({
            id: '1',
            title: 'GREEN OLIVE & LAVENDER SCALP OIL',
            description: 'Lavender Essential Oil: Soothes itchy scalp, conditions hair, and supports natural blood circulation and healthy hair growth. / Olive Seed Oil: Loaded with antioxidants and vitamins; protects and fortifies hair./ Vitamin E: Nourishes and restores dry hair and scalp. / Green Olive Seed Oil, Sweet Almond Seed Oil, Natural Grand Soleil Oil, Lavender Flower Extract and Vitamin E.',
            price: '3000',
            pictureUrl: 'https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg',
            initial: '0',
            stock: '30',
        })
    };

    useEffect(() => {
        setTimeout( () => {
            getItem();
            render(items)
        }, 2000)
    }, []);

    return (
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
    );
}

export default ItemDetailContainer;