// immer
import { produce } from "immer";

import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const stateFromLocalStorage = () => {
    return (
        JSON.parse(localStorage.getItem("my-store")) || {
            user: null,
            isAuthReady: false,
            products: [],
            totalProducts: 0,
            totalPrice: 0,
        }
    );
};

export const GlobalContext = createContext();

const changeState = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOG_IN":
            return { ...state, user: payload };
        case "LOG_OUT":
            return { ...state, user: null };
        case "IS_AUTH_READY":
            return { ...state, isAuthReady: true };
        case "ADD_PRODUCT":
            return { ...state, products: payload };
        case "TOTAL_PRODUCT_COUNT":
            return { ...state, totalProducts: payload };
        case "TOTAL_PRODUCT_PRICE":
            return { ...state, totalPrice: payload };

        default:
            return state;
    }
};

export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, stateFromLocalStorage());

    // dispatch({ type: "LOG_IN", payload: {} });

    const addToCart = (product) => {
        if (!state.products.length) {
            dispatch({ type: "ADD_PRODUCT", payload: [product] });
        } else {
            state.products.map((prod) => {
                if (prod.id == product.id) {
                    const findProduct = state.products.find(
                        (prod) => prod.id == product.id
                    );
                    const updatedAmout =
                        (findProduct.amount =
                        findProduct.amount +=
                            product.amount);

                    const updatedAmouts = state.products.map((prod) => {
                        if (prod.id == updatedAmout.id) {
                            return { ...prod, amount: updatedAmout };
                        } else {
                            toast.success(
                                `${product.title} Successfully Add To Cart!`
                            );
                            return prod;
                        }
                    });

                    dispatch({
                        type: "ADD_PRODUCT",
                        payload: updatedAmouts,
                    });
                } else {
                    dispatch({
                        type: "ADD_PRODUCT",
                        payload: [...state.products, product],
                    });
                }
            });
        }
    };

    const incrementAmount = (id) => {
        function toggleTodo(state, id) {
            return produce(state, (draft) => {
                const product = draft.products.find((prod) => prod.id === id);
                product.amount = product.amount + 1;
            });
        }
        console.log(toggleTodo(state, id));
        const { products } = toggleTodo(state, id);
        dispatch({ type: "ADD_PRODUCT", payload: products });
    };

    const decrementAmount = (id) => {
        function toggleTodo(state, id) {
            return produce(state, (draft) => {
                const product = draft.products.find((prod) => prod.id === id);
                product.amount = product.amount - 1;
            });
        }
        console.log(toggleTodo(state, id));
        const { products } = toggleTodo(state, id);
        dispatch({ type: "ADD_PRODUCT", payload: products });
    };
    const money = (id) => {
        function toggleTodo(state, id) {
            return produce(state, (draft) => {
                const product = draft.products.find((prod) => prod.id === id);
                product.amount = product.amount - 1;
            });
        }
        console.log(toggleTodo(state, id));
        const { products } = toggleTodo(state, id);
        dispatch({ type: "TOTAL_PRODUCT_COUNT", payload: products });
    };

    useEffect(() => {
        let totalCount = 0;
        let totalPrice = 0;
        state.products.forEach((product) => {
            totalCount = totalCount += product.amount;
            totalPrice = totalPrice += product.amount * product.price;
        });

        dispatch({ type: "TOTAL_PRODUCT_COUNT", payload: totalCount });
        dispatch({ type: "TOTAL_PRODUCT_PRICE", payload: totalPrice });
    }, [state.products]);

    useEffect(() => {
        localStorage.setItem("my-store", JSON.stringify(state));
    }, [state]);

    return (
        <div>
            <GlobalContext.Provider
                value={{
                    ...state,
                    dispatch,
                    addToCart,
                    incrementAmount,
                    decrementAmount,
                    money,
                }}
            >
                {children}
            </GlobalContext.Provider>
        </div>
    );
}

export default GlobalContextProvider;
