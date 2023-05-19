/* eslint-disable testing-library/no-unnecessary-act */
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import BookingPage from "../../pages/BookingPage";
import { MemoryRouter } from "react-router-dom";
import { fetchAPI } from "../../assets/api/api";

describe("BookingForm", () => {
	afterEach(cleanup);

	it("should render the correct heading", () => {
		act(() => {
			render(
				<MemoryRouter>
					<BookingPage />
				</MemoryRouter>
			);
		});

		const headingElement = screen.getByText("BookingForm");
		expect(headingElement).toBeInTheDocument();
	});

	describe("initializeTimes()", () => {
		it("should initialize the correct times", () => {
			render(
				<MemoryRouter>
					<BookingPage />
				</MemoryRouter>
			);

			const selectElement = screen.getByRole("combobox", {
				name: /Choose time/,
			});

			const optionElements = Array.from(
				// eslint-disable-next-line testing-library/no-node-access
				selectElement.querySelectorAll("option")
			);

			const renderedValues = optionElements.map((option) => option.value);

			const test = fetchAPI(new Date("2023-01-01"));

			console.log({ test });

			expect(renderedValues).toEqual([]);
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

		it("should update the times, based on the date input", async () => {
			act(() => {
				render(
					<MemoryRouter>
						<BookingPage />
					</MemoryRouter>
				);
			});

			await screen.findByLabelText(/Choose date/);

			const dateInput = screen.getByLabelText(/Choose date/);
			act(() => {
				fireEvent.change(dateInput, { target: { value: mockDate } });
				fireEvent.blur(dateInput);
			});
			const selectInput = screen.getByRole("combobox", {
				name: /Choose time/,
			});

			const optionElements = Array.from(
				// eslint-disable-next-line testing-library/no-node-access
				selectInput.querySelectorAll("option")
			);

			const renderedValues = optionElements.map((option) => option.value);

			await waitFor(() => {
				expect(renderedValues.length).toBeGreaterThan(0);
			});
			await waitFor(() => {
				expect(renderedValues[0]).toBe("17:00");
			});
		});
	});
});
