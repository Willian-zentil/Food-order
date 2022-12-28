import React, { useState } from 'react'
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import CartProvider from './Context/CartProvider';

function App() {

  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const hidenCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hidenCartHandler} />}
      <Header onShowCArt={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
