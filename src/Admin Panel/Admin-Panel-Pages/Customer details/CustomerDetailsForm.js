import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./customerForm.css";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const CustomerForm = () => {
	const history = useHistory();
	const location = useLocation();
	const details = location.state.details;
	console.log(details);

	const [InputFields, setInputFields] = useState(details);
	const token = localStorage.getItem("token");
	const [success, setSuccess] = useState(false);

	const updateCustomer = async (event) => {
		event.preventDefault();
		const obj = {
			company: InputFields.company,
			firstName: InputFields.firstName,
			lastName: InputFields.lastName,
			username: InputFields.username,
			vat_number: InputFields.vat_number,
			mobile: InputFields.mobile,
			website: InputFields.website,
			groups: InputFields.groups,
			currency: InputFields.currency,
			language: InputFields.language,
			address: InputFields.address,
			city: InputFields.city,
			state: InputFields.state,
			zipcode: InputFields.zipcode,
			country: InputFields.country,
		};
		var config = {
			method: "put",
			url: `https://qigenix.ixiono.com/apis/admin/edit-customer/${details.id}`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
			data: obj,
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				alert("updated Successfully");
				history.push("/admin/CustomerList");
			})
			.catch(function (error) {
				console.log(error.response.data);
				alert(error.response.data);
			});
	};

	return (
		<div className="col-12 grid-margin">
			
			<form className="form-sample mt-2">
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-6">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> First Name
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.firstName}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											firstName: e.target.value,
										});
									}}
								/>
							</div>
							<div className="col-sm-6">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> Last Name
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.lastName}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											lastName: e.target.value,
										});
									}}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> UserName
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.username}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											username: e.target.value,
										});
									}}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
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
									value={InputFields.company}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											company: e.target.value,
										});
									}}
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
									value={InputFields.vat_number}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											vat_number: e.target.value,
										});
									}}
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
									value={InputFields.mobile}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											mobile: e.target.value,
										});
									}}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-6">
								<Form.Label className=" mb-3">Website</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.website}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											website: e.target.value,
										});
									}}
								/>
							</div>
							<div className="col-sm-6">
								<Form.Label className=" mb-3">Email</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.email}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											email: e.target.value,
										});
									}}
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
									value={InputFields.groups}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											groups: e.target.value,
										});
									}}
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
									value={InputFields.currency}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											currency: e.target.value,
										});
									}}
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
									value={InputFields.language}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											language: e.target.value,
										});
									}}
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
								value={InputFields.address}
								onChange={(e) => {
									setInputFields({
										...InputFields,
										address: e.target.value,
									});
								}}></textarea>
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
									value={InputFields.city}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											city: e.target.value,
										});
									}}
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
									value={InputFields.state}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											state: e.target.value,
										});
									}}
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
									value={InputFields.zipcode}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											zipcode: e.target.value,
										});
									}}
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
									value={InputFields.country}
									onChange={(e) => {
										setInputFields({
											...InputFields,
											country: e.target.value,
										});
									}}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 text-right">
						<button
							className="btn btnCustomerProfileN btn-primary"
							onClick={updateCustomer}>
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
