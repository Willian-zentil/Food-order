import React from 'react'
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import CartContext from './Context/cart-context';

function App() {

  return (
    <CartContext.Provider>
      <Cart />
      {isCartOpen && <Header />}
      <Meals/>
    </CartContext.Provider>
  );
}

export default App;
