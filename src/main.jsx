import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// toast
import { Toaster } from "react-hot-toast";

import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
        <App />
        <Toaster />
    </GlobalContextProvider>
);
