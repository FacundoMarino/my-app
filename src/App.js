import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart'

function App() {

  return (
    <>   

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/:detailId' element={<ItemDetailContainer />} />
          <Route path='/jrpg/:categoryId' element={<ItemListContainer />} />
          <Route path='/arpg/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />



        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
