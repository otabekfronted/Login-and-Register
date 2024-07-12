import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { useGlobalContext } from "../hooks/useGlobalContext";

function TableItem({ prod }) {
    const [amount, setAmount] = useState();
    const { incrementAmount, decrementAmount } = useGlobalContext();

    return (
        <tr key={prod.id}>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={prod.thumbnail} alt={prod.title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{prod.title}</div>
                        <div className="text-sm opacity-50">{prod.brand}</div>
                    </div>
                </div>
            </td>
            <td>
                <span>
                    <p>{prod.price}</p>
                </span>
                <br />
                <span className="badge badge-accent badge-sm">
                    Discount: {prod.discountPercentage}%
                </span>
            </td>
            <td className="flex items-center gap-3">
                <button
                    onClick={() => incrementAmount(prod.id)}
                    className="btn btn-primary btn-sm"
                >
                    +
                </button>
                <p>{prod.amount}</p>
                <button
                    disabled={prod.amount == 0 && true}
                    onClick={() => decrementAmount(prod.id)}
                    className="btn btn-primary btn-sm"
                >
                    -
                </button>
            </td>
            <th>
                <button className="btn btn-warning btn-sm">
                    <FaTrashAlt className="w-5 h-5" />
                </button>
            </th>
        </tr>
    );
}

export default TableItem;
