import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./TokenDetails.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

import moment from "moment";
import API from "../../../../backend";

const TokenDetails = () => {
	const [tableRowsData, setTableRowsData] = useState([]);
	const [subject, setSubject] = useState("");
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

					setSubject(response.data.tokens.subject);
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
						{/* <Link to={"/users/new-token"}>
							<button className="btn btn-success">New Token</button>
						</Link> */}
					</div>

					<div className="row">
						<div className="col-lg-8 mt-5">
							<div className="auth-form-light  loginForm text-left py-5 px-4 px-sm-5">
								<h4 className="text-black">
									Subject: <span className="h5 text-primary">{subject}</span>{" "}
								</h4>
								<div>
									<div class="card mt-4">
										<div class="card-header">
											{" "}
											<i class="fa-solid fa-comment me-2"></i> Chat
										</div>
										<div class="card-body messageBox height3">
											<ul class="chat-list">
												{tableRowsData.map((item) => {
													return (
														<li
															className={
																item.sentFrom === "admin"
																	? "out"
																	: item.sentFrom === "user" && "in"
															}>
															<div class="chat-img">
																<img
																	alt="Avtar"
																	src={
																		item.sentFrom === "admin"
																			? "https://bootdey.com/img/Content/avatar/avatar6.png"
																			: "https://bootdey.com/img/Content/avatar/avatar1.png"
																	}
																/>
															</div>
															<div class="chat-body">
																<div class="chat-message">
																	<h5
																		style={{
																			color:
																				item.sentFrom === "user"
																					? "Blue"
																					: "#571212",
																		}}>
																		{item.sentFrom === "admin"
																			? "Admin"
																			: "User"}
																	</h5>
																	<p className="text-white">{item.message}</p>
																	<p
																		style={{ fontSize: "9px" }}
																		className="text-light">
																		{moment(item.createdAt)
																			.local()
																			.format("DD-MM-YYYY hh:mm:ss ")}
																	</p>
																</div>
															</div>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 mt-5">
							<div className="auth-form-light  loginForm text-left py-5 px-4 px-sm-5">
								<h4 className="text-black">Send message to User</h4>
								<div>
									<div class="card mt-4">
										<div class="card-header">
											{" "}
											<i className="fa-solid fa-message text-light me-2"></i>{" "}
											Message
										</div>
										<Form className="pt-3">
											<Form.Group
												className="mb-3"
												controlId="formBasicPassword">
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

											<div className="mt-1 text-end">
												<button
													type="button"
													// href="/admin/dashboard"
													onClick={(event) => {
														sendMessage(event);
													}}
													className="btn btn-primary py-2">
													Send
												</button>
											</div>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TokenDetails;
