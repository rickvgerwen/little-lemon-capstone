import "../styles/BookingForm.css";

import { useState } from "react";

const BookingForm = () => {
	const [resDate, setResDate] = useState("");
	const [resTime, setResTime] = useState("");
	const [guests, setGuests] = useState("1");
	const [occasion, setOccasion] = useState("");

	const [availableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);

	const getIsFormValid = () => {
		return resDate && resTime && guests && occasion;
	};

	const clearForm = () => {
		setResDate("");
		setResTime("");
		setGuests("1");
		setOccasion("");
	};

	const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert("Reservation made!");
		clearForm();
	};

	return (
		<section className="bookingform">
			<div className="container">
				<h1>Reservations</h1>
				<form className="booking-form" onSubmit={handleBooking}>
					<div className="field">
						<label htmlFor="res-date">Choose date</label>
						<input
							type="date"
							id="res-date"
							value={resDate}
							onChange={(e) => {
								setResDate(e.target.value);
							}}
							placeholder="Choose date"
						/>
					</div>
					<div className="field">
						<label htmlFor="res-time">Choose time</label>
						<select
							id="res-time"
							value={resTime}
							onChange={(e) => setResTime(e.target.value)}
						>
							{availableTimes.map((time) => (
								<option key={time} value={time}>
									{time}
								</option>
							))}
						</select>
					</div>
					<div className="field">
						<label htmlFor="guests">Number of guests</label>
						<input
							type="number"
							min="1"
							max="10"
							id="guests"
							value={guests}
							onChange={(e) => {
								setGuests(e.target.value);
							}}
						/>
					</div>
					<div className="field">
						<label htmlFor="occasion">Occasion</label>
						<select
							id="occasion"
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
						>
							<option>Birthday</option>
							<option>Engagement</option>
							<option>Anniversary</option>
						</select>
					</div>
					<button type="submit" disabled={!getIsFormValid}>
						Make Your reservation
					</button>
				</form>
			</div>
		</section>
	);
};

export default BookingForm;