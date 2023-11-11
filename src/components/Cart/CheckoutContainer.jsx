import { useContext } from "react";
import Checkout from "./Checkout";
import { Context } from "../../context/CartContext";

export default function CheckoutContainer() {
    const cartContext = useContext(Context)

    return (
        <Checkout cart={cartContext.cart} />
    )
}
