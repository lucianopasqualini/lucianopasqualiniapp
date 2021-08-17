import React, { useState } from 'react';
import './components.css';

function ItemDetail({id, title, description, price, pictureUrl, stock, initial}) {

    const [count, setCount] = useState(parseInt(initial));

    return (
        <div className="col-8 offset-2">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h5 className="card-title text-start itemTitle my-4">{title}</h5>
                        <p className="card-text text-start itemDescription my-4">{description}</p>
                        <p className="card-text text-start itemPrice my-4">Precio: ${price}</p>
                        <p className="card-text text-start itemStock my-3">Stock disponible: {stock}</p>
                        <div className="row align-items-center mt-5">
                            <div className="col-4 offset-1 align-items-center">
                                <div className="itemSelectorBar row align-content-center">
                                    <button className="col-3 text-center p-0" onClick={() => {if (count > 0) {setCount(count - 1)}}}>-</button>
                                    <p className="col-6 text-center">{count}</p>
                                    <button className="col-3 text-center p-0" onClick={() => {if (count < stock) {setCount(count + 1)}}}>+</button>
                                </div>
                            </div>
                            <button className="btn btn-primary col-5 offset-1 itemButton">Agregar al carrito</button>
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