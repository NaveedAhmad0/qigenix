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
import AssignMerchToUser from "../Assign-Merchant-To-User/AssignMerchToUser";
import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./List.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DeviceList() {
	const { ExportCSVButton } = CSVExport;
	const [tableRowsData, setTableRowsData] = useState();
	const [search, setSearch] = useState("");
	const [Filtered, setFiltered] = useState([]);
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem("token");
	const history = useHistory();

	const [toggle, setToggle] = useState(true);

	const disableDevice = async (id,status) => {
		
		const obj={device_id:id,status:status=== '1' ? '0' : '1'}
		console.log(obj)

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/approve-device`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data:obj
			};
			axios(config)
				.then(function (response) {
					alert(response.data.message)
					setToggle(!toggle);
					// setTableRowsData(response.data);
				})
				.catch(function (error) {
					console.log(error.response.data);
				});
		} catch (error) {
			console.log(error.response.data);
		}
	};
	useEffect(() => {
		disableDevice();
	}, []);

	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `https://qigenix.ixiono.com/apis/admin/list-devices`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data);
					console.log(response.data)
				
					
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
		fetchData();
	}, [toggle]);

	useEffect(() => {
		const result = tableRowsData?.filter((tables) => {
			return tables.device_id.toLowerCase().match(search.toLowerCase());
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
			selector: "device_id",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "Device Name",
			selector: "device_name",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "Device Brand",
			selector: "device_brand",
			sortable: false,
		},
		{
			name: "active",
			cell: (row) => [
				<div class="form-check form-switch text-center">
					<input
						class="form-check-input"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckChecked"
						checked={row.status === '0' ? false : true}
						onClick={() => disableDevice(row.device_id,row.status)}></input>
				</div>,
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
													<i class="fa-solid fa-plus"></i> New Device
												</button>
											</Link>
											<button className="btn btn-primary mr-2">
												<i class="fa-solid fa-upload"></i> Import Devices
											</button>
										</div>
									</div>
									<div className="card">
										<div className="card-body">
											{/* <div className="row page-title-header">
                        <div className="col-6">
                          <h4>
                            <i class="fa-regular fa-file-lines me-2"></i>{" "}
                            Devices summary
                          </h4>
                        </div>
                      </div>
                      <div className="row page-title-header">
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p>
                            <span className="text-black">15 </span>Import
                            Devices
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p className="text-success">
                            {" "}
                            <span className="text-black">15 </span> Active
                            Devices
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p className="text-danger">
                            <span className="text-black">15 </span>Inactive
                            Devices
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
                            Devices
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

													<button
														type="button"
														className="btn btn-primary btn-small ms-4"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal">
														Assign Device
													</button>

													<div
														class="modal fade"
														id="exampleModal"
														tabindex="-1"
														aria-labelledby="exampleModalLabel"
														aria-hidden="true">
														<div class="modal-dialog">
															<div class="modal-content">
																<div class="modal-header">
																	<h5
																		class="modal-title"
																		id="exampleModalLabel">
																		Assign Device To User
																	</h5>
																	<button
																		type="button"
																		class="btn-close"
																		data-bs-dismiss="modal"
																		aria-label="Close"></button>
																</div>
																<div class="modal-body">
																	<AssignMerchToUser></AssignMerchToUser>
																</div>
															</div>
														</div>
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
export default DeviceList;
