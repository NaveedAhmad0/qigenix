import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./AddBillingForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const AddBillingForm = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");
	const [inputFields, setInputFields] = useState([
		{
			email: "",
			zipCode: "",
			address: "",
			city: "",
			state: "",
			country: "",
		},
	]);
	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const email = inputFields[0].email;
		const zipCode = inputFields[0].zipCode;
		const address = inputFields[0].address;
		const city = inputFields[0].city;
		const state = inputFields[0].state;
		const country = inputFields[0].country;

		const data = JSON.stringify({
			email: email,
			billAddress: address,
			billCity: city,
			billState: state,
			billZipcode: zipCode,
			billCountry: country,
		});
		console.log(data);

		var config = {
			method: "post",
			url: `https://qigenix.ixiono.com/apis/admin/save-billing-address`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				alert("Billing Details Saved!");
				history.push("/admin/CustomerList");
			})
			.catch(function (error) {
				console.log(error.response.data);
			});
	};

	return (
		<div className="col-md-12 grid-margin">
			<div className="row">
				<div className="col-md-8">
					<div className="row justify-content-between mt-2">
						<div className="col-6">
							<h4>Billing Address</h4>
						</div>
						{/* <div className="col-6 text-right">
							<p className="text-mute">Same as customer info</p>
						</div> */}
					</div>
					<form className="form-sample mt-2">
						{/* <p className="card-description"> Personal info </p> */}
						{inputFields.map((input, index) => {
							return (
								<div key={index}>
									<div className="row">
										<div className="col-md-12">
											<Form.Group className="row">
												<div className="col-sm-12">
													<Form.Label className=" mb-3">Email</Form.Label>

													<Form.Control
														className="addcustomerInputN"
														onChange={(event) => handleFormChange(index, event)}
														type="text"
														name="email"
														placeholder="Email"
													/>
												</div>
											</Form.Group>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label for="exampleFormControlTextarea1">Address</label>
												<textarea
													className="form-control"
													id="exampleFormControlTextarea1"
													name="address"
													onChange={(event) => handleFormChange(index, event)}
													rows="3"></textarea>
											</div>
										</div>
										<div className="col-md-12">
											<Form.Group className="row">
												<div className="col-sm-12">
													<Form.Label className=" mb-3">City</Form.Label>

													<Form.Control
														className="addcustomerInputN"
														onChange={(event) => handleFormChange(index, event)}
														type="text"
														name="city"
														placeholder="City"
													/>
												</div>
											</Form.Group>
										</div>
										<div className="col-md-12">
											<Form.Group className="row">
												<div className="col-sm-12">
													<Form.Label className=" mb-3">State</Form.Label>

													<Form.Control
														className="addcustomerInputN"
														onChange={(event) => handleFormChange(index, event)}
														type="text"
														name="state"
														placeholder="State"
													/>
												</div>
											</Form.Group>
										</div>
										<div className="col-md-12">
											<Form.Group className="row">
												<div className="col-sm-12">
													<Form.Label className=" mb-3">Zip Code</Form.Label>

													<Form.Control
														className="addcustomerInputN"
														onChange={(event) => handleFormChange(index, event)}
														type="text"
														name="zipCode"
														placeholder="Zip Code"
													/>
												</div>
											</Form.Group>
										</div>
										<div className="col-md-12">
											<Form.Group className="row">
												<div className="col-sm-12">
													<Form.Label className=" mb-3">Country</Form.Label>

													<Form.Control
														className="addcustomerInputN"
														onChange={(event) => handleFormChange(index, event)}
														type="text"
														name="country"
														placeholder="Country"
													/>
												</div>
											</Form.Group>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12 text-right">
											<button
												className="btn btnCustomerProfileN btn-primary"
												onClick={handleSubmit}>
												Save
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddBillingForm;
