import { useState } from "react";

// firbase
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// GlobalContext
import { useGlobalContext } from "./useGlobalContext";

// toast
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useGlobalContext();

    const signIn = async (email, password) => {
        setIsPending(true);
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = result.user;
            dispatch({ type: "LOG_IN", payload: user });
            toast.success(`Welcome, ${user.displayName}`);
            setIsPending(false);
        } catch (error) {
            // const errorMessage = error.message;
            toast.error(`Email or Password is not correct`);
            setIsPending(false);
        }
    };

    return { isPending, signIn };
};
