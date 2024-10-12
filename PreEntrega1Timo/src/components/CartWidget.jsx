// import React from "react";
// import cart from "../assets/cartjpg.jpeg";

// const CartWidget = ({ cartItems }) => {
//   return (
//     <>
//       <img
//         src={cart}
//         alt="cart"
//         style={{ width: "30px", height: "30px", cursor: "pointer" }}
//       />
//       <span></span>
//     </>
//   );
// };

// export default CartWidget;


// import React from "react";
// import cart from "../assets/cartjpg.jpeg";
// import { useCart } from "./CartContext";

// const CartWidget = () => {
//   const { cartItems } = useCart();
  
//   const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <>
//       <img
//         src={cart}
//         alt="cart"
//         style={{ width: "30px", height: "30px", cursor: "pointer" }}
//       />
//       {itemCount > 0 && <span>{itemCount}</span>}
//     </>
//   );
// };

// export default CartWidget;


import React from "react";
import cart from "../assets/cartjpg.jpeg";

const CartWidget = ({ itemCount }) => {
  return (
    <>
      <img
        src={cart}
        alt="cart"
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
      />
      {itemCount > 0 && <span>{itemCount}</span>}
    </>
  );
};

export default CartWidget;