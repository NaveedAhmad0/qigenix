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
import CustomerForm from "./ProfileForm";
import AdminForm from "../../Admin-Panel-Components/Admin-Panel-Form/Admin-Form";

function Profile() {
	const { ExportCSVButton } = CSVExport;

	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [ittems, setItems] = useState([]);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);
	const location = useLocation();
	// const details = location.state.details;

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
								<div className="col-md-9 m-auto">
									<div className="row m-auto">
										<div className="col-md-12 m-auto grid-margin">
											<div
												className="page-title-header"
												style={{ fontWeight: "500", fontSize: "17px" }}>
												Profile
											</div>

											<div className="card" id="#list-home-list">
												<div className="card-body">
													<ul className="nav nav-tabs nav-tabs-bordered pt-3 px-2">
														<li className="nav-item">
															<button
																className="nav-link active"
																data-bs-toggle="tab"
																data-bs-target="#MyTasks">
																Admin Details
															</button>
														</li>
													</ul>
													<div className="tab-content pt-2">
														<div
															className="tab-pane fade show active MyTasks"
															id="MyTasks">
															<CustomerForm />
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
export default Profile;
