// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import RootLayout from "./components/layout/RootLayout.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <RootLayout>
                    <HomePage />
                </RootLayout>
            } />
            {/*<Route path="/CasesPage" Component={CasesPage} />*/}
            {/*<Route path="/BattlesPage" Component={BattlesPage} />*/}
            {/*<Route path="/RoulettePage" Component={RoulettePage} />*/}
            {/*<Route path="/CoinFlipPage" Component={CoinFlipPage} />*/}
            {/*<Route path="/PinkoPage" Component={PinkoPage} />*/}
            {/*<Route path="/RollPage" Component={RollPage} />*/}
            <Route path="*" element={<h1>ERROR404. PAGE NOT FOUND</h1>} />
        </Routes>
    </BrowserRouter>
)
