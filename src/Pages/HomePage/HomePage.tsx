import {HomePageWrapper} from "./HomePage.styled.ts";
import Banner from "../../components/HomePageComponents/Banner/Banner.tsx";
import Games from "../../components/HomePageComponents/Games/Games.tsx";

const HomePage = () => {
	return (
			<HomePageWrapper>
					<Banner />
					<Games/>

			</HomePageWrapper>
	)
}
export default HomePage