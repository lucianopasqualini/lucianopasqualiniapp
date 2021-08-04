import React from 'react';
import './components.css';

function ItemListContainer() {
    return <div class="card col-4 offset-1 m-2">
            <div class="card-body">
                <h5 class="card-title">Producto</h5>
                <p class="card-text">Descripción</p>
                <a class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
}

export default ItemListContainer;