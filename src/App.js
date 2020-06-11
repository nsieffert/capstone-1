import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import inventoryItems from "./inventoryItems";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [items, setItems] = useState(inventoryItems);
  const [cartProducts, setCartProducts] = useState([]);

  function searchCategories(input) {
    const newCategories = items.filter((p) => p.category === input);
    setItems(newCategories);
  }

  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (
              <ProductList
                items={items}
                setItems={setItems}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                items={items}
                setItems={setItems}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            )}
          ></Route>
        </Switch>
      </Router>
      <h1 className="OurItems">Knives and Leather Works</h1>
      <h3 className="OurItems">Click Shop to shop our products!</h3>
      <p className="input">Click Refresh to clear Search</p>;
      <Filter searchCategories={searchCategories.bind(props)} />
    </div>
  );
}
export default App;
