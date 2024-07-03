import { Form, Link, useActionData } from "react-router-dom";

// components
import { FormInput } from "../components";
import { useEffect } from "react";

export const action = async ({ request }) => {
    let formData = await request.formData();
    let displayName = formData.get("displayName");
    let photoURL = formData.get("photoURL");
    let email = formData.get("email");
    let password = formData.get("password");
    return { displayName, photoURL, email, password };
};

// custom hooks
import { useRegister } from "../hooks/useRegister";

function Register() {
    const userData = useActionData();
    const { isPending, registerWithGoogle, registerEmailAndPassword } =
        useRegister();

    useEffect(() => {
        if (userData) {
            registerEmailAndPassword(
                userData.email,
                userData.password,
                userData.displayName,
                userData.photoURL
            );
        }
    }, [userData]);

    return (
        <div className="auth-container">
            <div className="auth-left"></div>
            <div className="auth-right">
                <Form
                    method="post"
                    className="flex flex-col gap-2 w-96 bg-base-100 shadow-xl p-8 rounded bg-opacity-70"
                >
                    <h1 className="text-3xl font-semibold text-center">
                        Register
                    </h1>
                    <FormInput
                        name="displayName"
                        type="text"
                        label="Your Name"
                    />
                    <FormInput
                        name="photoURL"
                        type="url"
                        label="You Image URL"
                    />
                    <FormInput name="email" type="email" label="email" />
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                    />
                    <div>
                        {isPending && (
                            <button
                                disabled
                                type="submit"
                                className=" btn btn-primary btn-block"
                            >
                                Loading...
                            </button>
                        )}
                        {!isPending && (
                            <button
                                type="submit"
                                className=" btn btn-primary btn-block"
                            >
                                Register
                            </button>
                        )}
                    </div>
                    <div>
                        {isPending && (
                            <button
                                disabled
                                type="button"
                                className="btn btn-secondary w-full"
                            >
                                Loading...
                            </button>
                        )}
                        {!isPending && (
                            <button
                                onClick={registerWithGoogle}
                                type="button"
                                className="btn btn-secondary w-full"
                            >
                                Google
                            </button>
                        )}
                    </div>
                    <div className="text-center">
                        <p>
                            If you have account,{" "}
                            <Link
                                to="/login"
                                className="text-slate-500 link link-primary font-semibold"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
