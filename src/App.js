import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetaildContainer from './components/ItemDetaildContainer/ItemDetaildContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bulma/css/bulma.css";

function App() {
  return (

    <div className='has-text-centered'>
        <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetaildContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          
          </Routes>
          </BrowserRouter>

       
      
    </div>
  );
}

export default App;
