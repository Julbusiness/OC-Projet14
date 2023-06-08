import logo from "../assets/logo.jpg";

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
						Create new Employee<span>.</span>
					</h4>
					<form className="form-input">
						<div className="input-wrapper">
							<label htmlFor="firstname"></label>
							<input
								type="text"
								id="firstname"
								name="firstname"
								placeholder="First name"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="lastname"></label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								placeholder="Last name"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="birth"></label>
							<input
								type="text"
								id="birth"
								name="birth"
								placeholder="Date of Birth"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="start"></label>
							<input
								type="text"
								id="start"
								name="start"
								placeholder="Start Date"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="street"></label>
							<input
								type="text"
								id="street"
								name="street"
								placeholder="Street"
							/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="city"></label>
							<input type="text" id="city" name="city" placeholder="City" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="state"></label>
							<input type="text" id="state" name="state" placeholder="State" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="zip"></label>
							<input type="text" id="zip" name="zip" placeholder="Zip Code" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="department"></label>
							<input
								type="text"
								id="department"
								name="department"
								placeholder="Department"
							/>
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
