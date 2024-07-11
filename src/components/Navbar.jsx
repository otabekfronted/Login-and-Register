// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

import { Link } from "react-router-dom";

// firbase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
function Navbar() {
    const { user, totalProducts } = useGlobalContext();

    const signOutProfile = async () => {
        await signOut(auth);
        toast.success("See you Soon");
    };

    return (
        <>
            <header className="bg-base-200">
                <nav className="navbar align-elemnts">
                    <div className="navbar-start">
                        <h3 className="btn btn-primary text-2xl">Logo</h3>
                    </div>
                    <div className="navbar-center"></div>

                    <div className="navbar-end">
                        <div className="flex-none"></div>
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="font-semibold ">
                                    {user.displayName}
                                </p>
                            </div>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle"
                                >
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">
                                            {totalProducts}
                                        </span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                                >
                                    <div className="card-body">
                                        <span className="text-lg font-bold">
                                            8 Items
                                        </span>
                                        <span className="text-info">
                                            Subtotal: $999
                                        </span>
                                        <div className="card-actions">
                                            <Link
                                                to="/cart"
                                                className="btn btn-primary btn-block"
                                            >
                                                View cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={signOutProfile}
                                    className="btn btn-secondary"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="navbar bg-base-100 pl-8 pr-8 bg-slate-400">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">
                        daisyUI
                    </Link>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 ">
                        <li>
                            <details>
                                <summary className="text-xl">Pages</summary>
                                <ul className="bg-slate-700  text-zinc-200 rounded-t-none p-2 ">
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
