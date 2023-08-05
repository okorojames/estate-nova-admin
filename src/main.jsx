import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RefContextProvider from "./contexts/RefContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RefContextProvider>
      <App />
    </RefContextProvider>
  </BrowserRouter>
);
