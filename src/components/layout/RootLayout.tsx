import Header from "./Header/Header.tsx";
import Main from './Main/Main.tsx';
import {Outlet} from "react-router-dom";


export default function RootLayout() {
		return (
				<>
					<Header />
					<Main>
							<Outlet />
					</Main>
					{/*<Footer />*/}
				</>
		);
}
