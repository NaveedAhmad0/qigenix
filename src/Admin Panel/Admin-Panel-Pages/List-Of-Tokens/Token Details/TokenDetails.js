import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./TokenDetails.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import API from "../../../../backend";
import moment from "moment";

const TokenDetails = () => {
	const [tableRowsData, setTableRowsData] = useState([]);
	const [subject, setSubject] = useState({});
	const [message, setMessage] = useState("");
	const [toggle, setToggle] = useState(false);

	const location = useLocation();
	const token = localStorage.getItem("token");
	const adminId = localStorage.getItem("adminId");
	const tokenId = location.state.tokenId;

	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `${API}/admin/getTokenDetails/${tokenId}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data.tokens.tokenMessages);

					setSubject(response.data.tokens);
					console.log(response.data.tokens.tokenMessages);
				})
				.catch(function (error) {
					console.log(error.data.tokens.tokenMessages);
				});
		} catch (error) {
			console.log(error.data.tokens.tokenMessages);
		}
	};
	const sendMessage = async (event) => {
		event.preventDefault();
		const data = {
			senderID: adminId,
			token_id: tokenId,
			message: message,
		};
		try {
			var config = {
				method: "post",
				url: `${API}/admin/send-token-message`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: data,
			};
			axios(config)
				.then(function (response) {
					alert(response.data.message);
					console.log(response.data.message);
					setToggle(!toggle);
					setMessage("");
				})
				.catch(function (error) {
					console.log(error.response.data.tokens.tokenMessages);
				});
		} catch (error) {
			console.log(error.response.data.tokens.tokenMessages);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchData();
	}, [toggle]);

	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-12 d-flex justify-content-between">
						<h4 className="loginTittle text-left">Customer Support</h4>
						{/* <img src={logo} alt="" className="loginLogo" /> */}
					</div>
					<div className="row mt-5"></div>
					<div className="col-lg-8 ">
						<h5 className="text-primary">#{subject.firstName}'s Messages</h5>
						<div className="auth-form-light messageBox loginForm text-left py-5 px-4 px-sm-5">
							<h5 className="text-black">
								Customer Id:{" "}
								<span className="h5 text-primary">{subject.customer_id}</span>{" "}
							</h5>
							<h5 className="text-black mb-3">
								Subject:{" "}
								<span className="h5 text-primary">{subject.subject}</span>{" "}
							</h5>
							<div >
								{tableRowsData.map((item) => {
									return (
										<div className="row">
											
										<p 
												style={{ fontSize: "15px" ,borderRadius:"8px",background:"#f1f5f97d",boxShadow:'0px 0px 10px #b3bbc2a1 inset'}}
												className={
													item.sentFrom === "user"
														? "message p-3 text-left"
														: item.sentFrom === "admin" &&
														  "message p-3 text-right"
												}>
												{/* <p
												className={
													item.sentFrom === "user"
														? " p-1 text-left"
														: item.sentFrom === "admin" && " p-1 text-right"
												}
												style={{ fontSize: "11px" }}>
												From: {item.sentFrom}
											</p> */}

											<div className="row">
												<div className="col-md-2 mt-2">
												{item.sentFrom === "user"
														&& <span className="p-3 bg-success" style={{borderRadius:"40%"}}>
															<i class="fa-solid fa-c " style={{fontSize:"20px"}}></i>
															</span>
															
														
												}

												</div>
												<div className="col-md-8">
												{item.message} 
												<br></br>
												<p  style={{ fontSize: "9px" }}>
													{moment(item.createdAt)
														.local()
														.format("DD-MM-YYYY hh:mm:ss ")}
												</p>

												</div>
												<div className="col-md-2 ps-1 mt-2">
												{item.sentFrom === "admin"
														&& <span className="p-3 bg-info" style={{borderRadius:"40%"}}>
														<i class="fa-solid fa-a " style={{fontSize:"20px"}}></i>
														</span>
														
												}

												</div>
											</div>
											
											
												
												

												

											

												
											
											</p>
										</div>
										// <div
										// 	className={
										// 		item.sentFrom === "user" &&
										// 		` text-right accordion-item `
										// 	}>
										// 	<h2 className="accordion-header">
										// 		<button
										// 			className="accordion-button"
										// 			type="button"
										// 			data-bs-toggle="collapse"
										// 			data-bs-target={`#collapse${item.id}`}
										// 			aria-expanded="true"
										// 			aria-controls={`collapse${item.id}`}>
										// 			{item.message}
										// 		</button>
										// 	</h2>
										// 	<div
										// 		id={`collapse${item.id}`}
										// 		className="accordion-collapse collapse show"
										// 		data-bs-parent="#accordionExample">
										// 		<div className="accordion-body">{item.message}</div>
										// 	</div>
										// </div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="col-lg-4 ">
						<h5 className="text-primary">Chat with Customer</h5>
						<div className="auth-form-light loginForm text-left py-3 px-4 px-sm-5">
							<Form className="pt-3">
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label className="loginFormLabel ">
										<p>
											<i className="fa-solid fa-message"></i> Message
										</p>
									</Form.Label>
									<div className="form-group">
										<textarea
											className="form-control"
											id="exampleFormControlTextarea1"
											name="mssage"
											value={message}
											onChange={(event) => setMessage(event.target.value)}
											rows="4"></textarea>
									</div>
								</Form.Group>

								{/* <div className="my-2 d-flex justify-content-between align-items-center">
									<div className="form-check">
										<label className="form-check-label text-muted">
											<input
												type="checkbox"
												className="form-check-input loginRemember"
											/>
											<i className="input-helper"></i>
											Remember me
										</label>
									</div>
								</div> */}

								<div className="mt-1">
									<button
										type="button"
										// href="/admin/dashboard"
										onClick={(event) => {
											sendMessage(event);
										}}
										className="btn btn-primary btn-block rounded-lg loginbtn btn-lg font-weight-medium auth-form-btn">
										Submit
									</button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TokenDetails;
