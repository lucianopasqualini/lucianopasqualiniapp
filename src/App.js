import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="my-5 row col-10 offset-1 justify-content-center">
        <ItemListContainer />
        <ItemListContainer />
        <ItemListContainer />
        <ItemListContainer />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
