import { Link } from "react-router-dom";
import "../styles/Button.css";

interface ButtonProps {
	text: string;
	link: string;
}

const Button = (props: ButtonProps) => {
	return (
		<Link className="button" to={props.link}>
			{props.text}
		</Link>
	);
};

export default Button;
