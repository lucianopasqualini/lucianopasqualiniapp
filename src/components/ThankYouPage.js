import React from 'react';
import './components.css';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

function ThankYouPage() {

    const { id } = useParams();

    return (
        <div>
            <div className="App container-fluid bg-light">
                <NavBar />
            </div>
            <div className="bg-white thankYouPage col-12">
                <h5>Gracias por tu compra!</h5>
                <p>Tu número de pedido es: <span className="pedidoId">{id}</span></p>
            </div> 
        </div>
        
    );
}

export default ThankYouPage;