import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./registration.module.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import UserLogin from "./Login";
import "./Register.css";
import "./registration.module.css"
import logo from "../../../assets/images/logo.png";

import {
	faCheck,
	faTimes,
	faInfoCircle,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const MOBILE_REGEX = /^[0-9]{8,}$/;

function UserRegistration() {
	const userRef = useRef();
	// const errRef = useRef();

	const [name, setName] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [mobile, setMobile] = useState({});
	const [validMobile, setValidMobile] = useState(false);
	const [mobileFocus, setMobileFocus] = useState(false);

	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [checked, setChecked] = useState(false);
	const [checkedone, setCheckedone] = useState(false);
	const [captcha, setCaptcha] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);
	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = USER_REGEX.test(name);
		console.log(result);
		console.log(name);
		setValidName(result);
	}, [name]);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		console.log(result);
		console.log(email);
		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		const result = MOBILE_REGEX.test(mobile);
		console.log(result);
		console.log(mobile);
		setValidMobile(result);
	}, [mobile]);

	useEffect(() => {
		const result = PWD_REGEX.test(password);
		console.log(result);
		console.log(password);
		setValidPwd(result);
		const match = password === matchPwd;
		setValidMatch(match);
	}, [password, matchPwd]);

	useEffect(() => {
		setErrMsg("");
	}, [password, name, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if button enabled with JS hack
		const v1 = USER_REGEX.test(name);
		const v2 = PWD_REGEX.test(password);
		if (!v1 || !v2) {
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			const response = await axios
				.post(
					"https://backend.klivepay.com/api/user/register",
					JSON.stringify({
						name,
						mobile,
						email,
						password,
						typeOfStreem: "web",
					}),
					{
						headers: { "Content-Type": "application/json" },
						// withCredentials: true
					}
				)
				.then((res) => {
					if (res.status === 201) {
						alert(res.data.message);
					}
				});
			console.log(response?.data);
			// console.log(response?.accessToken);
			console.log(JSON.stringify(response));
			setSuccess(true);
			//clear state and controlled inputs
			//need value attrib on inputs for this
			setName("");
			setEmail("");
			setPassword("");
			setMatchPwd("");
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 409) {
				setErrMsg("Username Taken");
			} else {
				setErrMsg("Registration Failed");
			}
			// errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<UserLogin />
			) : (
				<div>
					<div className="d-flex align-items-center auth px-0">
						<div className="row w-100 mx-0">
							<div className="text-center">
						<img src={logo} alt="" className="loginLogo" />
					</div>
					<div className="text-center mb-5">
										<h4 className="signTittleM">Sign Up</h4>
									</div>

							<div className="col-lg-6 mx-auto">
								<div className="auth-form-light text-left py-4 px-4 px-sm-5">
									{/* <p
										ref={errRef}
										className={errMsg ? "errmsg" : "offscreen"}
										aria-live="assertive">
										{errMsg}
									</p> */}
									<div className="row">
										<form className="pt-3">
											<div className="form-group">
												<label className="signFormLabel">
													Enter your Email address <span className="text-danger">*</span>{" "}
													{emailFocus && validEmail ? (
														<FontAwesomeIcon
															icon={faCheck}
															className={"text-success"}
														/>
													) : (
														""
													)}
													{emailFocus && !validEmail ? (
														<FontAwesomeIcon
															icon={faTimes}
															className={"text-danger"}
														/>
													) : (
														""
													)}
												</label>
												<input
													type="email"
													id="email"
													onChange={(e) => setEmail(e.target.value)}
													value={email}
													aria-invalid={validEmail ? "false" : "true"}
													required
													onFocus={() => setEmailFocus(true)}
													onBlur={() => setEmailFocus(false)}
													className={`form-control form-control-lg $ ${styles.registerInputs}`}
													placeholder="Email"
												/>
												{emailFocus && !validEmail ? (
													<p
														id="uidnote"
														className={
															emailFocus && email && !validEmail
																? "instructions"
																: "offscreen"
														}>
														<FontAwesomeIcon icon={faInfoCircle} />
														must be a proper email address.
													</p>
												) : (
													""
												)}
											</div>
										</form>
									</div>

									<div className="row">
										<div className="col-lg-6">
											<form>
												<div className="form-group">
													<label className="signFormLabel">
														User Name <span className="text-danger">*</span>{" "}
														{userFocus && validName ? (
															<FontAwesomeIcon
																icon={faCheck}
																className={"text-success"}
															/>
														) : (
															""
														)}
														{userFocus && !validName ? (
															<FontAwesomeIcon
																icon={faTimes}
																className={"text-danger"}
															/>
														) : (
															""
														)}
													</label>
													<input
														type="text"
														id="username"
														ref={userRef}
														autoComplete="off"
														onChange={(e) => setName(e.target.value)}
														value={name}
														required
														aria-invalid={validName ? "false" : "true"}
														aria-describedby="uidnote"
														onFocus={() => setUserFocus(true)}
														onBlur={() => setUserFocus(false)}
														placeholder="Username"
														className={`form-control form-control-lg $ ${styles.registerInputs}`}
													/>
													{userFocus && !validName ? (
														<p
															id="uidnote"
															className={
																userFocus && name && !validName
																	? "instructions"
																	: "offscreen"
															}>
															<FontAwesomeIcon icon={faInfoCircle} />
															4 to 24 characters.
															<br />
															Must begin with a letter.
															<br />
															Letters, numbers, underscores, hyphens allowed.
														</p>
													) : (
														""
													)}
												</div>
											</form>
										</div>
										<div className="col-lg-6">
											<form>
												<div className="form-group">
													<label className="signFormLabel">
														Mobile Number (exclude + in country code){" "}
														<span className="text-danger">*</span>
														{""}
														{mobileFocus && validMobile ? (
															<FontAwesomeIcon
																icon={faCheck}
																className={"text-success"}
															/>
														) : (
															""
														)}
														{mobileFocus && !validMobile ? (
															<FontAwesomeIcon
																icon={faTimes}
																className={"text-danger"}
															/>
														) : (
															""
														)}
													</label>
													<input
														type="number"
														id="mobileNumber"
														onChange={(e) =>
															setMobile(parseInt(e.target.value))
														}
														value={mobile}
														pattern="[0-9]*"
														aria-invalid={validMobile ? "false" : "true"}
														required
														onFocus={() => setMobileFocus(true)}
														onBlur={() => setMobileFocus(false)}
														className={`form-control form-control-lg $ ${styles.registerInputs}`}
														placeholder="mobile"
													/>
													{mobileFocus && !validMobile ? (
														<p
															id="uidnote"
															className={
																mobileFocus && mobile && !validMobile
																	? "instructions"
																	: "offscreen"
															}>
															<FontAwesomeIcon icon={faInfoCircle} />
															must be atleast 8 digits.
														</p>
													) : (
														""
													)}
												</div>
											</form>
										</div>
									</div>
									<div className="row">
										{/* <div className="col-lg-6"> */}
											<form className="pt-3">
												<div className="form-group">
													<label className="signFormLabel">
														Password <span className="text-danger">*</span>{" "}
														{pwdFocus && validPwd ? (
															<FontAwesomeIcon
																icon={faCheck}
																className={"text-success"}
															/>
														) : (
															""
														)}
														{pwdFocus && !validPwd ? (
															<FontAwesomeIcon
																icon={faTimes}
																className={"text-danger"}
															/>
														) : (
															""
														)}
													</label>
													<input
														type={show ? "text" : "password"}
														id="password"
														onChange={(e) => setPassword(e.target.value)}
														value={password}
														required
														aria-invalid={validPwd ? "false" : "true"}
														aria-describedby="pwdnote"
														onFocus={() => setPwdFocus(true)}
														onBlur={() => setPwdFocus(false)}
														className={`form-control form-control-lg $ ${styles.registerInputs}`}
														placeholder="Password"
													/>
													<FontAwesomeIcon
														style={{
															position: "absolute",
															zIndex: "70",
															right: "30px",
															top: "55px",
															// left: "505px",
															// bottom: "33px",
														}}
														onClick={() => {
															setShow(!show);
														}}
														icon={show ? faEye : faEyeSlash}
													/>
													{pwdFocus && !validPwd ? (
														<p
															id="uidnote"
															className={
																userFocus && name && !validPwd
																	? "instructions"
																	: "offscreen"
															}>
															<FontAwesomeIcon icon={faInfoCircle} />
															Must contain a capital letter.
															<br />
															Must container a small letter.
															<br />
															Must container a number
															<br />
															Must container a special letter(! @ # $ % ).
														</p>
													) : (
														""
													)}
												</div>
											</form>
										{/* </div> */}
										{/* <div className="col-lg-6">
											<form className="pt-3">
												<div className="form-group">
													<label className={`${styles.registerLabel}`}>
														Confirm Password {""}
														<span className="text-danger">*</span>{" "}
														{matchFocus && validMatch ? (
															<FontAwesomeIcon
																icon={faCheck}
																className={"text-success"}
															/>
														) : (
															""
														)}
														{matchFocus && !validMatch ? (
															<FontAwesomeIcon
																icon={faTimes}
																className={"text-danger"}
															/>
														) : (
															""
														)}
													</label>
													<input
														type={show1 ? "text" : "password"}
														id="Confirm-password"
														onChange={(e) => setMatchPwd(e.target.value)}
														value={matchPwd}
														required
														aria-invalid={validMatch ? "false" : "true"}
														aria-describedby="confirmnote"
														onFocus={() => setMatchFocus(true)}
														onBlur={() => setMatchFocus(false)}
														className={`form-control form-control-lg $ ${styles.registerInputs}`}
														placeholder="Confirm Password"
													/>
													<FontAwesomeIcon
														style={{
															position: "absolute",
															zIndex: "70",
															right: "30px",
															top: "55px",
															// left: "505px",
															// bottom: "33px",
														}}
														onClick={() => {
															setShow1(!show1);
														}}
														icon={show1 ? faEye : faEyeSlash}
													/>
													{matchFocus && !validMatch ? (
														<p className="text-danger">
															{" "}
															Paswwords do not match
														</p>
													) : (
														""
													)}
												</div>
											</form>
										</div> */}
									</div>
									<div className="row">
										<form className="pt-3">
											<div className="form-group">
												<ReCAPTCHA
													sitekey="6Lf49RIiAAAAAHf6c0KwqiT2RTnQp2D_UWj07Y-x"
													onChange={(value) => {
														if (value) {
															setCaptcha(true);
														}
														console.log("Captcha Value", value);
													}}
												/>
											</div>
											<div className="mb-4">
												<div className="form-check">
													<label className="form-check-label text-muted">
														<input
															type="checkbox"
															className="form-check-input"
															onChange={() => {
																setCheckedone(!checkedone);
															}}
															value={checkedone}
														/>
														<i className="input-helper"></i>I read and agree to
														terms and conditions.
													</label>
												</div>
											</div>
											<div className="mb-4">
												<div className="form-check">
													<label className="form-check-label text-muted">
														<input
															type="checkbox"
															className="form-check-input"
															onChange={(e) => {
																setChecked(!checked);
																// if (e.target.checked) {
																// 	console.log("checkd", checked);
																// } else {
																// 	console.log("uncheckd", checked);
																// }
															}}
															value={checked}
														/>
														<i className="input-helper"></i>I agreed to read and
														acknowledged to the company’s Privacy policy, terms
														and conditions.
													</label>
												</div>
											</div>
										</form>
									</div>
									<div className="row">
										<div className="mt-3">
											<button
												type="submit"
												href="/user/login"
												onClick={handleSubmit}
												disabled={
													!validName ||
														!validPwd ||
														!validMobile ||
														!validEmail ||
														!validMatch ||
														checked === false ||
														checkedone === false ||
														!captcha
														? true
														: false
												}
												className={`btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn ${styles.registerBtn}`}>
												{/* <Link to="/merchant/dashboard" className="text-white"> */}
												<Link to="/user/login" className="text-white">
												SIGN UP
												</Link>
												{/* </Link> */}
											</button>
										</div>
									</div>
									<div className="row d-flex justify-content-between">
										<div className="text-left mt-4 font-weight-light">
											Already have an account?{" "}
											<Link to="/admin/login" className="text-primary">
												Login
											</Link>
										</div>
										<div className=" font-weight-light">
											<a className="text-decoration-none" href="/admin/login">
												Go Back to Home Page?
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default UserRegistration;
