import React from 'react';
import './components.css';

function Item({id, title, description, price, pictureUrl, stock, initial}) {

    return (
        <div className="card col-3 offset-1 m-2">
            <div className="card-body">
                <div className="row mb-3 align-items-center">
                    <div className="col-6">
                        <h5 className="card-title text-start itemTitle my-2">{title}</h5>
                        <p className="card-text text-start itemPrice my-3">Precio: ${price}</p>
                        <p className="card-text text-start itemStock">Stock disponible: {stock}</p>
                        <button className="btn btn-primary col-10 itemButton mt-4 ml-0">Ver detalles</button>
                    </div>
                    <div className="col-6">
                        <img alt="" src={pictureUrl} width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;