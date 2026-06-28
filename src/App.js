import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Userlayout from './layouts/Userlayout';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import ProdInfo from './pages/Prodinfo';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Userlayout/>}>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/prodinfo/:id' element={<ProdInfo/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
