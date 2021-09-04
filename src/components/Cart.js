import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components.css";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import NavBar from "./NavBar"
import {getFirestore} from '../firebase/index'
import NumberFormat from 'react-number-format'

const Cart = () => {
  const { items, cartSize, clear, removeItem } = useContext(CartContext);
  console.log("items", items);
  console.log("cartsize", cartSize(items));
  const history = useHistory();
  const saveHistory = (id) => history.push(`/thankyou/${id}`);

  const [total, setTotal] = useState(0);
  useEffect(() => {
      if (items.length > 0){
          let currentTotal = 0;
          items.forEach(({producto, quantity}) => {
              currentTotal += producto.price * quantity;
          });
          setTotal(currentTotal);
        } else {
            setTotal(0);
        }
    }, [items]);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const handleInputChange = (event) => {
        const target = event.target;
        console.log(target);
        const value = target.type === 'checkbox' ? target.checked : target.value;
        if (target.name === "username"){
            setName(value);
        } if (target.name === "useremail"){
            setEmail(value);
        } if (target.name === "userphone") {
            setPhone(value);
        }
    }

    const handleFinishPurchase = (event) => {
        event.preventDefault();

        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: items.map(({producto, quantity}) => ({
                producto: {
                    id: producto.id,
                    title: producto.title,
                    price: producto.price,
                },
                quantity: quantity,
            })),
            total: total,
        }
        console.log(newOrder);
        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();
        orders
            .add(newOrder)
            .then((response) => {
                console.log(response);
                items.forEach(({producto, quantity}) => {
                    const docRef = db.collection('productos').doc(producto.id)
                    batch.update(docRef, {stock: producto.stock - quantity})
                });
                batch.commit();
                saveHistory(response.id)
            })
            .then(clear()) 
            .catch((error) => console.log(error));
    }

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
                            Total:{" "}<NumberFormat value={total} displayType={"text"} thousandSeparator={true} prefix={"$"}/>
                        </div>
                    </div>

                    <form action="index" method="POST" className="m-auto mt-3 col-6 offset-3">
                        <div className="formulario">Datos para confirmar la compra:</div>
                        <div className="form-group text-left m-3">
                            <input type="text" className="form-control" name="username" placeholder="Ingrese su nombre completo*" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group text-left m-3">
                            <input type="mail" className="form-control" name="useremail" placeholder="Ingrese su email*" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group text-left m-3">
                            <input type="phone" className="form-control" name="userphone" placeholder="Ingrese su teléfono*" onChange={handleInputChange}/>
                        </div>
                        <div>
                            * Completar todos los campos para finalizar la compra
                        </div>
                        <div className="col-10 offset-1 row justify-content-center py-4">
                            <div className="col-4">
                                <Link className="btn btn-outline-danger cart-button col-12" to="/">Volver</Link>
                            </div>
                            <div className="col-4 offset-1">
                                {cartSize() > 0 && name != null && email != null && phone != null ? (
                                    <Link type="submit" className="btn btn-success cart-button col-12" onClick={handleFinishPurchase} to="/thankyou">Comprar</Link>
                                ):(
                                    <Link className="btn btn-outline-secondary cart-button col-12" to="/cart/#">Comprar</Link>
                                )}
                            </div>
                        </div>
                    </form>

                    
                </div>

                

            </div>
        </div>
    );
};

export default Cart;