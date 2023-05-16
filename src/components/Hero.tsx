import "../styles/Hero.css";
import Button from "./Button";
import heroImg from "../assets/images/sushi.jpg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="left">
					<h1>Little Lemon</h1>
					<span className="sub-title">Chicago</span>
					<p className="lead-text">
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<Button text="Reserve a table" link="/booking" />
				</div>
				<div className="img-container">
					<img src={heroImg} alt="Tapas" className="hero-img" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
