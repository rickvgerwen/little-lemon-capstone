import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { Fragment } from "react";

const NavBar = () => {
	return (
		<Fragment>
			<label htmlFor="toggle-mobile-nav" className="toggle-menu">
				<span></span>
				<span></span>
				<span></span>
			</label>
			<input type="checkbox" id="toggle-mobile-nav"></input>
			<nav>
				<ul className="nav-menu">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<a href="/" className="disabled-nav-link">
							About
						</a>
					</li>
					<li>
						<a href="/" className="disabled-nav-link">
							Menu
						</a>
					</li>
					<li>
						<NavLink to="/booking">Reservations</NavLink>
					</li>
					<li>
						<a href="/" className="disabled-nav-link">
							Order Online
						</a>
					</li>
					<li>
						<a href="/" className="disabled-nav-link">
							Login
						</a>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default NavBar;
