import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import GlobalCantextProvider from "./context/GlobalCantext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalCantextProvider>
        <App />
    </GlobalCantextProvider>
);
