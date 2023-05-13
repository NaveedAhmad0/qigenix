import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./ProfileForm.css";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import API from "../../../backend";

const ProfileForm = () => {
	const history = useHistory();
	// const location = useLocation();
	// const details = location.state.details;
	// console.log(details);

	const [InputFields, setInputFields] = useState([]);
	const token = localStorage.getItem("token");
	const email = localStorage.getItem("email");
	const [success, setSuccess] = useState(false);
	useEffect(() => {
		axios
			.get(`${API}/admin/getAdminProfile/${email}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			})
			.then((res) => {
				setInputFields(res.data);
			});
	}, []);

	const updateCustomer = async (event) => {
		event.preventDefault();
		const obj = {
			firstName: InputFields.firstName,
			lastName: InputFields.lastName,
			// username: InputFields.username,
			// mobile: InputFields.mobile,
			// admin_id: InputFields.admin_id,
		};
		var config = {
			method: "put",
			url: `https://qigenix.ixiono.com/apis/admin/updateProfile/${email}`,
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
				// history.push("/admin/CustomerList");
			})
			.catch(function (error) {
				console.log(error.response.data);
				alert(error.response.data);
			});
	};

	return (
		<div className="col-12 grid-margin">
			<form className="form-sample">
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row mt-2">
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
									<span className="text-danger">*</span> admin_id
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.admin_id}
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
								<Form.Label className=" mb-3">mobile</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={InputFields.mobile}
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

export default ProfileForm;
