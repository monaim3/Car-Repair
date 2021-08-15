import React, { useState ,  useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';

import CarService from './components/Home/CarService/CarService';
import Login from './components/Home/Login/Login';

import { createContext } from 'react';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import OrderList from './components/Admin/OrderList/OrderList';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import Book from './components/User/Book/Book';
import BookingList from './components/User/BookingList/BookingList';
import Review from './components/User/Review/Review';

export const UserContext = createContext();
export const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('admin');
  window.location.reload();
}
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || {})
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList/>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
