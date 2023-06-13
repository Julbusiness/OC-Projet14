import logo from "../assets/logo.jpg";
import CustomDatePicker from "../components/DatePicker/DatePicker";
import SelectMenu from "../components/SelectMenu/SelectMenu";
import { state } from "../../public/data.js";
import { department } from "../../public/data.js";
import { Link } from "react-router-dom";

function AddEmployee() {
	return (
		<div className="form">
			<div className="form-society">
				<div className="header">
					<div className="img-logo"></div>
					<div className="title-logo">HRnet</div>
				</div>
				<div className="body-form">
					<h4 className="title-body-form">
						Create New Employee<span>.</span>
					</h4>
					<Link className="links" to="/employees">
						View Current Employees
					</Link>
					<form className="form-input">
						<div className="input-wrapper">
							<label htmlFor="firstname"></label>
							<input
								type="text"
								id="firstname"
								name="firstname"
								placeholder="First name"
								className="input"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="lastname"></label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								placeholder="Last name"
								className="input"
							/>
						</div>
						<div className="input-wrapper">
							<CustomDatePicker placeholderText="Date of birth" />
						</div>
						<div className="input-wrapper">
							<CustomDatePicker placeholderText="Start date" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="street"></label>
							<input
								type="text"
								id="street"
								name="street"
								placeholder="Street"
								className="input"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="city"></label>
							<input
								type="text"
								id="city"
								name="city"
								placeholder="City"
								className="input"
							/>
						</div>
						<div className="input-wrapper state">
							<SelectMenu placeholder="State" options={state} />
						</div>
						<div className="input-wrapper">
							<label htmlFor="zip"></label>
							<input
								type="text"
								id="zip"
								name="zip"
								placeholder="Zip Code"
								className="input"
							/>
						</div>
						<div className="input-wrapper department">
							<SelectMenu placeholder="Department" options={department} />
						</div>
						<div className="btn-wrapper">
							<button className="btn">Create</button>
						</div>
					</form>
				</div>
			</div>
			<div className="img-society">
				<img src={logo} alt="logo-society" className="logo" />
			</div>
		</div>
	);
}

export default AddEmployee;
