import React from "react";
import cart from "../assets/cartjpg.jpeg";

const CartWidget = () => {
  return (
    <>
      <img
        src={cart}
        alt="cart"
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
      />
      <span>(5)</span>
    </>
  );
};

export default CartWidget;
