import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import NavBar from "./NavBar"
import { useParams } from 'react-router-dom';
import {getFirestore} from '../firebase/index';

function ItemDetailContainer() {
    
    const [items, setItem] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = db.collection("productos");
        const currentItem = itemsCollection.doc(id)

        currentItem
            .get()
            .then((document) => {
                if (!document.exists) {
                    console.log("No Item");
                    return
                }
                setItem({id: document.id, ...document.data()})
            })
            .catch((error) => console.log("Error"))
            .finally(() => setLoading(false));
        }, [id]);

    return (
        <div className="App container-fluid bg-light">
            <NavBar />
            {loading ? ( <div className="bg-white loading col-12"><h1>Loading...</h1></div> ) : (
            <div className="bg-white py-5">
                <ItemDetail key={items.id} producto={items}/>
            </div>)}
        </div>
    );
}

export default ItemDetailContainer;