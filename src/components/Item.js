import React from 'react';
import './components.css';
import { Link, useHistory } from 'react-router-dom' 

function Item({producto}) {

    const history = useHistory();
    const goToDetails = () => history.push(`/itemdetail/${producto.id}`);

    return (
        <div className="card col-3 offset-1 m-2">
            <div className="card-body">
                <div className="row mb-3 align-items-center">
                    <div className="col-6">
                        <h5 className="card-title text-start itemTitle my-2">{producto.title}</h5>
                        <p className="card-text text-start itemPrice my-3">Precio: ${producto.price}</p>
                        <p className="card-text text-start itemStock">Stock disponible: {producto.stock}</p>
                        <button className="btn btn-primary col-10 itemButton mt-4 ml-0" onClick={goToDetails}><Link to={'/itemdetailcontainer'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Ver detalles</Link></button>
                    </div>
                    <div className="col-6">
                        <img alt="" src={producto.pictureUrl} width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;