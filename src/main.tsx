// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import {BrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.tsx";
import {Router} from "./routes/Router.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <RootLayout>
            <Router />
        </RootLayout>
    </BrowserRouter>
)
