import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import MapInventory from "./Components/MapInventory";
import inventoryItems from "./inventoryItems";

function createInventory(inventoryItems) {
  return (
    <MapInventory
      key={inventoryItems.sku}
      name={inventoryItems.name}
      image={inventoryItems.image}
      desc={inventoryItems.desc}
      price={inventoryItems.price}
      mfg={inventoryItems.mfg}
      category={inventoryItems.category}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <SearchBar />
      <h1 className="OurItems">Our Knives and Leather</h1>
      {inventoryItems.map(createInventory)}
    </div>
  );
}

export default App;
