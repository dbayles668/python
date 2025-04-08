import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const animals = ["giraffe","wolf","rhino"];

createRoot(document.getElementById("root")).render(<App />);
