import { React, useState } from 'react';
import "./components.css";

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));
    return (
        <div className="row col-12 offset-1 align-items-center">
            <div className="itemSelectorBar row align-content-center col-4">
                <button className="col-3 text-center p-0" onClick={() => {if (count > 0) {setCount(count - 1)}}}>-</button>
                <p className="col-6 text-center">{count}</p>
                <button className="col-3 text-center p-0" onClick={() => {if (count < stock) {setCount(count + 1)}}}>+</button>
            </div>
            <button className="btn btn-primary col-5 offset-1 itemButton col-5" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;