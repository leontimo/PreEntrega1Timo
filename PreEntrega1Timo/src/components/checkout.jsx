import React from "react";
import { useCart } from "./CartContext";

const Checkout = () => {
    const { cartItems, getCartTotal } = useCart()

    return (

        <div>
            <h2>Checkout</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price * item.quantity}</p>
                </div>
            ))}
            <h3>Total: ${getCartTotal()}</h3>
            <p>Aqui puedes agregar el formulario de pago en el futuro.</p>
        </div>
    )
}

export default Checkout;