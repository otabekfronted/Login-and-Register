// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

import { Link } from "react-router-dom";

// firbase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
function Navbar() {
    const { user } = useGlobalContext();

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
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className="text-xl">Pages</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
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
