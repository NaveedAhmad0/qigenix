import React, { Component, useEffect, useState } from "react";
import { Dropdown, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import pic from "../../assets/images/Ellipse 21.png";
import "./navbar.css";
import axios from "axios";
const Navbar = () => {
	const [userName, setUserName] = useState("");
	const [name,setName]=useState("")
	const token = localStorage.getItem("token");
	const email = localStorage.getItem("email");
	let history = useHistory();
	const toggleOffcanvas = () => {
		document.querySelector(".sidebar-offcanvas").classList.toggle("active");
	};
	const toggleRightSidebar = () => {
		document.querySelector(".right-sidebar").classList.toggle("open");
	};

	const fetchCustomerData = async () => {
		try {
			var config = {
				method: "get",
				url: `https://qigenix.ixiono.com/apis/admin/getAdminProfile/${email}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};

			axios(config)
				.then(async function (response) {
					console.log(response.data);
					setUserName(response.data.username);
					setName(response.data)
					localStorage.setItem("adminId", response.data.admin_id);
					// console.log(response.data.notifications);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCustomerData();
	}, []);

	return (
		<nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
			<div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
				<a
					className="navbar-brand brand-logo-mini align-self-center d-lg-none"
					href="!#"
					onClick={(evt) => evt.preventDefault()}>
					<img
						src={require("../../assets/images/Group 220.png")}
						alt="logo"
						style={{ width: "2rem" }}
					/>
				</a>
				<button
					className="navbar-toggler navbar-toggler align-self-center"
					type="button"
					onClick={() => document.body.classList.toggle("sidebar-icon-only")}>
					<i className="mdi mdi-menu"></i>
				</button>
				<ul className="navbar-nav navbar-nav-left header-links align-self-center">
					<li></li>

					<div className="search-box">
						<Form action="">
							<input type="text" name="Search" placeholder="Search..." />
							<button type="submit" class="btn btn-default">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									fill="black"
									class="bi bi-search "
									viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</button>
						</Form>
					</div>
					<li className="nav-item dropdown language-dropdown"></li>
				</ul>

				<ul className="navbar-nav navbar-nav-right dropdwn">
					<li className="nav-item  nav-profile border-0 pl-4">
						<h5 style={{ font: "Roboto" }}>{`${userName} (Admin)`}</h5>
					</li>

					<li className="nav-item ">
						<Dropdown>
							<Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
								<img
									src={pic}
									alt="user"
									className="img img-responsive staff-profile-image-small pull-left"
									style={{ width: "2.5rem" }}
								/>{" "}
							</Dropdown.Toggle>
							<Dropdown.Menu className="navbar-dropdown preview-list p-3">
							<Dropdown.Item disabled
									className="  d-flex align-items-center"
								>
									<p
										className="mb-0 font-weight-medium float-left"
										>
									<i class="fa-regular fa-user me-2" style={{fontSize:'18px'}}></i>	{name.firstName} {name.lastName}
									</p>
								</Dropdown.Item>
								<hr></hr>
								<Dropdown.Item
									className="dropdown-item  d-flex align-items-center"
									onClick={(evt) => evt.preventDefault()}>
									<p
										className="mb-0 font-weight-medium float-left"
										onClick={() => {
											history.push("/admin/profile");
										}}>
									<i class="fa-solid fa-id-badge me-2" style={{fontSize:'18px'}}></i>	Profile
									</p>
								</Dropdown.Item>
								<Dropdown.Item
									className="dropdown-item  d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<p
										className="mb-0 font-weight-medium float-left"
										onClick={() => {
											localStorage.clear();
											history.push("/admin/login");
										}}>
									<i class="fa-solid fa-right-from-bracket me-2" style={{fontSize:'18px'}}></i>	Log Out
									</p>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						{/* <a href="#" className="profile" aria-expanded="false">
							<img
								src={pic}
								className="img img-responsive staff-profile-image-small pull-left"
								style={{ width: "2.5rem" }}
							/>{" "}
						</a> */}
					</li>
					{/* <li className="nav-item  nav-profile border-0">
						<Dropdown>
							<Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="23"
									fill="black"
									class="bi bi-bell"
									viewBox="0 0 16 16">
									<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
								</svg>
								<span className="count">7</span>
							</Dropdown.Toggle>
							<Dropdown.Menu className="navbar-dropdown preview-list">
								<Dropdown.Item
									className="dropdown-item  d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<p className="mb-0 font-weight-medium float-left">
										<Trans>You have</Trans> 7 <Trans>unread mails</Trans>{" "}
									</p>
								</Dropdown.Item>
								<Dropdown.Item
									className="dropdown-item d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<p className="mb-0 font-weight-medium float-left">
										unread mails
										
									</p>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li> */}
					{/* 
					<li className="nav-item  nav-profile border-0">
						<Dropdown>
							<Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="23"
									fill="currentColor"
									class="bi bi-clock"
									viewBox="0 0 16 16">
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
								</svg>
								<span className="count">2</span>
							</Dropdown.Toggle>
							<Dropdown.Menu className="navbar-dropdown preview-list">
								<Dropdown.Item
									className="dropdown-item  d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<ul class="dropdown-menu">
										<li>
											<a class="dropdown-item" href="#">
												Action
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Another action
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Something else here
											</a>
										</li>

										<li>
											<a class="dropdown-item" href="#">
												Separated link
											</a>
										</li>
									</ul>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li> */}

					{/* <Dropdown.Item
									className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<div className="d-flex">
										<div className="py-3 px-4 d-flex align-items-center justify-content-center">
											<i className="mdi mdi-bookmark-plus-outline mr-0"></i>
										</div>
										<div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
											<i className="mdi mdi-account-outline mr-0"></i>
										</div>
										<div className="py-3 px-4 d-flex align-items-center justify-content-center">
											<i className="mdi mdi-alarm-check mr-0"></i>
										</div>
									</div>
								</Dropdown.Item> */}
					{/* <Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Manage Accounts</Trans>
								</Dropdown.Item> */}

					{/* <Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center border-0"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Check Inbox</Trans>
								</Dropdown.Item> */}
				</ul>
				<button
					className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
					type="button"
					onClick={toggleOffcanvas}>
					<span className="mdi mdi-menu"></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
