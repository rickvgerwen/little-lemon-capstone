import "../styles/Header.css";

import logo from "../assets/images/Little_Lemon_Logo.jpg";
import NavBar from "./NavBar";

const Header = () => {
	return (
		<header>
			<div className="container">
				<img src={logo} alt="Little Lemon Logo" className="img-logo" />
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
