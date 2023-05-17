import "./App.css";
import "./styles/Layout.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Header />
			<Main />
			<Footer />
		</Fragment>
	);
}

export default App;
