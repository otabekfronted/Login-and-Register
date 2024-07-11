// components
import ProductsList from "../components/ProductsList";

// customfetch
import { customFetch } from "../utils";

// loader
export const loader = async () => {
    const request = await customFetch();
    const products = request.data;
    return { products };
};

function Home() {
    return (
        <div className="align-elements mt-10">
            <ProductsList />;
        </div>
    );
}

export default Home;
