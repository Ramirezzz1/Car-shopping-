import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState({});
  
//api call for products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }
/// api call for cart items
  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve())
  }
  //add to cart
  const handleAddToCart = async (productId, quanitity) => {
    const { cart } = await commerce.cart.add(productId, quanitity);

    setCart(cart);
  }
//buttons functionality
  const handleUpdateCartQty = async (productId, quanitity) => {
    const { cart } = await commerce.cart.update(productId, {quanitity});

    setCart(cart);
  }
/// remove from cart 
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId); 

    setCart(cart);
  }
  /// empty cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  console.log(cart);

  // console.log(products)

  return (
      <Router>
        <div>
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart 
              cart={cart} 
              handleUpdateCartQty = {handleAddToCart}
              handleRemoveFromCart = {handleRemoveFromCart}
              handleEmptyCart = {handleEmptyCart}
              />
            </Route>
          </Switch>

        </div>
      </Router>
  );
}

export default App;
