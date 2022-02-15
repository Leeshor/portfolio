import './App.css';
import React, { useEffect } from 'react';
import "./components/FontawesomeIcons";
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import ChatApp from './components/ChatApp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';
import LandingPage from './components/LandingPage';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
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
  });

  return () => {
     unsubscribe();
  };

  }, []);


  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/chat-app">
       <ChatApp/>
       </Route>
       <Route path="/ecommerce/payment">
       <Payment/>
       </Route>
       <Route path="/ecommerce/checkout">
        <Header/>
        <Checkout/>
       </Route>
       <Route path="/ecommerce/login">
        <Login/>
       </Route>
       <Route path="/ecommerce">
       <Header/>
       <Home/>
       </Route>
       <Route path="/">
       <LandingPage/>
       </Route>
      </Switch>
      
    </div>
    </Router>
  );

}

export default App;