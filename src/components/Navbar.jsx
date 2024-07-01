import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
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
