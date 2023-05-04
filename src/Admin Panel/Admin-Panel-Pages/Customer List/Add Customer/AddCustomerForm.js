import React from "react";
import { Form } from "react-bootstrap";
import "./addCustomer.css";
import axios from "axios";
import { useState } from "react";
const AddCustomerForm = () => {
	const token=localStorage.getItem("token")
	const [inputFields, setInputFields] = useState([
		{ firstName:"",lastName:"",email:"",company:"",vatNumber:"",phone:"",website:"",currency:"",zipCode:"",address:"",language:"",city:"",state:"",country:"",groups:"" }
	  ]);
	  const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	  };

	  const handleSubmit = (e) => {
		e.preventDefault();
		const firstName=inputFields[0].firstName;
		const lastName=inputFields[0].lastName;
		const company = inputFields[0].company;
		const vatNumber = inputFields[0].vatNumber;
		const phone=inputFields[0].phone;
		const website=inputFields[0].website;
		const email=inputFields[0].email;
		const currency=inputFields[0].currency;
		const zipCode=inputFields[0].zipCode;
		const address=inputFields[0].address;
		const language=inputFields[0].language;
		const city=inputFields[0].city;
		const state=inputFields[0].state;
		const country=inputFields[0].country;
		const groups=inputFields[0].groups;
		const status='1'

	
		 const data = JSON.stringify({
		 	company: company,
		 	firstName: firstName,
		 	lastName:lastName ,
		 	email: email,
		 	vat_number: vatNumber,
		 	mobile: phone,
		 	website: website,
		 	groups: groups,
		 	currency: currency,
		 	language: language,
		 	address: address,
		 	city: city,
		 	state:state ,
		 	zipcode: zipCode,
		 	country:country ,
		 	status: status
		 
		 });
		  console.log(data);
	
		var config = {
		  method: "post",
		  url: `https://qigenix.ixiono.com/apis/admin/add-customer`,
		  headers: {
		    "Content-Type": "application/json",
			Authorization: `${token}`,
		  },
		  data: data,
		};
		axios(config)
		  .then(function (response) {
		    console.log(JSON.stringify(response.data));
		    alert("Customer");
		   
		  })
		  .catch(function (error) {
		    console.log(error.response.data);
		  });
	  };


	return (
		
		<div className="col-md-12 grid-margin">
			<form className="form-sample mt-4">
			{inputFields.map((input, index) => {
				return(
			<div key={index}>
				<div className="row">
					<div className="col-md-6">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">First Name</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="firstName"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Last Name</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="lastName"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row">
					<div className="col-md-12 ">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> Company
								</Form.Label>
								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="company"
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
								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="vatNumber"
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
								<Form.Label className=" mb-3">Phone</Form.Label>
								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="phone"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Website</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="website"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">email</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="email"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-12">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Groups</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="groups"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Currency</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="currency"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-6">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Default Language</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="language"
									placeholder="Keywords"
								/>
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
								name="address"
								onChange={(event) => handleFormChange(index, event)}
								rows="3"></textarea>
						</div>
					</div>
					<div className="col-md-12">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">City</Form.Label>

								<Form.Control
									className="addcustomerInputN"
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="city"
									placeholder="Keywords"
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
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="state"
									placeholder="Keywords"
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
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="zipCode"
									placeholder="Keywords"
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
									 onChange={(event) => handleFormChange(index, event)}
									type="text"
									name="country"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-right">
						<button className="btn btnCustomerProfileN btn-primary" onClick={handleSubmit}>
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

export default AddCustomerForm;
