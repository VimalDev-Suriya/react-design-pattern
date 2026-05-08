import { useState } from "react"
import { useEvents } from "../../hooks/useEvents";

const CartBadge = () => {
    const [cartItems, setCartItems] = useState([]);

    // * Here we are actually subscribing to the event
    useEvents("cart:add", (data) => {
        setCartItems(prev => [...prev, data]);
    })

    return <div>
        <h2>Cart Items {cartItems.length === 0 ? '' : cartItems.length}</h2>
        {
            cartItems.length ? <ul>
                {cartItems.map((item) => {
                    return <li key={item}>{item.Name}</li>
                })}</ul> : null
        }
    </div>
}

export default CartBadge;