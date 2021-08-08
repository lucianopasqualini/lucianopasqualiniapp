import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnitSelectorF from './components/UnitSelectorF';

const productos = [
  {
    initial: '1',
    stock: '8',
  },
  {
    initial: '1',
    stock: '30',
  },
  {
    initial: '1',
    stock: '10',
  },
  {
    initial: '1',
    stock: '4',
  },
  {
    initial: '1',
    stock: '2',
  }
];

function renderProductos(productos) {
  return productos.map(producto => {
    const { stock, initial } = producto;
    return (
      <ItemListContainer>
        <UnitSelectorF
          stock={stock}
          initial={initial}/>
      </ItemListContainer>
    );
  });
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="my-5 row justify-content-center">
        {renderProductos(productos)}
      </div>
    </div>
  );
}

export default App;
