import React from "react";

function ProductList(props) {
  function reduceInventory(index) {
    const newInvArray = [...props.items];
    newInvArray[index].invQuant -= 1;
    console.log(newInvArray);
  }
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <>
            <table className="productTable">
              <tr>
                <img className="circleImg" src={item.image} alt="Avatar" />
                <td className="name">{item.name}</td>
                <td className="price">{item.price}</td>
                <td className="desc">{item.desc}</td>
                <td className="mfg">{item.mfg}</td>
                <td className="cat">{item.category}</td>
                <td className="qty">{item.invQuant}</td>
              </tr>
            </table>
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
          </>
        );
      })}
    </div>
  );
}

export default ProductList;
