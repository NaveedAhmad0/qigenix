import React, { useEffect, useState } from "react";
// import { Line, Doughnut, Bar, Radar } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import cardPic from "../../../assets/images/dashboard/Vector(1).png";
import axios from "axios";
import API from "../../../backend";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUsers } from "@fortawesome/free-solid-svg-icons";

const { SearchBar } = Search;

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';
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
const products = [
	{
		id: 1003,
		code: "5Q2H-MWXF-36HE",
		purchasedate: "Jul. 8, 2022",
		status: "used",
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
];

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

function AdminDashboard() {
	const history = useHistory();
	const [loading, setLoading] = useState(true);
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
	];

	const [totalPaidWithdrawAmount, setTotalPaidWithdrawAmount] = useState("");
	const [totalPendingWithdrawAmount, setTotalPendingWithdrawAmount] =
		useState("");
	const [usersCount, setUsersCount] = useState("");
	const [merchantCount, setMerchantCount] = useState("");

	// useEffect(() => {
	// 	axios.get(`${API}/admin/TotalCount`).then((res) => {
	// 		setTotalPaidWithdrawAmount(res.data.Total_paid_WithdrawAmount);
	// 		setTotalPendingWithdrawAmount(res.data.Total_pending_WithdrawAmount);
	// 		setUsersCount(res.data.users_count);
	// 		setMerchantCount(res.data.merchant_count);
	// 	});
	// }, []);

	return (
		<div>
			<div className="row page-title-header">
				<div className="col-12">
					<div className="page-header">
						<h4 className="pageUser-title">Admin Dashboard</h4>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 grid-margin">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin threeCards">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<h6 className="mb-0 font-weight-medium text-white">
												Amount Paid
											</h6>
											<h5 className="mb-0 font-weight-semibold">
												$ {totalPaidWithdrawAmount}
											</h5>

											{/* <p className="mb-0 text-muted">+138.97(+0.54%)</p> */}
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												<img src={cardPic} alt="cardpic" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin ">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<h6 className="mb-0 font-weight-medium text-white">
												Amount Pending
											</h6>
											<h5 className="mb-0 font-weight-semibold">
												$ {totalPendingWithdrawAmount}
											</h5>

											{/* <p className="mb-0 text-muted">+138.97(+0.54%)</p> */}
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												{/* <img src={cardPic} alt="cardpic" /> */}
												<FontAwesomeIcon size="2x" icon={faDollarSign} />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<h6 className="mb-0 font-weight-medium text-white">
												Total Users
											</h6>
											<h5 className="mb-0 font-weight-semibold">
												{usersCount}
											</h5>
											{/* <p className="mb-0 text-muted">+57.62(+0.76%)</p> */}
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												{/* <img src={cardPic} alt="cardpic" /> */}
												<FontAwesomeIcon size="2x" icon={faUsers} />
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin">
									<div className="d-flex newboxcss">
										<div className="wrapper py-2">
											<h6 className="mb-0 font-weight-medium text-white">
												Total Merchants
											</h6>
											<h5 className="mb-0 font-weight-semibold">
												{merchantCount}
											</h5>
											{/* <p className="mb-0 text-muted">+138.97(+0.54%)</p> */}
										</div>
										<div className="wrapper my-auto ml-auto ml-lg-4">
											<div className="">
												{/* <img src={cardPic} alt="cardpic" /> */}
												<FontAwesomeIcon size="2x" icon={faUsers} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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
														placeholder="Search..."
													/>
													<hr />
													<BootstrapTable
														{...props.baseProps}
														pagination={paginationFactory(options)}
													/>
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
	);
}
export default AdminDashboard;
