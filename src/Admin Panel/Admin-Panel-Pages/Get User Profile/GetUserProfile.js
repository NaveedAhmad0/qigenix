import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../../../backend";
import styles from "./GetUserProfile.css";

const GetUserProfile = () => {
	const location = useLocation();
	const [fetchData, setFetchData] = useState({
		id: 0,
		name: "",
		mobile: "",
		email: "",
		userName: "",
		personType: "",
		InitialShop: "",
		firstName: "",
		surName: "",
		yearOfBirth: "",
		monthOfBirth: "",
		dayOfBirth: "",
		address: "",
		province: "",
		district: "",
		subDivision: "",
		pincode: 0,
		shopType: "",
		creditCard: "",
		weChat: "",
		livePayment: "",
		mobileBanking: "",
		trueWallet: "",
		shopeePay: "",
		alone: "",
		website: "",
		facebook: "",
		linkedin: "",
		instagram: "",
		other: "",
		company: "",
		bank: "",
		bankAccount: 0,
		rnfCode: "",
		domestic: "",
		inter: "",
		rateQrCode: "",
		rateBarCode: "",
		copyOfId: "",
		logo: "",
		bankBook: "",
		otherDocument: "",
	});
	const {
		id,
		name,
		mobile,
		email,
		userName,
		personType,
		InitialShop,
		firstName,
		surName,
		yearOfBirth,
		monthOfBirth,
		dayOfBirth,
		address,
		province,
		district,
		subDivision,
		pincode,
		shopType,
		creditCard,
		weChat,
		livePayment,
		mobileBanking,
		trueWallet,
		shopeePay,
		alone,
		website,
		facebook,
		linkedin,
		instagram,
		other,
		company,
		bank,
		bankAccount,
		rnfCode,
		domestic,
		inter,
		rateQrCode,
		rateBarCode,
		copyOfId,
		logo,
		bankBook,
		otherDocument,
	} = fetchData;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// const loginemail = localStorage.getItem("email");
		const userDataEmail = location.state.dataEmail;
		console.log("Email is", location.state.dataEmail);
		axios.get(`${API}/user/get-profile?email=${userDataEmail}`).then((res) => {
			setFetchData({
				id: res.data.user.id,
				name: res.data.user.name,
				mobile: res.data.user.mobile,
				email: res.data.user.email,
				userName: res.data.user.userName,
				personType: res.data.user.personType,
				InitialShop: res.data.user.InitialShop,
				firstName: res.data.user.firstName,
				surName: res.data.user.surName,
				yearOfBirth: res.data.user.yearOfBirth,
				monthOfBirth: res.data.user.monthOfBirth,
				dayOfBirth: res.data.user.dayOfBirth,
				address: res.data.user.address,
				province: res.data.user.province,
				district: res.data.user.district,
				subDivision: res.data.user.subDivision,
				pincode: res.data.user.pincode,
				shopType: res.data.user.shopType,
				creditCard: res.data.user.creditCard,
				weChat: res.data.user.weChat,
				livePayment: res.data.user.livePayment,
				mobileBanking: res.data.user.mobileBanking,
				trueWallet: res.data.user.trueWallet,
				shopeePay: res.data.user.shopeePay,
				alone: res.data.user.alone,
				website: res.data.user.website,
				facebook: res.data.user.facebook,
				linkedin: res.data.user.linkedin,
				instagram: res.data.user.instagram,
				other: res.data.user.other,
				company: res.data.user.company,
				bank: res.data.user.bank,
				bankAccount: res.data.user.bankAccount,
				rnfCode: res.data.user.rnfCode,
				domestic: res.data.user.domestic,
				inter: res.data.user.inter,
				rateQrCode: res.data.user.rateQrCode,
				rateBarCode: res.data.user.rateBarCode,
				copyOfId: res.data.user.copyOfId,
				logo: res.data.user.logo,
				bankBook: res.data.user.bankBook,
				otherDocument: res.data.user.otherDocument,
			});
			setLoading(false);
			setTimeout(() => {
				setLoading(false);
			}, 3000);

			// console.log("USER DATA IS ", res.data.user.merchantEmail);
		});
	}, []);

	return (
		<div className="col-12 grid-margin userProfileMain">
			<h4 className="card-title fs-3">Personal Admin Information</h4>
			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div className="card userProfileCard-2 ">
					<div
						className="row flex-column mt-5 mx-auto card text-white w-30 mb-5"
						style={{
							backgroundColor: "#007BFF",
							fontWeight: "500",
							lineHeight: "1",
							fontSize: "10px",
						}}>
						<img
							className="profile-img mt-3 mb-2"
							src={require("../../../assets/images/faces/face8.jpg")}
							alt="Profile"
						/>
						<div className="mt-2 mx-auto">
							<p className="text-white">
								Merchant Code: <span className="text-warning">M010303</span>
							</p>
							<p className="text-white">
								Email: <span className="text-warning">{email}</span>
							</p>
						</div>
					</div>

					<div className="col-12 grid-margin">
						<h4 className="card-title fs-4">User Personal Information</h4>

						<div className="card userCard p-lg-2">
							<div className={`card-body ${styles.usercardbody}`}>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Merchant ID :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={id}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Merchant Name English :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={name}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className=" form-label">
											Merchant Name :
										</label>
										<input
											className="form-control"
											id="inputPassword4"
											value={userName}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Email Address :
										</label>
										<input
											className="form-control"
											id="inputPassword4"
											value={email}
										/>
									</div>
									<div class="col-md-12">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Initial Shop :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={InitialShop}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											First Name:
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={firstName}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Email :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={email}
										/>
									</div>
									<div class="col-md-4">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Year of Birth :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={yearOfBirth}
										/>
									</div>
									<div class="col-md-4">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Month Of Birth :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={monthOfBirth}
										/>
									</div>
									<div class="col-md-4">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Day Of Birth :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={dayOfBirth}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Contact Number :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={mobile}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Address :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={address}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Provience :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={province}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Sub Division :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={subDivision}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											District :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={district}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Mobile no :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={mobile}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Web Site :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={website}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Linked in :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={linkedin}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Facebok :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={facebook}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Instagram :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={instagram}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Other :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={other}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Copy Of Id Card (Up to 5mb):{" "}
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Book Bank :
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Company :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={company}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label text-primary">
											Bank Account :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={bankAccount}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Domestic :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={domestic}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Rate Of QR Code :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={rateQrCode}
										/>
									</div>
								</form>
								<br></br>
								<br></br>
								<form className="row g-3 form-sample">
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Logo :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={logo}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Other document: :{" "}
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Bank :
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={bank}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Rnf Code :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={rnfCode}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label ">
											Inter :{" "}
										</label>
										<input
											className="form-control"
											id="inputEmail4"
											value={inter}
										/>
									</div>
									<div class="col-md-6">
										<label
											htmlFor="exampleInputUsername1"
											className="form-label">
											Rate Of Bar Code :{" "}
										</label>
										<input className="form-control" id="inputEmail4" />
									</div>
								</form>
							</div>
						</div>
						<br></br>
						<div className="text-center">
							<button
								type="button"
								className="btn btn-success w-100 btn-lg rounded-pill">
								{" "}
								Finish{" "}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default GetUserProfile;
