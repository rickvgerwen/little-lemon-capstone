import { Fragment, useEffect, useReducer } from "react";
import BookingForm from "../components/BookingForm";

type AvailableTimesState = string[];

type AvailableTimesAction =
	| { type: "INITIALIZE_TIMES"; times: string[] }
	| { type: "UPDATE_TIMES"; times: string[] };

const availableTimesReducer = (
	state: AvailableTimesState,
	action: AvailableTimesAction
): AvailableTimesState => {
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

	useEffect(() => {
		initializeTimes();
	}, []);

	const updateTimes = (date: string) => {
		const updatedTimes: AvailableTimesState = [
			"07:00",
			"08:00",
			"09:00",
			"10:00",
			"11:00",
			"12:00",
		];

		dispatch({ type: "UPDATE_TIMES", times: updatedTimes });
	};

	const initializeTimes = () => {
		const initialTimes: AvailableTimesState = [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		];

		dispatch({ type: "INITIALIZE_TIMES", times: initialTimes });
	};

	return (
		<Fragment>
			<div className="container">
				<h1>BookingForm</h1>
			</div>
			<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
		</Fragment>
	);
};

export default BookingPage;
