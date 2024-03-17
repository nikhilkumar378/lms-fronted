//components
import { Provider } from "react-redux";
import App from "./App.jsx";

//css
import "./index.css";

//Library imports
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
