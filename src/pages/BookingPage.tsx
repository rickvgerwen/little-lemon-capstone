import { Fragment, useEffect, useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";

interface TimesPerDate {
	[key: string]: string[];
}

interface BookingState {
	availableTimes: string[];
	selectedDate: string;
}

type BookingTimesAction =
	| { type: "INITIALIZE_TIMES" }
	| { type: "UPDATE_TIMES"; selectedDate: string };

const reducer = (state: BookingState, action: BookingTimesAction) => {
	switch (action.type) {
		case "INITIALIZE_TIMES":
			const initialTimes = [
				"17:00",
				"18:00",
				"19:00",
				"20:00",
				"21:00",
				"22:00",
			];

			return {
				...state,
				availableTimes: initialTimes,
			};

		case "UPDATE_TIMES":
			const timesOnSelectedDate = [
				"17:00",
				"18:00",
				"19:00",
				"20:00",
				"21:00",
				"22:00",
			];

			return {
				...state,
				availableTimes: timesOnSelectedDate,
				selectedDate: action.selectedDate,
			};

		default:
			return state;
	}
};

const BookingPage = () => {
	const initialState: BookingState = {
		availableTimes: [],
		selectedDate: "",
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const { availableTimes, selectedDate } = state;

	useEffect(() => {
		dispatch({ type: "INITIALIZE_TIMES" });
	}, []);

	const updateTimes = (selectedDate: string) => {
		dispatch({ type: "UPDATE_TIMES", selectedDate });
	};

	return (
		<Fragment>
			<BookingForm availableTimes={availableTimes} />
		</Fragment>
	);
};

export default BookingPage;
