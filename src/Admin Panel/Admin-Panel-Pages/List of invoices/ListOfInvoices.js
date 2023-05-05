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
import "./ListOfInvoices.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ListOfInvoice() {
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
				url: `https://qigenix.ixiono.com/apis/admin/getAllInvoices`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data);
					setFiltered(response.data);
				})
				.catch(function (error) {
					console.log(error.response.data);
				});
		} catch (error) {
			console.log(error.response.data);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {}, [tableRowsData]);

	useEffect(() => {
		const result = tableRowsData?.filter((tables) => {
			return tables.company.toLowerCase().match(search.toLowerCase());
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
			name: "Invoice Id",
			selector: "invoice_id",
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
							pathname: "/admin/device-details",
							state: { details: row },
						});
					}}></i>,
				<i
					class="fa-solid fa-trash text-danger mx-2"
					style={{ cursor: "pointer" }}></i>,
			],
		},
		{
			name: "Name",
			selector: "firstName",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Primary Contact",
			selector: "mobile",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Primary Email",
			selector: "email",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Device Id",
			selector: "device_id",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "device_name",
			selector: "device_name",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "device_brand",
			selector: "device_brand",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "active",
			cell: (d) => [
				<div class="form-check form-switch text-center">
					<input
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckChecked"
						checked={d.status === "1" ? false : true}></input>
				</div>,
			],
			sortable: false,
		},
		{
			name: "Groups",
			cell: (d) => [
				<button
					className="btn"
					style={{
						background: "#FFFFFF",
						border: "1px solid #EFEFEF",
						color: "#515151",
					}}>
					{d.groups}
				</button>,
			],
			sortable: false,
		},
		{
			name: "Date Created",

			sortable: false,
			cell: (d) => {
				return moment(d.createdAt).local().format("DD-MM-YYYY hh:mm:ss ");
			},
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
											<Link to="/admin/add-device">
												<button className="btn btn-primary mr-2">
													<i class="fa-solid fa-plus"></i> Create New Invoice
												</button>
											</Link>
											<button className="btn btn-primary mr-2">
												<i class="fa-solid fa-upload"></i> Recurring Invoices
											</button>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<hr style={{ border: "1px #EAEDF1" }}></hr>
											<div className="row page-title-header">
												<div className="col-12">
													<div className="form-check d-flex justify-content-between">
														<label className="form-check-label text-muted">
															<input
																type="checkbox"
																className="form-check-input"
															/>
															<i className="input-helper"></i>
															Exclude Inactive Devices
														</label>
													</div>
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
																id="option2"
																autocomplete="off"
															/>{" "}
															Bulk Actions
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
export default ListOfInvoice;
