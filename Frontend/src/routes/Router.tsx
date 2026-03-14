import HomePage from "../Pages/HomePage/HomePage.tsx";
import { Route, Routes } from 'react-router-dom';
import RootLayout from "../components/layout/RootLayout.tsx";

export const Router = () => {
  return (
		    <Routes>

				    <Route path="/" element={<RootLayout />}>
						    <Route index element={<HomePage />}/>
						    {/*<Route path="/CasesPage" Component={CasesPage} />*/}
						    {/*<Route path="/BattlesPage" Component={BattlesPage} />*/}
						    {/*<Route path="/RoulettePage" Component={RoulettePage} />*/}
						    {/*<Route path="/CoinFlipPage" Component={CoinFlipPage} />*/}
						    {/*<Route path="/PinkoPage" Component={PinkoPage} />*/}
						    {/*<Route path="/RollPage" Component={RollPage} />*/}
				    </Route>
				    <Route path="*" element={<h1>ERROR404. PAGE NOT FOUND</h1>} />




		    </Routes>
  )
}