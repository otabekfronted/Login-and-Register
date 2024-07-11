import { useGlobalContext } from "../hooks/useGlobalContext";

// components
import TableItem from "../components/TableItem";

// icons

function Cart() {
    const { products, totalProducts, addToCart } = useGlobalContext();
    return (
        <div className="align-elemnts mt-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Change Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {products.map((prod) => {
                            return <TableItem key={prod.id} prod={prod} />;
                        })}
                        {/* row 2 */}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Change Amount</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default Cart;
