import { React, useState, useEffect } from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import {getFirestore} from '../firebase/index'

function ItemList () {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = db.collection("productos");

        itemsCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No items");
                }
                setItems(querySnapshot.docs.map(document => ({id: document.id, ...document.data()})))
            })
            .catch((error) => console.log("Error"))
            .finally(() => setLoading(false));
    }, []); 

    return (
        <>
            {loading ? ( 
                <div className="bg-white loading col-12"><h1>Loading...</h1></div> 
            ) : (
                items.map(producto => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            )}
        </>
    );
}

export default ItemList;