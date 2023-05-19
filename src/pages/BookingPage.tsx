import { Fragment, useEffect, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../assets/api/api";
import { useNavigate } from "react-router-dom";

type AvailableTimes = string[];

type AvailableTimesAction =
	| { type: "INITIALIZE_TIMES"; times: string[] }
	| { type: "UPDATE_TIMES"; times: string[] };

const availableTimesReducer = (
	state: AvailableTimes,
	action: AvailableTimesAction
): AvailableTimes => {
	switch (action.type) {
		case "INITIALIZE_TIMES":
			return action.times;
		case "UPDATE_TIMES":
			return action.times;
		default:
			return state;
	}
};

const BookingPage = () => {
	const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

	const navigate = useNavigate();

	useEffect(() => {
		initializeTimes();
	}, []);

	const updateTimes = async (date: string) => {
		try {
			const newDate = new Date(date);

			const response = await fetchAPI(newDate);
			const initialTimes: AvailableTimes = response;

			dispatch({ type: "UPDATE_TIMES", times: initialTimes });
		} catch (error) {
			console.error("Failed to initialize times:", error);
		}
	};

	const initializeTimes = async () => {
		try {
			const today = new Date();

			const response = await fetchAPI(today);
			console.log({ today, response });

			const initialTimes: AvailableTimes = response;

			dispatch({ type: "INITIALIZE_TIMES", times: initialTimes });
		} catch (error) {
			console.error("Failed to initialize times:", error);
		}
	};

	const submitForm = (formData: any) => {
		const response = submitAPI(formData);

		if (response) {
			navigate("/booking-confirmed");
		} else {
			alert("Something went wrong. Try submitting again, please.");
		}
	};

	return (
		<Fragment>
			<div className="container">
				<h1>BookingForm</h1>
			</div>
			<BookingForm
				availableTimes={availableTimes}
				updateTimes={updateTimes}
				submitForm={submitForm}
			/>
		</Fragment>
	);
};

export default BookingPage;
