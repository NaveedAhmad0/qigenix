import axios from "axios";
import Select from "react-select";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import API from "../../../backend";

const AssignMerchToUser = () => {
	const [merchList, setMerchList] = useState([]);
	const [userList, setUserList] = useState([]);
	const [userEmail, setUserEmail] = useState("");
	const [merchantEmail, setmerchantEmail] = useState([]);
	useEffect(() => {
		axios
			.get(`https://backend.klivepay.com/api/admin/get-merchant-list`)
			.then((res) => {
				const sample = [];
				for (let i = 0; i < res.data.length; i++) {
					sample.push(res.data[i].email);
				}
				setMerchList(sample);
				console.log("sample");
			});
	}, []);
	useEffect(() => {
		axios
			.get(`https://backend.klivepay.com/api/admin/get-user-list`)
			.then((res) => {
				const sampleUser = [];
				for (let i = 0; i < res.data.length; i++) {
					sampleUser.push(res.data[i].email);
				}
				setUserList(sampleUser);
				console.log("sampleUser");
			});
	}, []);

	console.log(merchList);

	// let options = e.target.value;
	// let value = [];
	// for (let i = 0; i < options.length; i++) {
	// 	if (options[i].selected) {
	// 		await value.push(options[i].value);
	// 	}
	// 	console.log(options[i].selected);
	const handleChange = (value, i) => {
		// let newFormValues = [...value];
		// newFormValues[i][e.target.name] = e.target.value;

		// const select = [value];
		// select.push(value);
		console.log(value);
		setmerchantEmail(value);
	};
	const handleChangeUser = (value, i) => {
		// let newFormValues = [...value];
		// newFormValues[i][e.target.name] = e.target.value;

		// const select = [value];
		// select.push(value);
		console.log(value);
		setUserEmail(value);
	};
	// }

	const onSubmit = (e) => {
		e.preventDefault();

		try {
			axios
				.patch(
					`https://backend.klivepay.com/api/admin/assign-merchnat-to-user`,
					JSON.stringify({ merchantEmail, userEmail }),

					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true,
					}
				)
				.then((res) => {
					console.log("res", res.data);
					if (res.data.code === 200) {
						alert("Asssigned sucessfully!");
					} else {
						alert(res.data.message);
					}
					setUserEmail("");
					setmerchantEmail("");
				});
		} catch (error) {
			if (error) {
				alert("something went wrong!");
			}
			console.log(error);
		}
		console.log("merchantEmail", merchantEmail);
		console.log("merch", merchList);
	};

	return (
		<div>
			<div className="col-12 grid-margin">
				<div className="card">
					<div className="card-body">
						<form className="form-sample">
							{/* <p className="card-description"> Personal info </p> */}
							<div className="row">
								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<label>Select User :</label> <br />
											{/* <Form.Control
												type="text"
												placeholder="Users Email"
												onChange={(e) => setUserEmail(e.target.value)}
												value={userEmail}
											/> */}
											<Select
												// isMulti={true}
												// className="basic-multi-select"
												isClearable={true}
												// defaultValue={userList}
												value={[userEmail]}
												onChange={(value) => handleChangeUser(value)}
												options={userList}
												getOptionLabel={(option) => option}
												getOptionValue={(option) => option}
											/>
										</div>
									</Form.Group>
								</div>

								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12 ">
											<label htmlFor="">Select Merchant :</label>
											{/* <select
												multiple
												aria-multiselectable
												multiselect-serach="true"
												value={merchantEmail}
												onChange={(value) => handleChange(value)}
												className="form-control "
												data-live-search="true">
												<option>Select Merchant</option>
												{merchList.length
													? merchList.map((item) => (
															<option value={item}>{item}</option>
													  ))
													: ""}
											</select> */}
											<Select
												isMulti={true}
												className="basic-multi-select"
												isClearable={true}
												// defaultValue={merchList}
												value={merchantEmail}
												onChange={(value) => handleChange(value)}
												options={merchList}
												getOptionLabel={(option) => option}
												getOptionValue={(option) => option}
											/>
										</div>
										{/* <DropdownMultiselect options={merchList} /> */}
									</Form.Group>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 mx-auto">
									<button
										onClick={onSubmit}
										className="btn btn-success btn-lg btn-block rounded-pill">
										Agree
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AssignMerchToUser;
