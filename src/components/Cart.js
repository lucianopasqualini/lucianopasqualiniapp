import React from 'react';
import './components.css';
import NavBar from './NavBar';

function Cart() {
    return (
        <div className="App container-fluid bg-light">
            <NavBar />
            <div className="bg-white py-4">
                <h1 className="text-center my-2 titulo">Resumen de la compra</h1>
            </div>
        </div>
    );
}

export default Cart;