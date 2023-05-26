import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./ListOfTokens.css";

function ListOfInvoice() {
	const [tableRowsData, setTableRowsData] = useState([]);

	const [search, setSearch] = useState("");
	const [Filtered, setFiltered] = useState([]);
	const [loading, setLoading] = useState(false);
	const [toggle2, setToggle2] = useState(true);
	const [toggle, setToggle] = useState(false);

	const adminId = localStorage.getItem("adminId");
	const token = localStorage.getItem("token");
	const history = useHistory();

	const disableToken = async (token_id, status) => {
		const obj = {
			senderID: adminId,
			token_id: token_id,
			tokenStatus: status === "0" ? "1" : "0",
		};

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/close-reopen`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: obj,
			};
			axios(config)
				.then(function (response) {
					setToggle2(!toggle2);
					alert(response.data.message);
				})
				.catch(function (error) {
					console.log(error.response.data);
				});
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `${API}/admin/getAllTokens`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data.totalResponse);
					console.log(response.data.totalResponse);
					setFiltered(response.data.totalResponse);
				})
				.catch(function (error) {
					console.log(error.data.totalResponse);
				});
		} catch (error) {
			console.log(error.data.totalResponse);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchData();
	}, [toggle2]);

	useEffect(() => {}, [tableRowsData]);

	useEffect(() => {
		const result = tableRowsData?.filter((tables) => {
			return tables.token_id.toLowerCase().match(search.toLowerCase());
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
			name: "Ticket Id",
			selector: "token_id",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "Customer Id",
			selector: "customer_id",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "First Name",
			selector: "firstName",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
			// cell: (d) => {
			// 	return moment(d.createdAt).local().format("DD-MM-YYYY hh:mm:ss ");
			// },
		},
		{
			name: "Subject",
			selector: "subject",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "Active",
			cell: (row) => [
				<div class="form-check form-switch text-center">
					<input
						class="form-check-input"
						type="checkbox"
						role="switch"
						name="status"
						id="flexSwitchCheckChecked"
						checked={row.tokenStatus === "1" ? true : false}
						onClick={() => disableToken(row.token_id, row.tokenStatus)}></input>
				</div>,
			],
			sortable: false,
		},
		{
			name: "Ticket Status",
			// selector: "tokenStatus",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
			cell: (row) => [
				<span>{row.tokenStatus === "1" ? "Open" : "Closed"}</span>,
			],
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
							pathname: "/admin/token-by-Id",
							state: { custId: row.customer_id },
						});
					}}></i>,
				// <i
				// 	class="fa-solid fa-trash text-danger mx-2"
				// 	style={{ cursor: "pointer" }}></i>,
			],
		},

		// {
		// 	name: "Product",
		// 	style: {
		// 		fontSize: "18px",
		// 	},
		// 	cell: (row) => [
		// 		<p
		// 			onClick={() => {
		// 				setToggle(!toggle);
		// 				setRowData(row);
		// 			}}
		// 			class="badge bg-warning"
		// 			style={{ cursor: "pointer" }}>
		// 			{row.products.length}
		// 		</p>,
		// 	],
		// },
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
						<h4>List Of Tokens</h4>
						<div className={toggle ? "col-md-5" : "col-12"}>
							<div className="row">
								<div className="col-md-12 grid-margin">
									{/* <div className="row page-title-header">
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
									</div> */}
									<div className="card">
										<div className="card-body">
											{/* <hr style={{ border: "1px #EAEDF1" }}></hr> */}
											<div className="row page-title-header">
												<div className="col-12">
													{/* <div className="form-check d-flex justify-content-between">
														<label className="form-check-label text-muted">
															<input
																type="checkbox"
																className="form-check-input"
															/>
															<i className="input-helper"></i>
															Exclude Inactive Devices
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
														{/* <label
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
														</label> */}
													
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
															placeholder="Search By Id"
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
												highlightOnHover
												subHeader
												customStyles={customStyles}
												
											/>
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
export default ListOfInvoice;
