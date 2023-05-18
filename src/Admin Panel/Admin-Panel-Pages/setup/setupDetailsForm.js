import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./customerForm.css";
import sublogo from "../../../assets/images/Group 220.png";
import logo from '../../../assets/images/logo.png'

const SetupForm = () => {
  return (
    <div className="col-12 grid-margin">
      <form className="form-sample">
        {/* <p className="card-description"> Personal info </p> */}
        <div className="row">
          <div
            className="col-md-12 pb-4 "
            style={{ borderBottom: "1px solid #EAEDF1", alignItems: "center" }}
          >
            <img src={sublogo} alt=""></img>
            <i
              class="fa-solid fa-xmark text-danger mt-3"
              style={{ float: "right" }}
            ></i>
          </div>
		  <div
            className="col-md-12 py-4 "
            style={{ borderBottom: "1px solid #EAEDF1", alignItems: "center" }}
          >
            <img src={logo} alt="" style={{width:"30%"}}></img>
            <i
              class="fa-solid fa-xmark text-danger mt-3"
              style={{ float: "right" }}
            ></i>
          </div>

		  <div className="col-md-12 pt-4" 
            style={{ borderBottom: "1px solid #EAEDF1", alignItems: "center" }}
			>
		  <Form.Group>
										
											<Form.Label className=" mb-3">Comapny Name</Form.Label>

											<Form.Control
												className="addcustomerInputN"
												
												type="text"
												name="companyName"
												placeholder="Company Name"
											/>
									
									</Form.Group>
		  </div>

		  <div className="col-md-12 py-4">
		  <Form.Group>
										
											<Form.Label className=" mb-3">Comapny Domain Name</Form.Label>

											<Form.Control
												className="addcustomerInputN"
												
												type="text"
												name="companyDomainName"
												placeholder="Company Domain Name"
											/>
									
									</Form.Group>
		  </div>
        </div>

        <div className="row">
          <div className="col-md-8 text-right">
            <button className="btn btnCustomerProfileN btn-primary">
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

export default SetupForm;
