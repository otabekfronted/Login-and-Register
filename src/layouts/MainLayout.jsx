import { Outlet } from "react-router-dom";

import { Navbar } from "../pages";

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
