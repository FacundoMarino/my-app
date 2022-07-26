import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <>   

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
          <Route path='/:categoryId' element={<ItemListContainer />} />
          <Route path='/:categoryId' element={<ItemListContainer />} />

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
