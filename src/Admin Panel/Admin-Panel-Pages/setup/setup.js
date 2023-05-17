import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useState } from "react";

import ToolkitProvider, {
	Search,
	CSVExport,
} from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory, useLocation } from "react-router-dom";
import API from "../../../backend";
import SetupForm from './setupDetailsForm'


function Setup() {
	const { ExportCSVButton } = CSVExport;

	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const location = useLocation();


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
										Settings
										
									</div>
									<div className="card">
										<div
											className="list-group list-group-flush"
											id="list-tab"
											role="tablist"
											style={{ borderRadius: "5px" }}>
											<a
												className="list-group-item list-group-item-action text-primary"
												id="list-home-list"
												data-toggle="list"
												href="#list-home"
												role="tab"
												aria-controls="home">
											<i class="fa-solid fa-gear me-3"></i>	General
											</a>
											<a
												className="list-group-item list-group-item-action text-secondary"
												id="list-profile-list"
												data-toggle="list"
												href="#list-profile"
												role="tab"
												aria-controls="profile">
												<i class="fa-solid fa-bars-staggered me-2"></i> Company Information
												<span class="badge rounded-pill bg-secondary ms-2 text-dark">1</span>
											</a>
											<a
												className="list-group-item list-group-item-action text-secondary"
												id="list-messages-list"
												data-toggle="list"
												href="#list-messages"
												role="tab"
												aria-controls="messages">
												<i class="fa-regular fa-file-pdf me-2"></i> PDF
												<span class="badge rounded-pill bg-secondary ms-2 text-dark">1</span>
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
												Profile
											</div>

											<div className="card" id="#list-home-list">
												<div className="card-body">
													
													<div>
														<div
															className=""
															id="MyTasks">
															<SetupForm></SetupForm>
														</div>

														
													</div>
												</div>
											</div>
										</div>
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
export default Setup;
