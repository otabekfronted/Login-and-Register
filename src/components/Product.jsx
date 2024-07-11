import { Link } from "react-router-dom";

function Product({ product }) {
    // console.log(product);
    return (
        <Link
            to={`/singleProduct/${product.id}`}
            className="card bg-base-100 w-96 m-auto shadow-xl"
        >
            <figure>
                <img src={product.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">{product.price}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </Link>
    );
}

export default Product;
