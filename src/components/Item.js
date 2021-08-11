import React, { useState } from 'react';
import './components.css';

function Item({id, title, description, price, pictureUrl, stock, initial}) {

    const [count, setCount] = useState(parseInt(initial));

    return (
        <div className="card col-3 offset-1 m-2">
            <div className="card-body">
                <div className="row mb-3 align-items-center">
                    <div className="col-6">
                        <h5 className="card-title text-start itemTitle">{title}</h5>
                        <p className="card-text text-start itemDescription">{description}</p>
                        <p className="card-text text-start itemPrice">Precio: ${price}</p>
                    </div>
                    <div className="col-6">
                        <img alt="" src={pictureUrl} width="100%"/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-5 offset-1 align-items-center">
                        <div className="itemSelectorBar row align-content-center">
                            <button className="col-3 text-center p-0" onClick={() => {if (count > 0) {setCount(count - 1)}}}>-</button>
                            <p className="col-6 text-center">{count}</p>
                            <button className="col-3 text-center p-0" onClick={() => {if (count < stock) {setCount(count + 1)}}}>+</button>
                        </div>
                        <p className="col-12 itemStock">Stock disponible: {stock}</p>
                    </div>
                    <button className="btn btn-primary col-5 offset-1 itemButton">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Item;