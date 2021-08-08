import React from 'react';
import './components.css';

function ItemListContainer(props) {
    return <div className="card col-3 offset-1 m-2">
            <div className="card-body">
                <h5 className="card-title">Producto</h5>
                <p className="card-text">Descripción</p>
                <div className="row align-items-center">
                    <div className="col-5 offset-1">
                        {props.children}
                    </div>
                    <button className="btn btn-primary col-4 offset-1">Agregar al carrito</button>
                </div>
            </div>
        </div>
}

export default ItemListContainer;