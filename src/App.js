import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Collections from './components/Collections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
           <Route path='/main' element={<MainPage/>}/>
           <Route path='/catalog' element={<Catalog/>}/>
           <Route path='/delivery' element={<Delivery/>}/>
           <Route path='/collections' element={<Collections/>}/>
           <Route index element={<MainPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
