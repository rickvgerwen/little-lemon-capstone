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
import BookingForm from "../BookingForm";

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

	describe("input field validations", () => {
		describe("resDate", () => {
			it("should have the correct attributes", () => {
				const mockSubmitForm = jest.fn();
				const mockAvailableTimes = ["17:00", "22:00"];
				const mockUpdateTimes = jest.fn();

				render(
					<BookingForm
						availableTimes={mockAvailableTimes}
						updateTimes={mockUpdateTimes}
						submitForm={mockSubmitForm}
					/>
				);

				const resDateInput = screen.getByLabelText(/Choose date/);

				expect(resDateInput).toHaveAttribute("required");
			});
		});

		describe("resTime", () => {
			it("should have the correct attributes", () => {
				const mockSubmitForm = jest.fn();
				const mockAvailableTimes = ["17:00", "22:00"];
				const mockUpdateTimes = jest.fn();

				render(
					<BookingForm
						availableTimes={mockAvailableTimes}
						updateTimes={mockUpdateTimes}
						submitForm={mockSubmitForm}
					/>
				);

				const resTimeInput = screen.getByLabelText(/Choose time/);

				expect(resTimeInput).toHaveAttribute("required");
			});
		});

		describe("guests", () => {
			it("should have the correct attributes", () => {
				const mockSubmitForm = jest.fn();
				const mockAvailableTimes = ["17:00", "22:00"];
				const mockUpdateTimes = jest.fn();

				render(
					<BookingForm
						availableTimes={mockAvailableTimes}
						updateTimes={mockUpdateTimes}
						submitForm={mockSubmitForm}
					/>
				);

				const guestsInput = screen.getByLabelText(/Number of guests/);

				expect(guestsInput).toHaveAttribute("required");
				expect(guestsInput).toHaveAttribute("min");
				expect(guestsInput).toHaveAttribute("max");
			});
		});

		describe("occasion", () => {
			it("should have the correct attributes", () => {
				const mockSubmitForm = jest.fn();
				const mockAvailableTimes = ["17:00", "22:00"];
				const mockUpdateTimes = jest.fn();

				render(
					<BookingForm
						availableTimes={mockAvailableTimes}
						updateTimes={mockUpdateTimes}
						submitForm={mockSubmitForm}
					/>
				);

				const occasionInput = screen.getByLabelText(/Occasion/);

				expect(occasionInput).toHaveAttribute("required");
			});
		});
	});

	fdescribe("form validation valid state", () => {
		it("should set the form valid if the fields are correct", () => {
			const mockSubmitForm = jest.fn();
			const mockAvailableTimes = ["17:00", "22:00"];
			const mockUpdateTimes = jest.fn();

			render(
				<BookingForm
					availableTimes={mockAvailableTimes}
					updateTimes={mockUpdateTimes}
					submitForm={mockSubmitForm}
				/>
			);

			const mockResDate = "2023-01-02";
			const mockResTime = mockAvailableTimes[0];
			const mockGuests = 5;
			const mockOccasion = "Birthday";

			const resDateInput = screen.getByLabelText(/Choose date/);
			fireEvent.change(resDateInput, { target: { value: mockResDate } });

			const resTimeInput = screen.getByLabelText(/Choose time/);
			fireEvent.change(resTimeInput, { target: { value: mockResTime } });

			const guestsInput = screen.getByLabelText(/Number of guests/);
			fireEvent.change(guestsInput, { target: { value: 20 } });

			const occasionInput = screen.getByLabelText(/Occasion/);
			fireEvent.change(occasionInput, { target: { value: mockOccasion } });

			const submitButton = screen.getByRole("button");
			fireEvent.click(submitButton);

			expect(submitButton).not.toHaveAttribute("disabled");
		});
	});
});
