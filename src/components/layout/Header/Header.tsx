import HeaderTop from "./HeaderTop/HeaderTop.tsx";
import HeaderContent from "./HeaderContent/HeaderContent.tsx";
import {HeaderBox} from "./Header.styled.ts";
// import {HeaderBox} from "./Header.styled.ts";

const Header = () => {
  return (
			<HeaderBox>
					<HeaderTop />
					<HeaderContent />
			</HeaderBox>
  )
}

export default Header