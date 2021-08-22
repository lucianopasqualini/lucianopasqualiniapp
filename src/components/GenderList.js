import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import ListaProductos from './productos.json'
import './components.css';
import NavBar from './NavBar';


function GenderList() {
    const {genero} = useParams();

    const [items, setItems] = useState([]);
    const getItems = (ab) => {
        const selected = ListaProductos.filter( (producto) => producto.genero === ab)
        setItems(selected);
    }

    useEffect( () => {
            getItems(genero);
        }
    )

    return(
            <div className="App container-fluid bg-light">
                <NavBar />
                <div className="bg-white py-4">
                    <h1 className="text-center my-2 titulo">Productos para género {genero}</h1>
                    <div>
                        <div className="py-2 row justify-content-center bg-white">
                            <> 
                            {items.map(producto => {
                                const { id, title, description, price, pictureUrl, stock, initial, genero } = producto;
                                return (
                                <Item
                                    key={id}
                                    id={id}
                                    title={title}
                                    description={description}
                                    price={price}
                                    pictureUrl={pictureUrl}
                                    stock={stock}
                                    initial={initial}
                                    genero={genero}/>
                                    );
                            })};
                            </>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default GenderList; 