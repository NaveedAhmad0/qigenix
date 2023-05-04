import React from "react";
import { Form } from "react-bootstrap";
import "./billingForm.css";
const BillingForm = () => {
	return (
		<div className="col-md-12 grid-margin">
			<div className="row">
				<div className="col-6">
					<div className="row justify-content-between mt-2">
						<div className="col-6">
							<h4>Billing Address</h4>
						</div>
						<div className="col-6">
							<p>Same as </p>
						</div>
					</div>
					<form className="form-sample">
						{/* <p className="card-description"> Personal info </p> */}
						<div className="row">
							<div className="col-md-12 mt-4">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">
											<span className="text-danger">*</span> Company
										</Form.Label>
										<Form.Control
											className="addcustomerInputN"
											type="text"
											placeholder="Keywords"
										/>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">VAT Number</Form.Label>
										<select className="form-control addcustomerInputN">
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Phone</Form.Label>
										<Form.Control
											className="addcustomerInputN"
											type="text"
											placeholder="Keywords"
										/>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Website</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Groups</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Currency</Form.Label>

										<select className="form-control addcustomerInputN">
											<option>Category1</option>
											<option>Category2</option>
											<option>Category3</option>
											<option>Category4</option>
										</select>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Default Language</Form.Label>

										<select className="form-control addcustomerInputN">
											<option>Category1</option>
											<option>Category2</option>
											<option>Category3</option>
											<option>Category4</option>
										</select>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<label for="exampleFormControlTextarea1">Address</label>
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="3"></textarea>
								</div>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">City</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">State</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Zip Code</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Country</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-right">
								<button className="btn btnCustomerProfileN btn-primary">
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-6">
					<div className="row mt-2">
						<div className="col-12">
							<div className="form-check">
								<label className="form-check-label text-muted">
									<input type="checkbox" className="form-check-input" />
									<i className="input-helper"></i>
									Show primary contact full name on Invoices, Estimates,
									Payments, Credit Notes
								</label>
							</div>
						</div>
					</div>
					<form className="form-sample">
						{/* <p className="card-description"> Personal info </p> */}
						<div className="row">
							<div className="col-md-12 mt-4">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">
											<span className="text-danger">*</span> Company
										</Form.Label>
										<Form.Control
											className="addcustomerInputN"
											type="text"
											placeholder="Keywords"
										/>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">VAT Number</Form.Label>
										<select className="form-control addcustomerInputN">
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Phone</Form.Label>
										<Form.Control
											className="addcustomerInputN"
											type="text"
											placeholder="Keywords"
										/>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Website</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Groups</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Currency</Form.Label>

										<select className="form-control addcustomerInputN">
											<option>Category1</option>
											<option>Category2</option>
											<option>Category3</option>
											<option>Category4</option>
										</select>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Default Language</Form.Label>

										<select className="form-control addcustomerInputN">
											<option>Category1</option>
											<option>Category2</option>
											<option>Category3</option>
											<option>Category4</option>
										</select>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<label for="exampleFormControlTextarea1">Address</label>
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="3"></textarea>
								</div>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">City</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">State</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Zip Code</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
							<div className="col-md-12">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Label className=" mb-3">Country</Form.Label>

										<Form.Control
											className="addcustomerInputN"
											type="date"></Form.Control>
									</div>
								</Form.Group>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-right">
								<button className="btn btnCustomerProfileN btn-primary">
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BillingForm;
