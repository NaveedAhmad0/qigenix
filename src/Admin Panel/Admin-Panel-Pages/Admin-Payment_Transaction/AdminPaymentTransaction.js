import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory } from "react-router-dom";
import API from "../../../backend";
const options = {
	paginationSize: 4,
	pageStartIndex: 1,
	alwaysShowAllBtns: true, // Always show next and previous button
	withFirstAndLast: false, // Hide the going to First and Last page button
	hideSizePerPage: true, // Hide the sizePerPage dropdown always
	hidePageListOnlyOnePage: true, // Hide the pagination list when only one page

	showTotal: false,

	disablePageTitle: true,
};

function AdminPaymentTransaction() {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [ittems, setItems] = useState([]);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	console.log("items is", ittems);

	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios
					.get(`${API}/admin/sandBox-transactionList`)
					.then((response) => {
						// if (response == 200) {
						console.log(response.data);
						const sample = [];
						for (let i = 0; i < response.data.length; i += 1) {
							sample.push({
								id: response.data[i].id,
								transactionType: response.data[i].transactionType,
								payeeProxyId: response.data[i].payeeProxyId,
								payeeProxyType: response.data[i].payeeProxyType,
								payeeAccountNumber: response.data[i].payeeAccountNumber,
								payeeName: response.data[i].payeeName,
								payerAccountNumber: response.data[i].payerAccountNumber,
								payerName: response.data[i].payerName,
								amount: response.data[i].amount,
								transactionId: response.data[i].transactionId,
								billPaymentRef1: response.data[i].billPaymentRef1,
								billPaymentRef2: response.data[i].billPaymentRef2,
								billPaymentRef3: response.data[i].billPaymentRef3,
							});
							// setInvoiceRefId(response.data[i].t_id);
						}
						// console.log("babla", response.data.data.length);
						setItems(sample);
						setLoading(false);
						setTimeout(() => {
							setLoading(false);
						}, 3000);
						// }
						// const listItems = response.json();
					});
			} catch (error) {
				console.log(error);
			}
		};
		(async () => await getUserDetails())();
	}, []);

	const { SearchBar } = Search;

	const columns = [
		{
			dataField: "id",
			text: "Id",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "payerAccountNumber",
			text: "User Account Number",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "payerName",
			text: "Payer Name",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "amount",
			text: "Amount",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "transactionType",
			text: "Transaction Type",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "View",
			isDummyField: true,
			text: "Transaction Details",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
		// {
		// 	dataField: "name",
		// 	isDummyField: true,
		// 	text: "Edit role",
		// 	headerClasses: "deal-header",
		// 	formatter: (cellContent, row) => {
		// 		return customFunction(cellContent, row);
		// 	},
		// },
	];
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
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="page-title">Transaction History</h4>
					</div>
				</div>
			</div>

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
									<div className="card">
										<div className="card-body">
											<div className="table-responsive">
												<ToolkitProvider
													keyField="id"
													data={ittems}
													columns={columns}
													search>
													{(props) => (
														<div>
															<h3>Search:</h3>
															<SearchBar
																{...props.searchProps}
																className="custome-search-field"
																style={{ color: "white" }}
																delay={500}
																placeholder="Search ..."
															/>
															<hr />
															{ittems.length > 0 ? (
																<BootstrapTable
																	{...props.baseProps}
																	headerClasses={{ backgroundColor: "red" }}
																	pagination={paginationFactory(options)}
																/>
															) : (
																<div className="text-center text-danger">
																	<h4>No Transactoin History</h4>
																</div>
															)}
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
export default AdminPaymentTransaction;
