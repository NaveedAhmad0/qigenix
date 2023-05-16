import React from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState } from "react";
const AddDeviceForm = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");
	const [inputFields, setInputFields] = useState([
		{ deviceName: "", deviceBrand: "", tax: "", amount: "" },
	]);
	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const device_name = inputFields[0].deviceName;
		const device_brand = inputFields[0].deviceBrand;
		const tax_percentage = inputFields[0].tax;
		const amount = inputFields[0].amount;
		const status = "0";
		const data = JSON.stringify({
			device_name: device_name,
			device_brand: device_brand,
			status: status,
			tax_percentage: tax_percentage,
			amount: amount,
		});
		console.log(data);

		var config = {
			method: "post",
			url: `https://qigenix.ixiono.com/apis/admin/add-devices`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				alert("Device Added Successfully");
				history.push("/admin/DeviceList");
			})
			.catch(function (error) {
				console.log(error.response.data);
				alert(error.response.data);
			});
	};

	return (
		<div className="col-md-12 grid-margin">
			<form className="form-sample mt-4">
				{inputFields.map((input, index) => {
					return (
						<div key={index}>
							<div className="row">
								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<Form.Label className=" mb-3">Device Name</Form.Label>

											<Form.Control
												className="addcustomerInputN"
												onChange={(event) => handleFormChange(index, event)}
												type="text"
												name="deviceName"
												placeholder="Keywords"
											/>
										</div>
									</Form.Group>
								</div>
								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<Form.Label className=" mb-3">Device Brand</Form.Label>

											<Form.Control
												className="addcustomerInputN"
												onChange={(event) => handleFormChange(index, event)}
												type="text"
												name="deviceBrand"
												placeholder="Keywords"
											/>
										</div>
									</Form.Group>
								</div>
								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<Form.Label className=" mb-3">Tax</Form.Label>

											<Form.Control
												className="addcustomerInputN"
												onChange={(event) => handleFormChange(index, event)}
												type="text"
												name="tax"
												placeholder="Keywords"
											/>
										</div>
									</Form.Group>
								</div>
								<div className="col-md-6">
									<Form.Group className="row">
										<div className="col-sm-12">
											<Form.Label className=" mb-3">Amount</Form.Label>

											<Form.Control
												className="addcustomerInputN"
												onChange={(event) => handleFormChange(index, event)}
												type="text"
												name="amount"
												placeholder="Keywords"
											/>
										</div>
									</Form.Group>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12 text-right">
									<button
										className="btn btnCustomerProfileN btn-primary"
										onClick={handleSubmit}>
										Save
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</form>
			{/* <div className="card">
				<div className="card-body">
					
				</div>
			</div> */}
		</div>
	);
};

export default AddDeviceForm;
