// custom hooks
import { useEffect } from "react";
import { FormInput } from "../components";
import { useCollection } from "../hooks/useCollection";

// rrd imports
import { Form, useActionData } from "react-router-dom";

// firbase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

// action
export const action = async ({ request }) => {
    let formData = await request.formData();

    let title = formData.get("title");
    return { title };
};

export function Todos() {
    const { data } = useCollection("todos");
    const dataTodo = useActionData();

    useEffect(() => {
        if (dataTodo) {
            const newTodo = {
                ...dataTodo,
                completed: true,
                createdAt: serverTimestamp,
            };

            addDoc(collection(db, "todos"), newTodo)
                .then(() => {
                    toast.success("New Todo Added");
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    }, [dataTodo]);

    return (
        <div className="align-elemnts mt-10">
            {data &&
                data.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h3 className="text-3xl font-bold">{todo.title}</h3>
                        </div>
                    );
                })}
            <div>
                <Form method="post" className="flex flex-col gap-5">
                    <FormInput name="title" label="Title" type="text" />
                    <button className="btn btn-secondary">Add</button>
                </Form>
            </div>
        </div>
    );
}

export default Todos;
