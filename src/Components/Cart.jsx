import React from "react";

function Cart(props) {
  console.log(props.cartProducts);
  return (
    <div>
      {props.cartProducts.map((item, index) => {
        return (
          <div>
            <img src={item.img} alt="Avatar" />
            <h6>{item.name}</h6>
            <h6>{item.cartQuant}</h6>
            <h6>price {item.price}</h6>
          </div>
        );
      })}

      <div>
        <p>Your Total</p>
        <div>
          <span>items in cart : {props.cartProducts.length}</span>
          <br />
          <span>total price : {props.totalPrice}</span>
          <br />
          {props.cartProducts.map((item) => (
            <h6>
              {item.name} - {item.price}
            </h6>
          ))}
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
