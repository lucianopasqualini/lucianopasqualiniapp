import React, {useState, useContext} from 'react'
import './components.css';
import Counter from './Counter'
import {Link} from 'react-router-dom'
import { CartContext } from "../context/cartContext";

function ItemDetail({producto}) {

    const [quantityToAdd, setQuantityToAdd] = useState(0);

    const { addItem } = useContext(CartContext);

    const onAdd = (i) => {
        setQuantityToAdd(i)
        addItem(producto, i)
    }

    return (
        <div className="col-8 offset-2 mt-3">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h5 className="card-title text-start itemTitle my-4">{producto.title}</h5>
                        <p className="card-text text-start itemDescription my-4">{producto.description}</p>
                        <p className="card-text text-start itemPrice my-4">Precio: ${producto.price}</p>
                        <p className="card-text text-start itemStock my-3">Stock disponible: {producto.stock}</p>
                        <div className="row align-items-center mt-5">
                            {quantityToAdd > 0 ? (
                                <Link to="/cart">
                                    <button className="btn btn-primary col-5 itemButton">Agregar al carrito</button>
                                </Link>
                                ) : (
                                <Counter stock={producto.stock} initial={producto.initial} onAdd={onAdd} />
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <img alt="" src={producto.pictureUrl} width="100%"/>
                    </div>
                </div>
        </div>
    );
}

export default ItemDetail;