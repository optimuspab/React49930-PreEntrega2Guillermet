import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/ItemCount/ItemCount'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa Routes y Route

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Bienvenido a Trendy Tech!'} />} />
        <Route path="/categorias/:categoria" element={ <ItemListContainer greeting={'Bienvenido a Trendy Tech!'} /> }/>
        <Route path="/detalle/:id" element={<ItemDetailContainer />}  />
      </Routes>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
    </BrowserRouter>
  );
}

export default App;