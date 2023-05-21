import "../styles/BookingForm.css";

import { useFormik } from "formik";
import * as Yup from "yup";

interface BookingFormProps {
	availableTimes: string[];
	updateTimes: (date: string) => void;
	submitForm: (form: any) => void;
}

const BookingForm = (props: BookingFormProps) => {
	const formik = useFormik({
		initialValues: {
			resDate: "",
			resTime: "",
			guests: "",
			occasion: "",
		},
		onSubmit: (values) => {
			props.submitForm(values);
		},
		validationSchema: Yup.object({
			resDate: Yup.string().required("Please, fill in a date."),
			resTime: Yup.string().required("Please, fill in a time."),
			guests: Yup.number()
				.min(1, "You must come with at least 1 person.")
				.max(10, "You can reserve for up to 10 persons")
				.required("Please, fill in your party."),
			occasion: Yup.string().required("Please, fill in the occasion."),
		}),
	});

	return (
		<section className="bookingform">
			<div className="container">
				<form className="booking-form" onSubmit={formik.handleSubmit}>
					<div className="field">
						<label htmlFor="res-date">Choose date</label>
						<input
							type="date"
							id="res-date"
							placeholder="Choose date"
							required
							{...formik.getFieldProps("resDate")}
						/>
						{formik.errors.resDate && formik.touched.resDate ? (
							<div className="form-error">{formik.errors.resDate}</div>
						) : null}
					</div>
					<div className="field">
						<label htmlFor="res-time">Choose time</label>
						<select id="res-time" required {...formik.getFieldProps("resTime")}>
							{props.availableTimes.map((time) => (
								<option key={time} value={time}>
									{time}
								</option>
							))}
						</select>
						{formik.errors.resTime && formik.touched.resTime ? (
							<div className="form-error">{formik.errors.resTime}</div>
						) : null}
					</div>
					<div className="field">
						<label htmlFor="guests">Number of guests</label>
						<input
							type="number"
							min="1"
							max="10"
							id="guests"
							required
							{...formik.getFieldProps("guests")}
						/>
						{formik.errors.guests && formik.touched.guests ? (
							<div className="form-error">{formik.errors.guests}</div>
						) : null}
					</div>
					<div className="field">
						<label htmlFor="occasion">Occasion</label>
						<select
							id="occasion"
							required
							{...formik.getFieldProps("occasion")}
						>
							<option>Birthday</option>
							<option>Engagement</option>
							<option>Anniversary</option>
						</select>
						{formik.errors.occasion && formik.touched.occasion ? (
							<div className="form-error">{formik.errors.occasion}</div>
						) : null}
					</div>
					<button
						type="submit"
						disabled={!formik.isValid}
						aria-label="On Click"
					>
						Make Your reservation
					</button>
				</form>
			</div>
		</section>
	);
};

export default BookingForm;
