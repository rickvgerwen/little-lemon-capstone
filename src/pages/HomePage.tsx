import { Fragment } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
	return (
		<Fragment>
			<Hero />
			<Highlights />
			<Testimonials />
			<About />
		</Fragment>
	);
};

export default HomePage;
