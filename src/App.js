import React, { useContext } from 'react';
import Header from "./components/Header"
import Cart from './pages/Cart'
import Photos from "./pages/Photos"
import { Switch, Route } from "react-router-dom"
import { Context } from './Context'




function App(props) {

  const context = useContext(Context)

  console.log('context', context)
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
