import React from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './components/store/CartContext';
import { UserProgressContextProvider } from './components/store/UserProgressContext';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Footer />
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}

export default App;