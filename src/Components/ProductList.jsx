import React from "react";

function ProductList(props) {
  function reduceInventory(index) {
    const newInvArray = [...props.items];
    newInvArray[index].invQuant -= 1;
  }
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div className="flex">
            <div className="card">
              <div className="top">
                <h2 className="name">{item.name}</h2>
                <img className="circleImg" src={item.image} alt="Avatar" />
              </div>
              <div className="bottom">
                <div className="info">${item.price}</div>
                <div className="info">{item.desc}</div>
                <div className="info">{item.mfg}</div>
                <div className="info">search by: {item.category}</div>
                <div className="info">Quantity Available:{item.invQuant}</div>
              </div>
            </div>
            <button
              className="addToCart"
              onClick={() => {
                props.setCartProducts(
                  props.cartProducts.concat(props.items[index])
                );
                reduceInventory(index);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
