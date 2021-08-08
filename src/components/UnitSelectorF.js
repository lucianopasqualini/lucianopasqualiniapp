import React, { useState } from 'react';
import './components.css';

function UnitSelectorF({stock, initial}) {

    const [count, setCount] = useState(parseInt(initial));

    return (
        <div className="align-items-center">
            <div className="itemSelectorBar row align-content-center">
                <button className="col-3 text-center p-0" onClick={() => {if (count > 0) {setCount(count - 1)}}}>-</button>
                <p className="col-6 text-center">{count}</p>
                <button className="col-3 text-center p-0" onClick={() => {if (count < stock) {setCount(count + 1)}}}>+</button>
            </div>
            <p className="col-12 stockAvailable">Stock disponible: {stock}</p>
        </div>
    );
}

export default UnitSelectorF;