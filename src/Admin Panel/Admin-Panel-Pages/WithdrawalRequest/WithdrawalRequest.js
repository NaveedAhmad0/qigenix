import axios from "axios";
import React, { useEffect, useState } from "react";
// import AdminTable from "../../Admin-Panel-Components/Admin-Panel-Table/AdminTable";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Edit from "../../../assets/logo/K Live Pay.png";
import { useHistory } from "react-router-dom";
import API from "../../../backend";
import ClipLoader from "react-spinners/ClipLoader";

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

const WithdrawalRequest = () => {
	const history = useHistory();
	const [ittems, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	console.log("items is", ittems);
	// const edit = <faCake />;
	useEffect(() => {
		const getUserDetails = async () => {
			try {
				await axios.get(`${API}/admin/withdraw-request`).then((response) => {
					const sample = [];

					for (let i = 0; i < response.data.length; i += 1) {
						sample.push({
							id: response.data[i].id,
							Name: response.data[i].BankDetails.Name,
							AccountNumber: response.data[i].BankDetails.AccountNumber,
							status:
								response.data[i].status === true ? "completed" : "pending",
							branchredeem: response.data[i].BankDetails.BankName,
							redemptiondate: response.data[i].AccountNumber,
							referalNumber: response.data[i].ReferalNumber,
						});
					}
					setItems(sample);
					setLoading(false);
					setTimeout(() => {
						setLoading(false);
					}, 3000);
					console.log(response.data);
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
			text: "ID",
			sort: true,
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "Name",
			text: "Merchant Name",
			classes: "deal-row-2",

			headerClasses: "deal-header",
		},

		{
			dataField: "AccountNumber",
			text: "Account Number",
			classes: "deal-row",
			headerClasses: "deal-header",
		},
		{
			dataField: "branchredeem",
			text: "Bank Name",
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
			isDummyField: true,
			text: "Edit role",
			headerClasses: "deal-header",
			formatter: (cellContent, row) => {
				return customFunction(cellContent, row);
			},
		},
	];
	const customFunction = (cellContent, row) => {
		return (
			<h5>
				{/* <Link to="/admin/getUserProfile"> */}
				<button
					alt="issueimageload"
					className="cursor-pointer btn btn-success"
					// src={Edit}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/admin/WithdrawalDetails",
							state: { ReferenceId: row.referalNumber },
						});
						// console.log(row.email);
					}}>
					view
				</button>
				{/* </Link> */}
			</h5>
		);
	};
	console.log("list of item", ittems);
	// list.map((list)=>{})

	return (
		<div>
			<h2 className="text-primary bw-bold">Withdrawal Requests</h2>

			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
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
														<h3>Search</h3>
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
															headerClasses={{ backgroundColor: "red" }}
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
			)}
		</div>
	);
};

export default WithdrawalRequest;
