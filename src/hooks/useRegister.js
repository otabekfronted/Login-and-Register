// firbase imports
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// react import
import { useState } from "react";

export const useRegister = () => {
    const [isPending, setIsPending] = useState(false);

    const registerWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            setIsPending(true);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setIsPending(false);
        } catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        }
    };

    return { registerWithGoogle, isPending };
};
