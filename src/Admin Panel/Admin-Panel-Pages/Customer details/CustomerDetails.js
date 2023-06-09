import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Form } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

import ToolkitProvider, {
	Search,
	CSVExport,
} from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory, useLocation } from "react-router-dom";
import API from "../../../backend";
import CustomerForm from "./CustomerDetailsForm";
import AdminForm from "../../Admin-Panel-Components/Admin-Panel-Form/Admin-Form";
import BillingForm from "./Billing Form/BillingForm";

function CustomerDetails() {
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
				<div>
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-3 grid-margin">
									<div
										className="page-title-header"
										style={{ fontWeight: "500", fontSize: "17px" }}>
										#{details.firstName} 
									</div>
									<div className="card">
										<div
											className="list-group list-group-flush"
											id="list-tab"
											role="tablist"
											style={{ borderRadius: "5px" }}>
											<a
												className="list-group-item list-group-item-action"
												id="list-home-list"
												data-toggle="list"
												href="/admin/CustomerDetails"
												role="tab"
												aria-controls="home">
											<i class="fa-regular fa-user text-primary me-2"></i>Customer	Details
											</a>
											<a
												className="list-group-item list-group-item-action"
												id="list-profile-list"
												data-toggle="list"
												
												role="tab"
												aria-controls="profile">
											<i class="fa-solid fa-file-pen me-2 text-secondary"></i>	Contents
											</a>
											<a
												className="list-group-item list-group-item-action"
												id="list-messages-list"
												data-toggle="list"
												
												role="tab"
												aria-controls="messages">
											<i class="fa-regular fa-file-lines me-2 text-secondary"></i>	Notes
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-9">
									<div className="row m-auto">
										<div className="col-md-12 m-auto grid-margin">
											<div
												className="page-title-header"
												style={{ fontWeight: "500", fontSize: "17px" }}>
												 Details
											</div>

											<div className="card" id="#list-home-list">
												<div className="card-body">
													<ul className="nav nav-tabs nav-tabs-bordered pt-3 px-2">
														<li className="nav-item">
															<button
																className="nav-link active"
																data-bs-toggle="tab"
																data-bs-target="#MyTasks">
																Customer Details
															</button>
														</li>
														<li className="nav-item">
															<button
																className="nav-link"
																data-bs-toggle="tab"
																data-bs-target="#MyProjects">
																Billing & shipping
															</button>
														</li>
													</ul>
													<div className="tab-content pt-2">
														<div
															className="tab-pane fade show active MyTasks"
															id="MyTasks">
															<CustomerForm />
														</div>

														<div
															className="tab-pane fade MyProjects pt-3"
															id="MyProjects">
															<BillingForm />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="row"></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default CustomerDetails;
