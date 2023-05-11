import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
import logo from "../../../assets/images/logo.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function ForgotPasswordLink() {
	const history = useHistory();
	useEffect(() => {
		localStorage.clear();
		// console.log(API);
	}, []);
	const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	const [success, setSuccess] = useState(false);

	async function onSubmit(event) {
		event.preventDefault();
		console.log("sdkjfshfkshdfkj", email);

		try {
			const response = await axios.get(
				`https://qigenix.ixiono.com/apis/admin/get-forgotLink/${email}`,

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
						{/* <img src={logo} alt="" className="PForgotPasswordLinkLogo" /> */}
						<img
							src={logo}
							className="img-responsive"
							alt="ixiono pte. ltd"
							style={{ height: "70px", width: "200px" }}
						/>
						<br />
					</div>
					<div className="text-center mt-5">
						<h4 className="ptext-primary">Get Forgot Password Link</h4>
						<br />
					</div>
					<div className="col-lg-4 mx-auto">
						<div className="auth-form-light cardForgot text-left py-10 px-4 px-sm-17">
							<form className="pt-1">
								<div className="form-group">
									<label>Email Address</label>
									<input
										type="email"
										className="form-control Pinput form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										placeholder="Email Address"
									/>
								</div>
								{/* <div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setpassword(e.target.value)}
										value={password}
									/>
								</div> */}
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
}

export default ForgotPasswordLink;
