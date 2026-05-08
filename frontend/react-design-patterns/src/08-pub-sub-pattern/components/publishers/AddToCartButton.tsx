import { eventBus } from '../../lib/event-bus'
const products = [
    { id: 1, Name: "Product 1" },
    { id: 2, Name: "Product 2" },
    { id: 3, Name: "Product 3" },
    { id: 4, Name: "Product 4" },
    { id: 5, Name: "Product 5" },
]

const AddToCartButton = () => {
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * products.length)
        const selectedProduct = products[randomIndex];

        // * Name of the event should be like "<token>:<Action>"
        eventBus.publish("cart:add", {
            ...selectedProduct
        })
    }

    return <div>
        <h1>Publisher</h1>
        <button onClick={handleClick}>Add to Cart</button>
    </div>
}

export default AddToCartButton