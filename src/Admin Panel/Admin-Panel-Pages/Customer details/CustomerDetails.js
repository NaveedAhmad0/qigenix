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

import { useHistory } from "react-router-dom";
import API from "../../../backend";
import CustomerForm from "./CustomerDetailsForm";
import AdminForm from "../../Admin-Panel-Components/Admin-Panel-Form/Admin-Form";

function CustomerDetails() {
	const { ExportCSVButton } = CSVExport;

	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [ittems, setItems] = useState([]);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);

	const ProfileSection = () => {
		return (
			<div>
				<div className="page-title-header">Profile</div>
				<div className="card" id="#list-home-list">
					<div className="card-body">
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true">
									Customer Details
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false">
									Billing & Shipping
								</a>
							</li>
						</ul>

						<div className="row mt-2">
							<div className="col-12">
								<div className="form-check">
									<label className="form-check-label text-muted">
										<input type="checkbox" className="form-check-input" />
										<i className="input-helper"></i>
										Show primary contact full name on Invoices, Estimates,
										Payments, Credit Notes
									</label>
								</div>
							</div>
						</div>
						<CustomerForm />
					</div>
				</div>
			</div>
		);
	};
	const ProfileSection2 = () => {
		return (
			<div>
				<div className="page-title-header">blabla</div>
				<div className="card" id="#list-home-list">
					<div className="card-body">
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true">
									Customer Details
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false">
									Billing & Shipping
								</a>
							</li>
						</ul>

						<div className="row mt-2">
							<div className="col-12">
								<div className="form-check">
									<label className="form-check-label text-muted">
										<input type="checkbox" className="form-check-input" />
										<i className="input-helper"></i>
										Show primary contact full name on Invoices, Estimates,
										Payments, Credit Notes
									</label>
								</div>
							</div>
						</div>
						<CustomerForm />
					</div>
				</div>
			</div>
		);
	};

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
								<div className="col-md-4 grid-margin">
									<div className="page-title-header">#2 Bednar and Sons</div>
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
												href="#list-home"
												role="tab"
												aria-controls="home">
												Profile
											</a>
											<a
												className="list-group-item list-group-item-action"
												id="list-profile-list"
												data-toggle="list"
												href="#list-profile"
												role="tab"
												aria-controls="profile">
												Contents
											</a>
											<a
												className="list-group-item list-group-item-action"
												id="list-messages-list"
												data-toggle="list"
												href="#list-messages"
												role="tab"
												aria-controls="messages">
												Notes
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-8 grid-margin">
									<div className="tab-content" id="nav-tabContent">
										<div
											className="tab-pane fade show active"
											id="list-home"
											role="tabpanel"
											aria-labelledby="list-home-list">
											<ProfileSection />
										</div>
										<div
											className="tab-pane fade"
											id="list-profile"
											role="tabpanel"
											aria-labelledby="list-profile-list">
											<ProfileSection2 />
										</div>
										<div
											className="tab-pane fade"
											id="list-messages"
											role="tabpanel"
											aria-labelledby="list-messages-list">
											...
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
