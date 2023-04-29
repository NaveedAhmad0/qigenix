import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import API from "../../../backend";
import logoimg from "../../../assets/images/logo.png";
import "./login.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AdminLogin(formik) {
	const history = useHistory();
	useEffect(() => {
		localStorage.clear();
		console.log(API);
	}, []);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState("");
	const { values, touched, dirty, isValid, errors } = formik;
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
					<div className="logodivM ">
						<img className="logoM" src={logoimg} />
					</div>
					<div className="heading1M">Login</div>
					<div className="col-lg-6 mx-auto">

						<div className="auth-form-light text-left py-4 px-5 px-sm-5">
							<div className="brand-logo">
								<h3 className={!errMsg ? "errMsg" : "text-danger"}>{errMsg}</h3>
							</div>
							{/* <h4 className="text-primary">Admin Login</h4> */}

							<Form className="pt-0">
								<Form.Group className="sm-3" controlId="formBasicEmail">
									<Form.Label className="">Email address</Form.Label>
									<Form.Control 
									type="email"
									autoFocus="true"
									placeholder="Username"
									name="email"
									id="email"
									// onChange={(event) => handleChange(event)}
									value={values.email}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
									size="lg"
									className="h-auto" 
									/>
									{errors.email && touched.email && (
                              <div style={{ color: "red" }}>{errors.email}</div>
                            )}

								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control 
									type="password"
									placeholder="Password"
									// onChange={(event) => handleChangeone(event)}
									name="password"
									id="password"
									value={values.password}
									onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
									size="lg"
									className="h-auto"
									/>
									{errors.password && touched.password && (
                              <div style={{ color: "red" }}>{errors.password}</div>
                            )}
								</Form.Group>

								{/* <Form.Group className="d-flex search-field">
									<label htmlFor="password">Email</label>
									<Form.Control
										type="email"
										placeholder="Username"
										onChange={(event) => handleChange(event)}
										value={email}
										size="lg"
										className="h-auto"
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
								</Form.Group> */}
								<div className="mt-3">
									<button
										type="submit"
										// href="/admin/dashboard"
										disabled={!formik.isValid}
										onClick={(event) => {
											history.push("/admin/dashboard");
										}}
										className="loginbtnM btn btn-block btn-lg font-weight-medium auth-form-btn">
										Login
									</button>
									{/* {!success ? (
									) : (
										<Redirect to="/admin/dashboard" />
									)} */}
								</div>
								{/* <div class="col-md-12">
                    <p class="small ">
                      Already Have An Account ? <a href ="/admin/signup"> Sign up here </a></p>
					  </div> */}
								{/* <div className="mt-3">
								<button
										type="submit"
										// href="/admin/dashboard"
										onClick={(event) => {
											history.push("/admin/signup");
										}}
										className="signuupbtnM btn btn-block btn-lg font-weight-medium">
										SIGN IN
									</button>
								</div> */}
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
							</Form>
							<div class="col-md-12">
                    <p class="small">
                      Already Have An Account ? <a href ="/admin/dashboard"> Sign up here </a></p>
					  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminLogin;
