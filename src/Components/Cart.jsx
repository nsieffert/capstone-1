import React from "react";

function Cart(props) {
  const totalPrice = props.cartProducts.reduce(
    (acc, curr) => acc + parseInt(curr.price),
    0
  );

  return (
    <div>
      {props.cartProducts.map((item, index) => {
        return (
          <div>
            <h4 className="cartProducts">
              <img className="circleImg" src={item.image} alt="Avatar" />
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
      <button className="checkout">Checkout</button>
    </div>
  );
}
export default Cart;
