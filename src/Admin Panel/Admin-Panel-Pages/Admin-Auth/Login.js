import React, { useEffect, useState } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import API from "../../../backend";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AdminLogin() {
	const history = useHistory();
	useEffect(() => {
		localStorage.clear();
		console.log(API);
	}, []);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	// const logindetails = { email, password };

	// const navigate = Redirect();
	function handleChange(event) {
		setEmail(event.target.value);
	}
	function handleChangeone(event) {
		setPassword(event.target.value);
	}
	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, password);

		try {
			const response = await axios.post(
				`${API}/admin/login`,
				JSON.stringify({ email, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			console.log(JSON.stringify(response?.data));

			// const accessToken = response?.data?.accessToken;
			localStorage.setItem("token", response?.data?.accessToken);
			localStorage.setItem("email", email);
			setEmail("");
			setPassword("");
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Invalid Credentialials");
				setSuccess(false);
			} else {
				setErrMsg("Login failed");
			}
			console.log(err);
		}
		console.log(success);
	}
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="text-center">LOGO</div>
					<div className="col-lg-6 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<div className="brand-logo">
								<h3 className={!errMsg ? "errMsg" : "text-danger"}>{errMsg}</h3>
							</div>
							<h4 className="text-primary">Admin Login</h4>

							<Form className="pt-3">
								<Form.Group className="d-flex search-field">
									<Form.Control
										type="email"
										placeholder="Username"
										onChange={(event) => handleChange(event)}
										value={email}
										size="lg"
										className="h-auto inputNadim"
									/>
								</Form.Group>
								<Form.Group className="d-flex search-field">
									<Form.Control
										type="password"
										placeholder="Password"
										onChange={(event) => handleChangeone(event)}
										value={password}
										size="lg"
										className="h-auto"
									/>
								</Form.Group>
								<div className="mt-3">
									<button
										type="button"
										// href="/admin/dashboard"
										onClick={(event) => {
											history.push("/admin/dashboard");
										}}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										SIGN IN
									</button>
									{/* {!success ? (
									) : (
										<Redirect to="/admin/dashboard" />
									)} */}
								</div>
								<div className="my-2 d-flex justify-content-between align-items-center">
									<div className="form-check">
										<label className="form-check-label text-muted">
											<input type="checkbox" className="form-check-input" />
											<i className="input-helper"></i>
											Keep me signed in
										</label>
									</div>
									<a
										href="/admin/forgotPassword"
										// onClick={(event) => event.preventDefault()}
										className="auth-link text-black">
										Forgot password?
									</a>
								</div>
								{/* <div className="">
								</div> */}
								<div className="text-left ">
									<label className="text-muted">
										Dont have an Account?{" "}
										<a
											href="/admin/Registration"
											// onClick={(event) => event.preventDefault()}
											className="auth-link text-primary">
											Signup here
										</a>
									</label>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminLogin;
