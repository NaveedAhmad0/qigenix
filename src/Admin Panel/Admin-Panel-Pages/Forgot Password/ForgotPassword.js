import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
import logo from "../../../assets/images/logo.png";
const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [success, setSuccess] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, newPassword);

		try {
			const response = await axios.patch(
				`https://backend.klivepay.com/api/admin/forget-password?email=${email}`,
				JSON.stringify({ newPassword }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log("mail", email);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			// localStorage.setItem("token", response?.data?.accessToken);
			setEmail("");
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
		}
	}, [success]);
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="text-center">
						<img src={logo} alt="" className="PForgotPasswordLogo" />
						<br />
					</div>
					<div className="text-center mt-5">
						<h4 className="text-primary">Forgot Password</h4>
						<br />
					</div>
					<div className="col-lg-8 mx-auto">
						<div className="auth-form-light cardForgot text-left py-5 px-4 px-sm-5">
							<form className="pt-3">
								<div className="form-group">
									<input
										type="email"
										className="form-control Pinput form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
									/>
								</div>
								<div className="form-group">
									<Link to="/admin/login">
										<h5 className="text-primary">Login?</h5>
									</Link>
								</div>

								<div className="mt-3">
									<button
										href="/admin/login"
										onClick={(event) => onSubmit(event)}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										Forgot Password
									</button>
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
