import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "../../pages/BookingPage";

describe("BookingForm", () => {
	it("should render the correct heading", () => {
		render(<BookingPage />);

		const headingElement = screen.getByText("BookingForm");
		expect(headingElement).toBeInTheDocument();
	});

	describe("initializeTimes()", () => {
		const expectedTimes = [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		];

		it("should initialize the correct times", () => {
			render(<BookingPage />);

			const selectElement = screen.getByRole("combobox", {
				name: /Choose time/,
			});

			const optionElements = Array.from(
				// eslint-disable-next-line testing-library/no-node-access
				selectElement.querySelectorAll("option")
			);

			const renderedValues = optionElements.map((option) => option.value);

			expect(renderedValues).toEqual(expectedTimes);
		});
	});

	describe("updateTimes", () => {
		const mockDate = "2023-01-01";

		const expectedTimes = [
			"07:00",
			"08:00",
			"09:00",
			"10:00",
			"11:00",
			"12:00",
		];

		it("should update the times, based on the date input", () => {
			render(<BookingPage />);

			const dateInput = screen.getByLabelText(/Choose date/);
			fireEvent.change(dateInput, { target: { value: mockDate } });

			const selectInput = screen.getByRole("combobox", {
				name: /Choose time/,
			});

			const optionElements = Array.from(
				// eslint-disable-next-line testing-library/no-node-access
				selectInput.querySelectorAll("option")
			);

			const renderedValues = optionElements.map((option) => option.value);

			expect(renderedValues).toEqual(expectedTimes);
		});
	});
});

// test("the updateTimes() method dispatches the 'UPDATE_TIMES' action with the selected date", () => {
// 	const initializeTimes = jest.fn();

// 	render(<BookingPage />);

// 	expect(initializeTimes).toHaveBeenCalled();
// });
