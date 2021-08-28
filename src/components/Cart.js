import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import NavBar from "./NavBar"

/* const sumaTotal = () => {
  const { items } = useContext(CartContext);
  items.reduce((acc, cur) => acc + cur.price);
  console.log(sumaTotal());
}; */

const Cart = () => {
  const { items, cartSize, clear, removeItem } = useContext(CartContext);
  console.log("items", items);
  console.log("cartsize", cartSize(items));
    return (
        <div>
            <div>
                <div className="App container-fluid bg-light">
                    <NavBar />
                </div>
                <div className="container py-5">
                    <h5 className="titulo">Resumen de tu compra:</h5>
                    <div className="col-10 offset-1 py-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="col-8 cart-titles">Producto</th>
                                    <th className="text-center cart-titles">Cantidad</th>
                                    <th className="text-center cart-titles">Subtotal</th>
                                    <th className="text-center cart-titles">
                                        <a className="btn btn-outline-danger" onClick={() => clear()}>Vaciar</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="py-3">
                                {cartSize(items) > 0 ? (
                                    items.map((item, i) => (
                                        <tr key={i}>
                                            <td>
                                                <div className="row align-items-center">
                                                    <img src={item.producto.pictureUrl} alt="Producto" width="60" className="col-2"/>
                                                    <h5 className="col-10 cart-item my-0">{item.producto.title}</h5>
                                                </div>
                                            </td>
                                            <td className="text-center cart-item">
                                                {item.quantity}
                                            </td>
                                            <td className="text-center cart-item">
                                                ${item.producto.price * item.quantity}
                                            </td>
                                            <td className="text-center cart-item">
                                                <button className="btn btn-white">
                                                    <img onClick={() => removeItem(item.producto.id)} width="30" src="https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png"/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <>
                                        <div className="pt-3">
                                            <Link to="/" style={{ textDecoration: "none", color: "rgb(4, 4, 148)", fontSize: "18px", verticalAlign: "middle"}}>No hay productos, volver a inicio</Link> 
                                        </div>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-10 offset-1 text-end cart-total">
                        <div className="col-2 offset-9">
                            Total:{" "}<span>${items.reduce((acc, cur) => cur.producto.price * cur.quantity + acc,0)}</span>
                        </div>
                    </div>
                    <div className="col-10 offset-1 row justify-content-center py-4">
                        <div className="col-2">
                            <Link className="btn btn-outline-secondary cart-button col-12" to="/">Volver</Link>
                        </div>
                        <div className="col-2 offset-1">
                            <button className="btn btn-success cart-button col-12" href="#">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;