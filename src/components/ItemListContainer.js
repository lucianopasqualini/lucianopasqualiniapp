import React from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemListContainer() {
  return (
    <div className="my-5 row justify-content-center">
        <h1 className="text-center my-3">E-commerce con reactjs</h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;