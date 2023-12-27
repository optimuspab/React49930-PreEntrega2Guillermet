import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/ItemCount/ItemCount'

function App() {

  return (
    <div id="app">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido a Trendy Tech!'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
  );
}

export default App
