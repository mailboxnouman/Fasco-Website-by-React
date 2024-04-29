import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import Products from './Pages/Products/Products';
import Pages from './Pages/Pages/Pages';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import './App.css';
import ForgetPass from './Pages/ForgetPass/ForgetPass';
import Otp from './Pages/ForgetPass/Otp';
import NewPass from './Pages/ForgetPass/NewPass';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pages" element={<Pages/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forget" element={<ForgetPass/>} />
          <Route path="/otp" element={<Otp/>} />
          <Route path="/newpass" element={<NewPass/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
