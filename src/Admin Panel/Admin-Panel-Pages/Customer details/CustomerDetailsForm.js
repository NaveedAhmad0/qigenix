import React from "react";
import { Form } from "react-bootstrap";
import "./customerForm.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const CustomerForm = () => {

	const location = useLocation();
	const details = location.state.details;
	

	const updateCustomer=()=>{


	}

	return (
		<div className="col-12 grid-margin">
			<form className="form-sample">
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> Company
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.company}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">VAT Number</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.vat_number}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Phone</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.mobile}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Website</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.website}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Groups</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.groups}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Currency</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.currency}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-4">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Default Language</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.language}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<div className="form-group">
							<label for="exampleFormControlTextarea1">Address</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								value={details.address}
								></textarea>
						</div>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">City</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.city}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">State</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.state}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Zip Code</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.zipcode}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Country</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.country}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 text-right">
						<button className="btn btnCustomerProfileN btn-primary" onClick={updateCustomer}>
							Save
						</button>
					</div>
				</div>
			</form>
			{/* <div className="card">
				<div className="card-body">
					
				</div>
			</div> */}
		</div>
	);
};

export default CustomerForm;
