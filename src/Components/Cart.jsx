import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function Cart(props) {
  const totalPrice = props.cartProducts.reduce(
    (acc, curr) => acc + parseInt(curr.price),
    0
  );

  const stripePromise = loadStripe(
    "pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG"
  );
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
