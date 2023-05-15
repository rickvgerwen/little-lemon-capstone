import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<ul className="nav-menu">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<a href="#" className="disabled-nav-link">
						About
					</a>
				</li>
				<li>
					<a href="#" className="disabled-nav-link">
						Menu
					</a>
				</li>
				<li>
					<NavLink to="/booking">Reservations</NavLink>
				</li>
				<li>
					<a href="#" className="disabled-nav-link">
						Order Online
					</a>
				</li>
				<li>
					<a href="#" className="disabled-nav-link">
						Login
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
