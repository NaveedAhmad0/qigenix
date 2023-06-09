import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import copy from "copy-to-clipboard";

import "./deviceForm.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const DeviceForm = () => {
	const [copied, setCopied] = useState(false);
	const location = useLocation();
	const details = location.state.details;
	const licenseKey = details.device_license_key;
	console.log(details);

	const copyToClipboard = (e) => {
		e.preventDefault();
		copy(licenseKey);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
		// alert(`You have copied "${licenseKey}"`);
	};
	return (
		<div className="col-12 grid-margin">
			<div className="row mt-2">
				<div className="col-12">
					<div className="form-check">
						{/* <label className="form-check-label text-muted">
							<input type="checkbox" className="form-check-input" />
							<i className="input-helper"></i>
							Show primary contact full name on Invoices, Estimates, Payments,
							Credit Notes
						</label> */}
					</div>
				</div>
			</div>
			<form className="form-sample">
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> Device Id
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_id}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Device Name</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_name}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">device Brand</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_brand}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Amount($)</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.amount}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Tax</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.tax_percentage + "%"}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Device License Key</Form.Label>
								<InputGroup className="mb-3">
									<Form.Control
										placeholder="Username"
										aria-label="Username"
										aria-describedby="basic-addon1"
										value={details.device_license_key}
									/>
									<InputGroup.Text
										id="basic-addon1"
										data-toggle="tooltip"
										data-placement="top"
										title={copied ? "Copied" : "Copy"}
										style={{ cursor: "pointer" }}
										onClick={(e) => copyToClipboard(e)}>
										{copied ? (
											<i class="fa-solid text-primary fa-check"></i>
										) : (
											// "copied"
											<i class="fa-regular fa-paste"></i>
										)}
									</InputGroup.Text>
								</InputGroup>
							</div>
						</Form.Group>
					</div>
				</div>

				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Created At</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.createdAt}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Updated At</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.updatedAt}
								/>
							</div>
						</Form.Group>
					</div>
				</div>

				{/* <div className="row">
					<div className="col-md-8 text-right">
						<button className="btn btnCustomerProfileN btn-primary">
							Save
						</button>
					</div>
				</div> */}
			</form>
			{/* <div className="card">
				<div className="card-body">
					
				</div>
			</div> */}
		</div>
	);
};

export default DeviceForm;
