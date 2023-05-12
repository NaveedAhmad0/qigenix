import axios from "axios";
import Select from "react-select";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import makeAnimated from "react-select/animated";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { components } from "react-select";
import MySelect from "../My select/MySelect";

const Option = (props) => {
	return (
		<div>
			<components.Option {...props}>
				<input
					type="checkbox"
					checked={props.isSelected}
					onChange={() => null}
				/>{" "}
				<label>{props.label}</label>
			</components.Option>
		</div>
	);
};

const MultiValue = (props) => (
	<components.MultiValue {...props}>
		{/* {console.log(props.data, "props")}	 */}
		<span>{props.data.firstName}</span>
	</components.MultiValue>
);

const AddNotification = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");
	const [optionSelected, setOptionSelected] = useState([]);
	const [userList, setUserList] = useState([]);

	const animatedComponents = makeAnimated();
	const handleChange = (selected, i) => {
		const dataa = [];
		for (let i = 0; i < selected?.length; i++) {
			console.log("select", selected[i].customer_id);
			dataa.push({
				customer_id: selected[i].customer_id,
				firstName: selected[i].firstName,
			});
		}
		setOptionSelected(dataa);
	};
	console.log(optionSelected);

	useEffect(() => {
		var config = {
			method: "get",
			url: `https://qigenix.ixiono.com/apis/admin/getAllCustomer`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
		};
		axios(config).then((res) => {
			setUserList(res.data);
		});
	}, []);

	const [inputFields2, setInputFields2] = useState([
		{ message: "", customers: [] },
	]);
	// const handleFormChange2 = (index2, event) => {
	// 	let data = [...inputFields2];
	// 	data[index2][event.target.name] = event.target.value;
	// 	setInputFields2(data);
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		// const userId = inputFields2[0].userId;
		// const deviceId = inputFields2[0].deviceId;

		const data = JSON.stringify({
			customers: optionSelected,
			message: inputFields2.message,
		});

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/create-notification`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: data,
			};
			axios(config).then((res) => {
				console.log("res", res.data);
				if (res.data.code === 200) {
					alert("Asssigned sucessfully!");
				} else {
					alert(res.data.message);
				}
			});
		} catch (error) {
			if (error) {
				alert("something went wrong!");
			}
			console.log(error.res.data);
		}
	};

	return (
		<div>
			<div className="col-12 grid-margin">
				<div className="card">
					<div className="card-body">
						<form className="form-sample">
							<div className="row">
								<div className="col-md-12">
									<Form.Group className="row">
										<div className="col-12">
											<label>Select User</label> <br />
											{/* <Select
												isMulti={true}
												className="basic-multi-select"
												isClearable={true}
												defaultValue={userList}
												value={[inputFields2.customers]}
												onChange={(value) => {
													console.log(value[0].customer_id);
												}}
												options={userList}
												getOptionLabel={(option) => option}
												getOptionValue={(option) => option}
											/> */}
											<MySelect
												options={userList}
												isMulti
												closeMenuOnSelect={false}
												hideSelectedOptions={false}
												components={{ Option, MultiValue, animatedComponents }}
												onChange={handleChange}
												allowSelectAll={true}
												value={optionSelected}
											/>
											{/* <sele<select
												name="userId"
												className="input col-12"
												style={{
													border: "1px solid rgb(234, 237, 241)",
													padding: "5px",
													borderRadius: "5px",
												}}
												onChange={(e) => {
													setInputFields2({
														...inputFields2,
														customer_id: e.target.value,
													});
													console.log(inputFields2.customer_id);
												}}>
												<option>Select User</option>
												{userList.map((x) => {
													return (
														<option value={x.customer_id}>{x.firstName}</option>
													);
												})}
											</select>ct
												name="userId"
												className="input col-12"
												style={{
													border: "1px solid rgb(234, 237, 241)",
													padding: "5px",
													borderRadius: "5px",
												}}
												onChange={(e) => {
													setInputFields2({
														...inputFields2,
														customer_id: e.target.value,
													});
													console.log(inputFields2.customer_id);
												}}>
												<option>Select User</option>
												{userList.map((x) => {
													return (
														<option value={x.customer_id}>{x.firstName}</option>
													);
												})}
											</select> */}
										</div>
									</Form.Group>
								</div>
							</div>
							{/* {inputFields2.map((input, index2) => {
								return (
									<div key={index2}>
									</div>
								);
							})} */}

							<div className="row">
								<div className="col-md-12">
								<input type="date" className="p-2 w-100" style={{border:"1px solid #d9d9d9",borderRadius:"5px"}}></input>
								</div>
								<div className="col-12 mt-4">
									<label>Enter Notification</label> <br />
									<textarea style={{border:"1px solid #d9d9d9",borderRadius:"5px"}}
										name="message"
										id=""
										className="w-100"
										rows="10"
										value={inputFields2.message}
										onChange={(e) => {
											setInputFields2({
												...inputFields2,
												message: e.target.value,
											});
										}}></textarea>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6 mx-auto">
									<button
										onClick={onSubmit}
										className="btn btn-success btn-lg btn-block rounded-pill mt-2">
										Send Notification
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

export default AddNotification;
