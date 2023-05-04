import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./resetPassword.css";
import logo from "../../../assets/images/logo.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// function ForgotPassword() {
// 	const history = useHistory();
// 	useEffect(() => {
// 		localStorage.clear();
// 		// console.log(API);
// 	}, []);
const ResetPassword = () => {
	const history = useHistory();
	const [newPassword, setNewPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const email = localStorage.getItem("email");
	console.log(email, "kjsdf");
	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, newPassword);

		try {
			const response = await axios.patch(
				`https://qigenix.ixiono.com/apis/admin/reset-Password/${email}`,
				JSON.stringify({ password: newPassword }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", email);

			console.log(JSON.stringify(response?.data));
			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			setNewPassword("");
			setSuccess(true);
		} catch (err) {
			console.log(err);
			console.log(email);
		}
		console.log(success);
	}
	useEffect(() => {
		if (success) {
			alert("You have registered Succesfully!");
			history.pushState("/admin/login");
		}
	}, [success]);
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="text-center">
						{/* <img src={logo} alt="" className="PForgotPasswordLogo" /> */}
						<img
							src={logo}
							className="img-responsive"
							alt="ixiono pte. ltd"
							style={{ height: "70px", width: "200px" }}
						/>
						<br />
					</div>
					<div className="text-center mt-5">
						<h4 className="ptext-primary">Reset Password</h4>
						<br />
					</div>
					<div className="col-lg-5 mx-auto">
						<div className="auth-form-light cardForgot text-left py-10 px-4 px-sm-17">
							<form className="pt-1">
								<div className="form-group">
									<label>New Password</label>
									<input
										type="New Password"
										className="form-control Pinput form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
										placeholder="New Password"
									/>
								</div>
								<div className="form-group">
									<label>Confirm Password</label>
									<input
										type="Confirm Password"
										className="form-control Pinput form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
										placeholder="Confirm Address"
									/>
								</div>
								<div className="form-group">
									{/* <input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
									/> */}
								</div>
								{/* <div className="form-group">
									<Link to="/admin/login">
										<h5 className="text-primary">Login?</h5>
									</Link>
								</div> */}

								<div className="mt-3">
									<button
										type="button"
										// href="/admin/dashboard"
										onClick={(event) => {
											//   history.push("/admin/Admin-ResetPassword");
											onSubmit(event);
										}}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										submit
									</button>
									<div className="mt-3"></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
