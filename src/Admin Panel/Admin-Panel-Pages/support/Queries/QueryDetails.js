import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { CSVExport } from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";

// import BillingForm from "./Billing Form/BillingForm";

function QueryDetails() {
	const { ExportCSVButton } = CSVExport;

	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [ittems, setItems] = useState([]);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);
	const location = useLocation();
	const details = location.state.details;

	// list.map((list)=>{})
	return (
		<div>
			{/* <MerchantForm /> */}
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="col-12 grid-margin" style={{ background: "white" }}>
				<h4 className="p-3">Query</h4>
				<div className="row">
				  <div className="card">
					<div className="card-body">
					  <div className="col-12 ">
						<h4 className="text-primary">
						<i class="fa-solid fa-user me-2"></i>  Customer Name : Customer ID
						</h4>
						<div className="row mt-4">
						  <table class="table table-responsive" >
							<thead className="bg-dark text-white">
							  <tr>
								<th scope="col">Query</th>
								<th scope="col"> Created Date</th>
								<th className="ps-5">Action</th>
							  </tr>
							</thead>
		  
							<tbody>
							 
								  <tr>
									<td  className="p-2 w-50">I want to change my password</td>
									<td >
									 22:09:10 09-05-23
									</td>
									<td className="ps-4">
										<button className="btn btn-primary">Approve</button>
										<button className="btn btn-danger ms-2">Decline</button>

									</td>
								  </tr>
								
							</tbody>
						  </table>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			)}
		</div>
	);
}
export default QueryDetails;
