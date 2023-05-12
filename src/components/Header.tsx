import "../styles/Header.css";

import logo from "../assets/images/Little_Lemon_Logo.jpg";
import NavBar from "./NavBar";

const Header = () => {
	return (
		<header>
			<img
				src={logo}
				alt="Little Lemon Logo"
				className="img-logo"
				width={"400px"}
			/>
			<NavBar />
		</header>
	);
};

export default Header;
