import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import './components.css';
import NavBar from './NavBar';
import {getFirestore} from '../firebase/index'


function GenderList() {
    const {genero} = useParams();

    const [items, setItems] = useState([]);
    
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = db.collection("productos");
        
        const itemsByGender = itemsCollection.where("generoName", "==", genero);

        itemsByGender
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No items");
                }
                setItems(querySnapshot.docs.map(document => ({id: document.id, ...document.data()})))
            })
            .catch((error) => console.log("Error"))
            .finally(() => setLoading(false));
        }, [genero]); 

    return(
            <div className="App container-fluid bg-light">
                <NavBar />
                {loading ? ( <div className="bg-white loading col-12"><h1>Loading...</h1></div> ) : (
                <div className="bg-white py-4">
                    <h1 className="text-center my-2 titulo">Productos para género {genero}</h1>
                    <div>
                        <div className="py-2 row justify-content-center bg-white">
                            <> 
                            {items.map(producto => {
                                return (
                                    <Item key={producto.id} producto={producto}/>
                                );
                            })};
                            </>
                        </div>
                    </div>
                </div>)}
            </div>
    );
}

export default GenderList; 