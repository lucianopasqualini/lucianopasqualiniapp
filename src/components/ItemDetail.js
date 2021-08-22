import React, {useState} from 'react'
import './components.css';
import Counter from './Counter'
import {Link} from 'react-router-dom'

function ItemDetail({id, title, description, price, pictureUrl, stock, initial}) {

    const [quantityToAdd, setQuantityToAdd] = useState(0);

    const onAdd = (i) => {
        setQuantityToAdd(i)
    }

    return (
        <div className="col-8 offset-2 mt-3">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h5 className="card-title text-start itemTitle my-4">{title}</h5>
                        <p className="card-text text-start itemDescription my-4">{description}</p>
                        <p className="card-text text-start itemPrice my-4">Precio: ${price}</p>
                        <p className="card-text text-start itemStock my-3">Stock disponible: {stock}</p>
                        <div className="row align-items-center mt-5">
                            {quantityToAdd > 0 ? (
                                <Link to="/cart">
                                    <button className="btn btn-primary col-5 itemButton">Finalizar compra</button>
                                </Link>
                                ) : (
                                <Counter stock={stock} initial={initial} onAdd={onAdd} />
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <img alt="" src={pictureUrl} width="100%"/>
                    </div>
                </div>
        </div>
    );
}

export default ItemDetail;