import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify"; // ✅ Correct named import
import awsExports from "./aws-exports"; // ✅ AWS config must be imported before configuring
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.css"; // ✅ Keep styles at the end
// ✅ Configure Amplify before importing anything else
Amplify.configure(awsExports);



// ✅ Ensure React is rendered properly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
