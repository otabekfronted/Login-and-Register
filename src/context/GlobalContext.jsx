import { createContext, useReducer } from "react";

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
        default:
            return state;
    }
};

export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, {
        user: null,
        isAuthReady: false,
        products: [],
        totalProducts: 0,
        totalPrice: 0,
    });

    // dispatch({ type: "LOG_IN", payload: {} });

    return (
        <div>
            <GlobalContext.Provider value={{ ...state, dispatch }}>
                {children}
            </GlobalContext.Provider>
        </div>
    );
}

export default GlobalContextProvider;
