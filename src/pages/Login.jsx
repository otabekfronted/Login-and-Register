import { Form, Link, useActionData } from "react-router-dom";

// import Main from "../components/Main";
// components
import { FormInput } from "../components";
import { useEffect } from "react";

export const action = async ({ request }) => {
    let formData = await request.formData();
    let email = formData.get("email");
    let password = formData.get("password");
    return { email, password };
};

// custom hook
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";

function Login() {
    const userData = useActionData();
    const { isPending, registerWithGoogle } = useRegister();
    const { isPending: isPendingLogin, signIn } = useLogin();

    useEffect(() => {
        if (userData) {
            signIn(userData.email, userData.password);
        }
    }, [userData]);

    return (
        <div className="auth-container">
            <div className="auth-left"></div>
            <div className="auth-right">
                <Form
                    method="post"
                    className="flex flex-col gap-5 w-96 bg-base-100 shadow-xl p-8 rounded bg-opacity-75"
                >
                    <h1 className="text-3xl font-semibold text-center">
                        Login
                    </h1>
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
                                type="button"
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
                                Login
                            </button>
                        )}
                    </div>
                    <div>
                        {isPending && (
                            <button
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
                            If you don't have account,{" "}
                            <Link
                                to="/register"
                                className="text-slate-500 link link-primary font-semibold"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
