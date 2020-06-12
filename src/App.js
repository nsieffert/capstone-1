import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import inventoryItems from "./inventoryItems";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [items, setItems] = useState(inventoryItems);
  const [cartProducts, setCartProducts] = useState([]);

  // search function goes with function page/product list page
  function searchCategories(input) {
    const newCategories = items.filter((p) => p.category === input);
    setItems(newCategories);
  }
  //Navigation area
  return (
    <div>
      <Header />

      <Router>
        <Navbar />
        <h1 className="OurItems">Knives and Leather Works</h1>
        <p className="input">Click Refresh to clear Search</p>;
        <Filter
          className="input"
          searchCategories={searchCategories.bind(props)}
        />
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
          <About />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
