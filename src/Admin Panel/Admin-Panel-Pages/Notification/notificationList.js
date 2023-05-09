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
import DataTable from "react-data-table-component";
import moment from "moment";

import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./List.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddNotification from "./Add Notification/addNotification";

function CustomerList() {
	const { ExportCSVButton } = CSVExport;
	const [tableRowsData, setTableRowsData] = useState();
	const [search, setSearch] = useState("");
	const [Filtered, setFiltered] = useState([]);
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem("token");
	const history = useHistory();

	

	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `https://qigenix.ixiono.com/apis/admin/getAllNotifications`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data.totalResponse);
					setFiltered(response.data.totalResponse);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);


	useEffect(() => {}, [tableRowsData]);

	useEffect(() => {
		const result = tableRowsData?.filter((tables) => {
			return tables.customer_id.toLowerCase().match(search.toLowerCase());
		});
		setFiltered(result);
	}, [search]);

	const customStyles = {
		headCells: {
			style: {
				borderRight: "0.1rem solid #D9D9D9 !important",
				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "12px",
				lineHeight: "18px",
			},
		},
		row: {
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "12px",
			lineHeight: "18px",
		},
	};

	const headerResponsive = [
		{
			name: "#",
			selector: "customer_id",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "Name",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
			cell: (row) => [
				<div>
					<span>{row.firstName}</span> <br></br>
					<span>{row.lastName}</span>
				</div>,
			],
		},
		{
			name: "Email",
			selector: "email",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Count",
			selector: "count",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Action",
			style: {
				fontSize: "18px",
			},
			cell: (row) => [
				<i
					class="fa-solid fa-circle-info text-primary mx-2"
					style={{ cursor: "pointer" }}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/NotificationDetails",
							state: { details: row },
						});
					}}></i>,
				<i
					class="fa-solid fa-trash text-danger mx-2"
					style={{ cursor: "pointer" }}></i>,
			],
		},
	];

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
								<div className="col-md-12 grid-margin">
									<div className="row page-title-header">
										<div className="col-12">
											{/* <Link to="/admin/addCustomer">
												<button className="btn btn-primary mr-2">
													<i class="fa-solid fa-plus"></i>Send New Notification
												</button>
											</Link> */}
											<button
												type="button"
												className="btn btn-primary btn-small ms-4"
												data-bs-toggle="modal"
												data-bs-target="#exampleModal">
												<i className="fa-solid fa-plus"></i>Send New
												Notification
											</button>

											<div
												className="modal fade"
												id="exampleModal"
												tabindex="-1"
												aria-labelledby="exampleModalLabel"
												aria-hidden="true">
												<div className="modal-dialog">
													<div className="modal-content">
														<div className="modal-header">
															<h5
																className="modal-title"
																id="exampleModalLabel">
																Send New Notification
															</h5>
															<button
																type="button"
																className="btn-close"
																data-bs-dismiss="modal"
																aria-label="Close"></button>
														</div>
														<div className="modal-body">
															<AddNotification />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											{/* <div className="row page-title-header">
												<div className="col-6">
													<h4>
														<i class="fa-regular fa-file-lines me-2"></i>{" "}
														Customers summary
													</h4>
												</div>
											</div>
											<div className="row page-title-header">
												<div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
													<p>
														<span className="text-black">15 </span>Import
														Customers
													</p>
												</div>
												<div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
													<p className="text-success">
														{" "}
														<span className="text-black">15 </span> Active
														Customers
													</p>
												</div>
												<div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
													<p className="text-danger">
														<span className="text-black">15 </span>Inactive
														Customers
													</p>
												</div>
												<div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
													<p className="text-primary">
														<span className="text-black">15 </span>Active
														Contacts
													</p>
												</div>
												<div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
													<p className="text-danger">
														<span className="text-black">15 </span>Inactive
														Customers
													</p>
												</div>
												<div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
													<p>
														<span className="text-black">15 </span>Contacts
														Logged..
													</p>
												</div>
											</div> */}
											{/* <hr style={{ border: "1px #EAEDF1" }}></hr> */}
											<div className="row page-title-header">
												<div className="col-12">
													{/* <div className="form-check">
														<label className="form-check-label text-muted">
															<input
																type="checkbox"
																className="form-check-input"
															/>
															<i className="input-helper"></i>
															Exclude Inactive Customers
														</label>
													</div> */}
													<div
														class="btn-group btn-group-toggle"
														data-toggle="buttons">
														<label
															class="btn active"
															style={{
																borderRight: "1px solid #D9D9D9",
																color: "#475569",
																fontFamily: "Roboto",
																fontStyle: "normal",
																fontWeight: "500",
																fontSize: "12px",
																lineHeight: "14px",
															}}>
															<input
																type="radio"
																name="options"
																id="option1"
																autocomplete="off"
																checked
															/>{" "}
															Export
														</label>

														<label
															class="btn"
															style={{
																borderRight: "1px solid #D9D9D9",
																color: "#475569",
																fontFamily: "Roboto",
																fontStyle: "normal",
																fontWeight: "500",
																fontSize: "12px",
																lineHeight: "14px",
															}}>
															<input
																type="radio"
																name="options"
																id="option3"
																autocomplete="off"
															/>
															<i class="fa-solid fa-rotate"></i>
														</label>
													</div>

													<div
														class="btn-group btn-group-toggle me-4"
														data-toggle="buttons"
														style={{ float: "right" }}>
														<label
															class="btn active"
															style={{
																borderRight: "1px solid #D9D9D9",

																color: "#475569",
																fontSize: "12px",
																lineHeight: "14px",
															}}>
															<i class="fa-solid fa-magnifying-glass"></i>
														</label>

														<input
															type="text"
															style={{
																borderRight: "1px solid #D9D9D9",
																color: "#475569",
																fontFamily: "Roboto",
																fontStyle: "normal",
																fontWeight: "500",
																fontSize: "12px",
																lineHeight: "14px",
																border: "none",
																width: "100%",
																textAlign: "center",
															}}
															placeholder="Search..."
															value={search}
															onChange={(e) => {
																setSearch(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>

											<DataTable
												columns={headerResponsive}
												data={Filtered}
												pagination={20}
												selectableRows
												highlightOnHover
												subHeader
												customStyles={customStyles}
												paginationComponentOptions={{
													rowsPerPageText: "Showing 1 to 6 of 12 entries:",
												}}
												// subHeaderComponent={
												//   <div
												//     class="btn-group btn-group-toggle me-4"
												//     data-toggle="buttons"
												//   >
												//     <label
												//       class="btn active"
												//       style={{
												//         borderRight: "1px solid #D9D9D9",
												//         color: "#475569",
												//         fontSize: "12px",
												//         lineHeight: "14px",
												//       }}
												//     >
												//       <i class="fa-solid fa-magnifying-glass"></i>
												//     </label>

												//     <input
												//       type="text"
												//       style={{
												//         borderRight: "1px solid #D9D9D9",
												//         color: "#475569",
												//         fontFamily: "Roboto",
												//         fontStyle: "normal",
												//         fontWeight: "500",
												//         fontSize: "12px",
												//         lineHeight: "14px",
												//         border: "none",
												//         width: "100%",
												//         textAlign: "center",
												//       }}
												//       placeholder="Search..."
												//       value={search}
												//       onChange={(e) => {
												//         setSearch(e.target.value);
												//       }}
												//     />
												//   </div>
												// }
											/>
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
export default CustomerList;
