import React from 'react';
import './App.css';
import Shop from './Component/Shop/Shop.js';
import Header from './Component/Header/Header.js';
import Review from './Component/Review/Review.js';
import Inventory from './Component/Inventory/Inventory.js';
import NotFound from './Component/NotFound/NotFound.js';
import LogIn from './Component/LogIn/LogIn';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import Shipment from './Component/Shipment/Shipment';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // Outlet
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [userLogin, setUserLogin] = useState({});
  console.log(userLogin)
  return (
    <userContext.Provider value={[userLogin, setUserLogin]} >
      <h4>Email:{userLogin.email}</h4>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/order-review' element={<Review />} />
          <Route path='/product/:ProductKey' element={<ProductDetails />} />
          <Route path='/*' element={<PrivateRoute />}>
            <Route path='shipment' element={<Shipment />} />
            <Route path='manage-inventory' element={<Inventory />} />
          </Route>
          <Route path='/login' element={<LogIn />} />
          <Route exact path='/' element={<Shop />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router >
    </userContext.Provider >
  );
}

export default App;
