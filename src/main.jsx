import { createRoot } from "react-dom/client";
import App from "./App"
import "./index.css"
import { ThemeProvider } from "./ThemeContext";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
)