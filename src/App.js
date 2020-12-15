import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders.js"
import {auth} from "./Firebase";
import './App.css';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HiZGVLq8z5x1xnGKBtHm8BnWKLB6MVtJvWbMPquQffccmQ7GGYCYu2MET9hipux5ra4hBhNAvNgrAuyFmX29ooc00SpyRlgPD");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })

  }, [])


  return (
    <Router>
    <div className="App">
   <Switch>
     <Route path="/orders">
       <Header />
       <Orders />
     </Route>
   <Route path='/login'>
      <Login />
     </Route>
     <Route path="/checkout">
       <Header />
       <Checkout />
       
     </Route>
     <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
        </Route>
      <Route path='/'>
       <Header />
       <Home />
       
       </Route>
      
    </Switch>
    </div>
    </Router>
  );
}

export default App;
