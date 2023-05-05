import axios from "axios";
import Select from "react-select";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import API from "../../../backend";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const AssignMerchToUser = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");
	const [deviceList, setDeviceList] = useState([]);
	const [userList, setUserList] = useState([]);

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
	useEffect(() => {
		var config = {
			method: "get",
			url: `https://qigenix.ixiono.com/apis/admin/list-devices`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
		};
		axios(config).then((res) => {
			setDeviceList(res.data);
		});
	}, []);

	const [inputFields2, setInputFields2] = useState([
		{ userId: "", deviceId: "" },
	]);
	const handleFormChange2 = (index2, event) => {
		let data = [...inputFields2];
		data[index2][event.target.name] = event.target.value;
		setInputFields2(data);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const userId = inputFields2[0].userId;
		const deviceId = inputFields2[0].deviceId;

		const data = JSON.stringify({
			customer_id: userId,
			device_id: deviceId,
		});

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/assign-device`,
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
					// history.push('/admin/DeviceList')
					history.push("/admin/CustomerList");
				} else {
					alert(res.data.message);
					history.push("/admin/CustomerList");
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
							{inputFields2.map((input, index2) => {
								return (
									<div key={index2}>
										<div className="row">
											<div className="col-md-6">
												<Form.Group className="row">
													<div className="col-sm-12">
														<label>Select User</label> <br />
														<select
															name="userId"
															className="input"
															onChange={(event) =>
																handleFormChange2(index2, event)
															}>
															<option>Select User</option>
															{userList.map((x) => {
																return (
																	<option value={x.customer_id}>
																		{x.firstName}
																	</option>
																);
															})}
														</select>
													</div>
												</Form.Group>
											</div>

											<div className="col-md-6">
												<Form.Group className="row">
													<div className="col-sm-12 ">
														<label htmlFor="">Select Device</label>

														<select
															name="deviceId"
															className="input"
															onChange={(event) =>
																handleFormChange2(index2, event)
															}>
															<option>Select Device</option>
															{deviceList.map((x) => {
																return (
																	<option value={x.device_id}>
																		{x.device_name}
																	</option>
																);
															})}
														</select>
													</div>
													{/* <DropdownMultiselect options={merchList} /> */}
												</Form.Group>
											</div>
										</div>
									</div>
								);
							})}

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
