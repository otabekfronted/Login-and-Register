import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home, About, Contact, Login, Register, ErrorPage } from "./pages";
import MainLayout from "./layouts/MainLayout";

import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            errorElement: <ErrorPage />,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
            ],
        },
        {
            path: "/login",
            errorElement: <ErrorPage />,
            element: <Login />,
            action: LoginAction,
        },
        {
            path: "/register",
            errorElement: <ErrorPage />,
            element: <Register />,
            action: RegisterAction,
        },
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
