import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./billingForm.css";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import axios from "axios";
const BillingForm = () => {
	const location = useLocation();
	const history = useHistory();
	const token = localStorage.getItem("token");
	const details = location.state.details;
	console.log(details);

	const [inputFields, setInputFields] = useState(details);

	const handleUpdate = async (event) => {


		event.preventDefault();
		const obj = {
			email:inputFields.email,
			billAddress: inputFields.billAddress,
			billCity: inputFields.billCity,
			billState: inputFields.billState,
			billZipcode: inputFields.billZipcode,
			billCountry: inputFields.billCountry,
		};
		console.log(obj)

	try {
		var config = {
			method: "post",
			url: `https://qigenix.ixiono.com/apis/admin/save-billing-address`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
			data:obj
		};
		axios(config)
			.then(function (response) {
				alert(response.data.message)
				history.push('/admin/CustomerList')
				
			})
			.catch(function (error) {
				console.log(error.response.data);
			});
	} catch (error) {
		console.log(error.response.data);
	}
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
											disabled
											onChange={(e) => {
												setInputFields({
													...inputFields,
													email: e.target.value,
												});
											}}
										
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
										name="billAddress"
										value={inputFields.billAddress}
										onChange={(e) => {
											setInputFields({
												...inputFields,
												billAddress: e.target.value,
											});
										}}
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
											onChange={(e) => {
												setInputFields({
													...inputFields,
													billCity: e.target.value,
												});
											}}
											name="billCity"
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
											name="billState"
											onChange={(e) => {
												setInputFields({
													...inputFields,
													billState: e.target.value,
												});
											}}
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
											name="billZipcode"
											onChange={(e) => {
												setInputFields({
													...inputFields,
													billZipcode: e.target.value,
												});
											}}
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
											name="billCountry"
											onChange={(e) => {
												setInputFields({
													...inputFields,
													billCountry: e.target.value,
												});
											}}
											placeholder="Country"
										/>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<button className="btn btn-primary"
								onClick={handleUpdate}>Save</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BillingForm;
