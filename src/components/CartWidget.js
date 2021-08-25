import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Button } from 'react-bootstrap';

function CartWidget() {
    
    const { cartSize } = useContext(CartContext);

    return (
        <Link to="/cart">
            <Button className="row cartWidget text-decoration-none justify-items-center" variant="link">
                <img src="https://image.flaticon.com/icons/png/512/126/126083.png" alt="carrito"/>
                <span className="nav-item text-center">{cartSize()}</span>
            </Button>
        </Link>
    );
}
export default CartWidget;