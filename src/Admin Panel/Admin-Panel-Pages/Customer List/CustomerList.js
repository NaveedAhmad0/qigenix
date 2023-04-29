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

function CustomerList() {
	const { ExportCSVButton } = CSVExport;

	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [ittems, setItems] = useState([]);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);

	// useEffect(() => {
	// 	const getUserDetails = async () => {
	// 		try {
	// 			await axios
	// 				.get(`${API}/admin/sandBox-transactionList`)
	// 				.then((response) => {
	// 					// if (response == 200) {
	// 					console.log(response.data);
	// 					const sample = [];
	// 					for (let i = 0; i < response.data.length; i += 1) {
	// 						sample.push({
	// 							id: response.data[i].id,
	// 							transactionType: response.data[i].transactionType,
	// 							payeeProxyId: response.data[i].payeeProxyId,
	// 							payeeProxyType: response.data[i].payeeProxyType,
	// 							payeeAccountNumber: response.data[i].payeeAccountNumber,
	// 							payeeName: response.data[i].payeeName,
	// 							payerAccountNumber: response.data[i].payerAccountNumber,
	// 							payerName: response.data[i].payerName,
	// 							amount: response.data[i].amount,
	// 							transactionId: response.data[i].transactionId,
	// 							billPaymentRef1: response.data[i].billPaymentRef1,
	// 							billPaymentRef2: response.data[i].billPaymentRef2,
	// 							billPaymentRef3: response.data[i].billPaymentRef3,
	// 						});
	// 						// setInvoiceRefId(response.data[i].t_id);
	// 					}
	// 					// console.log("babla", response.data.data.length);
	// 					setItems(sample);
	// 					setLoading(false);
	// 					setTimeout(() => {
	// 						setLoading(false);
	// 					}, 3000);
	// 					// }
	// 					// const listItems = response.json();
	// 				});
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	(async () => await getUserDetails())();
	// }, []);

	const { SearchBar } = Search;

	const columns = [
		{
			dataField: "id",
			text: "Order number",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "code",
			text: "Voucher code",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "purchasedate",
			text: "Purchase date",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "status",
			text: "Status",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "branchredeem",
			text: "Branch redeemed",
			headerClasses: "deal-header",
		},
		{
			dataField: "redemptiondate",
			text: "Redemption date",
			headerClasses: "deal-header",
		},
	];
	const products = [];
	// list.map((list)=>{})
	products.push(
		{
			id: 1212,
			code: "ssfsd",
			purchasedate: "Jul. 8, 2022",
			status: (
				<input
					type="radio"
					id="customRadioInline1"
					name="customRadioInline1"
					className="custom-control-input"
				/>
			),
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		},

		{
			id: 1004,
			code: "5Q2H-MWXF-36HE",
			purchasedate: "Jul. 8, 2022",
			status: "used",
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		},
		{
			id: 1005,
			code: "5Q2H-MWXF-36HE",
			purchasedate: "Jul. 8, 2022",
			status: "used",
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		},
		{
			id: 1006,
			code: "5Q2H-MWXF-36HE",
			purchasedate: "Jul. 8, 2022",
			status: "used",
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		},
		{
			id: 1007,
			code: "5Q2H-MWXF-36HE",
			purchasedate: "Jul. 8, 2022",
			status: "used",
			branchredeem: "Glorietta - GLO101",
			redemptiondate: "Jul. 10, 2022 at 4:30pm",
		}
	);
	const options = {
		paginationSize: 4,
		sizePerPage: 5,
		totalSize: products.length,
		sizePerPageList: [
			{
				text: "5",
				value: 5,
			},
			{
				text: "10",
				value: 10,
			},
			{
				text: "All",
				value: products.length,
			},
		],
		pageStartIndex: 1,
		alwaysShowAllBtns: true, // Always show next and previous button
		withFirstAndLast: false, // Hide the going to First and Last page button
		hideSizePerPage: true, // Hide the sizePerPage dropdown always
		hidePageListOnlyOnePage: true, // Hide the pagination list when only one page

		showTotal: true,

		disablePageTitle: true,
	};

	console.log("list of item", ittems);
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					href
					alt="issueimageload"
					className="btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/TransactionDetails",
							state: {
								id: row,
							},
						});
						console.log("sent email", row.date);
					}}>
					view
				</button>

				{/* </Link> */}
			</h5>
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
								<div className="col-md-12 grid-margin">
									<div className="row page-title-header">
										<div className="col-6">
											<button className="btn btn-primary mr-2">
												New PAyment
											</button>
											<button className="btn btn-primary mr-2">
												New PAyment
											</button>
											<button className="btn btn-outline-secondary mr-2">
												New PAyment
											</button>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											<div className="row page-title-header">
												<div className="col-6">
													<h4>Customers summary</h4>
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
											</div>
											<div className="row page-title-header">
												<div className="col-6">
													<div className="form-check">
														<label className="form-check-label text-muted">
															<input
																type="checkbox"
																className="form-check-input"
															/>
															<i className="input-helper"></i>
															Exclude Inactive Customers
														</label>
													</div>
												</div>
											</div>
											<div className="table-responsive">
												<ToolkitProvider
													keyField="id"
													data={products}
													columns={columns}
													exportCSV
													search>
													{(props) => (
														<div>
															<div className="row justify-content-between">
																{/* <div
																	className="ml-1 col-2 border"
																	style={{ width: "50px" }}>
																	<ExportCSVButton
																		{...props.csvProps}
																		style={{ width: "50px" }}>
																		Export
																	</ExportCSVButton>
																</div> */}
																<div className="col-2">
																	<div
																		className="btn-group btn-group-toggle"
																		data-toggle="buttons">
																		<label className="btn btn-secondary active">
																			<ExportCSVButton {...props.csvProps}>
																				Export
																			</ExportCSVButton>
																		</label>
																		<label className="btn btn-secondary">
																			<input
																				type="radio"
																				name="options"
																				id="option2"
																				autocomplete="off"
																			/>{" "}
																			Radio
																		</label>
																		<label className="btn btn-secondary">
																			<input
																				type="radio"
																				name="options"
																				id="option3"
																				autocomplete="off"
																			/>{" "}
																			Radio
																		</label>
																	</div>
																</div>

																<div className="col-2">
																	<SearchBar
																		{...props.searchProps}
																		className="custome-search-field"
																		style={{ color: "white" }}
																		delay={500}
																		placeholder="Search ..."
																	/>
																</div>
															</div>
															<hr />
															<BootstrapTable
																{...props.baseProps}
																headerClasses={{ backgroundColor: "red" }}
																pagination={paginationFactory(options)}
															/>
															{/* {ittems.length > 0 ? (
															) : (
																<div className="text-center text-danger">
																	<h4>No Transactoin History</h4>
																</div>
															)} */}
														</div>
													)}
												</ToolkitProvider>
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
export default CustomerList;
