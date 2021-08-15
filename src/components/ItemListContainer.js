import React from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './ItemDetailContainer';

function ItemListContainer() {
  return (
    <div>
      <div className="bg-white py-5">
        <h1 className="text-center my-2 titulo">E-commerce con reactjs</h1>
        <ItemDetailContainer/>
      </div>
      <div className="py-5 row justify-content-center">     
        <ItemList />
      </div>
    </div>
  );
}

export default ItemListContainer;