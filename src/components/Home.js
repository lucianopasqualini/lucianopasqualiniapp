import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App container-fluid bg-light">
        <NavBar />
        <ItemListContainer />
    </div>
  )
}

export default Home;