import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./billingForm.css";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const BillingForm = () => {
	const location = useLocation();
	const history = useHistory();
	const token = localStorage.getItem("token");
	const details = location.state.details;
	console.log(details);

	const [inputFields, setInputFields] = useState(details);

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
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Email</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											value={inputFields.email}
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
										value={inputFields.billAddress}
										rows="3"></textarea>
								</div>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">City</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											value={inputFields.billCity}
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
											value={inputFields.billState}
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
											value={inputFields.billZipcode}
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
											value={inputFields.billCountry}
											type="text"
											name="country"
											placeholder="Country"
										/>
									</div>
								</Form.Group>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BillingForm;
