// customfetch
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { useState } from "react";

// loader
export const loader = async ({ params }) => {
    const request = await customFetch(`${params.id}`);
    const product = request.data;
    return { product };
};

// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

function SingleProduct() {
    const { addToCart } = useGlobalContext();
    const { product } = useLoaderData();
    // console.log(product);

    const [amount, setAmount] = useState(0);

    const handleAddToCart = () => {
        const newProduct = {
            ...product,
            amount,
        };
        addToCart(newProduct);
    };

    return (
        <div className="align-elemnts mt-10">
            <h2>{product.title}</h2>
            <div className="flex items-center gap-5 mt-4">
                <button
                    onClick={() => setAmount((prev) => (prev += 1))}
                    className="btn btn-primary"
                >
                    +
                </button>
                <p className="text-2xl">{amount}</p>
                <button
                    disabled={amount == 0 && true}
                    onClick={() => setAmount((prev) => (prev -= 1))}
                    className="btn btn-primary"
                >
                    -
                </button>
                <button onClick={handleAddToCart} className="btn btn-secondary">
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProduct;
