import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/booking" element={<BookingPage />} />
				<Route path="/booking-confirmed" element={<ConfirmedBooking />} />
			</Routes>
		</main>
	);
};

export default Main;
