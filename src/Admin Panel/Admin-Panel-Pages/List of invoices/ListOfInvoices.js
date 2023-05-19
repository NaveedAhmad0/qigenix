import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, {
	Search,
	CSVExport,
} from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./ListOfInvoices.css";
import moment from "moment";
import Pdf from "react-to-pdf";

function ListOfInvoice() {
	const ref = React.createRef();
	const { ExportCSVButton } = CSVExport;
	const [tableRowsData, setTableRowsData] = useState();
	const [search, setSearch] = useState("");
	const [Filtered, setFiltered] = useState([]);
	const [loading, setLoading] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [invId, setInvId] = useState([]);
	const [showData, setShowData] = useState([
		{
			id: "",
			invoice_id: "",
			customer_id: "",
			firstName: "",
			lastName: "",
			email: "",
			company: "",
			vat_number: "",
			mobile: "",
			website: "",
			groups: "",
			currency: "",
			language: "",
			address: "",
			city: "",
			state: "",
			zipcode: "",
			amount: null,
			tax_percentage: null,

			country: "",
			status: "",
			device_id: "",
			device_name: "",
			device_brand: "",
			device_license_key: "",
			createdAt: "",
			updatedAt: "",
		},
	]);

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

	const fetchInvoiceData = async () => {
		const obj = { invoice_id: invId };
		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/get-invoice`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: obj,
			};
			axios(config)
				.then(function (response) {
					console.log("respnosner", response);
					setShowData({
						invoice_id: response.data.invoice_id,
						customer_id: response.data.customer_id,
						firstName: response.data.firstName,
						lastName: response.data.lastName,
						email: response.data.email,
						mobile: response.data.mobile,
						currency: response.data.currency,
						amount: response.data.amount,
						address: response.data.address,
						device_id: response.data.device_id,
						device_name: response.data.device_name,
						tax_percentage: response.data.tax_percentage,
						device_brand: response.data.device_brand,
						device_license_key: response.data.device_license_key,
						createdAt: response.data.createdAt,
					});
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

	useEffect(() => {
		fetchInvoiceData();
	}, [invId]);

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
			name: "Tax (%)",
			selector: "tax_percentage",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Amount ($)",
			selector: "amount",
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
						// history.push({
						// 	pathname: "/admin/device-details",
						// 	state: { details: row },
						// });
						setInvId(row.invoice_id);
						setToggle(!toggle);
					}}></i>,
				// <i
				// 	class="fa-solid fa-trash text-danger mx-2"
				// 	style={{ cursor: "pointer" }}></i>,
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
						<h4>List Of Device Invoices</h4>
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
						<div className={toggle ? "col-7" : "invoiceDisplay"}>
							<div className="card" ref={ref}>
								<div className="card-body">
									<div className="col-12 grid-margin">
										<div className="row mt-4">
											<div className="col-6">
												<h5 className="text-primary float-left">
													{showData.invoice_id}
												</h5>
											</div>
											<div className="col-6 text-right">
												<p className="font-weight-bold">
													Bill To :
													<p className="text-primary">{showData.firstName}</p>
												</p>
												<p className="font-weight-bold">
													Name:{" "}
													<span className="font-weight-normal">
														{showData.firstName}
													</span>{" "}
												</p>
												<p className="font-weight-bold">
													Invoice Date:{" "}
													<span className="font-weight-normal">
														{showData.createdAt}
													</span>{" "}
												</p>
											</div>
										</div>
										<div className="row">
											<table class="table">
												<thead className="bg-dark text-white">
													<tr>
														<th scope="col">#</th>
														<th scope="col">Item</th>

														<th scope="col">Rate($)</th>
														<th scope="col">Tax(%)</th>
														<th scope="col">Amount($)</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>{showData.invoice_id}</td>

														<td>{showData.device_brand}</td>
														<td>{showData.amount}$</td>
														<td>{showData.tax_percentage}%</td>
														<td>{showData.amount}$</td>
													</tr>
												</tbody>
											</table>

											<table class="table table-bordered mt-5">
												<tr>
													<th scope="col" className="text-dark">
														Sub Total :
													</th>
													<td>
														{(Number(showData.amount) *
															Number(showData.tax_percentage)) /
															100 +
															Number(showData.amount)}
														$
													</td>
												</tr>
												<tr>
													<th className="text-dark">Total :</th>
													<td>
														{(Number(showData.amount) *
															Number(showData.tax_percentage)) /
															100 +
															Number(showData.amount)}
														$
													</td>
												</tr>
												<tr>
													<th className="text-danger">Amount Due :</th>
													<td>
														{(Number(showData.amount) *
															Number(showData.tax_percentage)) /
															100 +
															Number(showData.amount)}
														$
													</td>
												</tr>
											</table>

											<div className="row justify-content-between">
												<div className="col-6 ">
													<Pdf targetRef={ref} filename="invoice.pdf">
														{({ toPdf }) => (
															<button
																className="btn btn-success mt-4"
																onClick={toPdf}>
																<i class="fa-regular fa-file-pdf"></i> Generate
																Pdf
															</button>
														)}
													</Pdf>
													{/* <button className="btn btn-success mt-4">
														Print
													</button> */}
												</div>
												<div className="col-6">
													<button className="btn btn-success float-right mt-4">
														<i class="fa-solid fa-dollar-sign"></i> Payment
													</button>
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
export default ListOfInvoice;
