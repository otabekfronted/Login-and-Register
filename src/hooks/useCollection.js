// firbase
import { db } from "../firebase/firebaseConfig";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

// react
import { useEffect, useState } from "react";

export const useCollection = (collectionName, orderName) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const q = query(collection(db, collectionName), orderBy(orderName));
        onSnapshot(q, (querySnapshot) => {
            const todos = [];
            querySnapshot.docs.forEach((doc) => {
                todos.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setData(todos);
        });
    }, [collectionName]);
    return { data };
};
