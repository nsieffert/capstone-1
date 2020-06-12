import React from "react";
import "../cart.css";

// cart reduce to total up prices.
function Cart(props) {
  const totalPrice = props.cartProducts.reduce(
    (acc, curr) => acc + parseInt(curr.price),
    0
  );

  //map items to shopping cart
  return (
    <div>
      {props.cartProducts.map((item, index) => {
        return (
          <div>
            <h4 className="cartProducts">
              <img className="shopImg" src={item.image} alt="Avatar" />
              {item.name} {item.price}
            </h4>
          </div>
        );
      })}
      <div>
        <h4 className="checkoutDetails">
          items in cart : {props.cartProducts.length}
        </h4>
        <br />
        <h4 className="checkoutDetails">Your total is $ {totalPrice}</h4>
        <br />
      </div>
      <button
        className="checkout"
        onClick={() => window.alert("Thank you for supporting US Veterans!")}
      >
        Pay Now
      </button>
    </div>
  );
}
export default Cart;
