import React, { useEffect, useState } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { useHistory } from "react-router-dom";

function Sidebar() {
	let history = useHistory();
	const location = useLocation();
	const [state, setState] = useState([]);
	const [userName, setUserName] = useState("");
	const toggleMenuState = (menuState) => {
		if (state[menuState]) {
			setState({ [menuState]: false });
		} else if (Object.keys(state).length === 0) {
			setState({ [menuState]: true });
		} else {
			Object.keys(state).forEach((i) => {
				setState({ [i]: false });
			});
			setState({ [menuState]: true });
		}
	};

	function isPathActive(path) {
		return location.pathname.startsWith(path);
	}

	// componentDidUpdate(prevProps) {
	// 	if (props.location !== prevProps.location) {
	// 		onRouteChanged();
	// 	}
	// }

	function onRouteChanged() {
		document.querySelector("#sidebar").classList.remove("active");
		Object.keys(state).forEach((i) => {
			setState({ [i]: false });
		});

		const dropdownPaths = [
			{ path: "/apps", state: "appsMenuOpen" },
			{ path: "/basic-ui", state: "basicUiMenuOpen" },
			{ path: "/form-elements", state: "formElementsMenuOpen" },
			{ path: "/tables", state: "tablesMenuOpen" },
			{ path: "/icons", state: "iconsMenuOpen" },
			{ path: "/charts", state: "chartsMenuOpen" },
			{ path: "/user-pages", state: "userPagesMenuOpen" },
			{ path: "/error-pages", state: "errorPagesMenuOpen" },
		];

		dropdownPaths.forEach((obj) => {
			if (isPathActive(obj.path)) {
				setState({ [obj.state]: true });
			}
		});
	}

	function componentDidMount() {
		onRouteChanged();
		// add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
		const body = document.querySelector("body");
		document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
			el.addEventListener("mouseover", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.add("hover-open");
				}
			});
			el.addEventListener("mouseout", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.remove("hover-open");
				}
			});
		});
	}

	const loginmail = localStorage.getItem("email");
	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://backend.klivepay.com/api/admin/get-profile?email=${loginmail}`
	// 		)
	// 		.then((res) => {
	// 			setUserName(res.data.admin.name);
	// 		});
	// }, []);

	return (
		<nav className="sidebar sidebar-offcanvas" id="sidebar">
			<div className="text-center sidebar-brand-wrapper d-flex align-items-center">
				<a className="sidebar-brand brand-logo text-white" href="index.html">
					<h2 className="mt-4">
						<img
							className="img-sm text-white"
							width={70}
							src={require("../../assets/logo/Group 221.png")}
							alt="profile"
						/>
					</h2>
				</a>
				<a
					className="sidebar-brand brand-logo-mini text-white pt-3"
					href="index.html">
					<h5>Qigenix</h5>
				</a>
			</div>
			<ul className="nav">
				{/* <li className="nav-item nav-profile not-navigation-link">
					<div className="nav-link">
						<Dropdown>
							<Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
								<div className="d-flex justify-content-between align-items-start">
									<div className="profile-image">
										<img
											className="img-xs rounded-circle"
											src={require("../../assets/images/faces/face8.jpg")}
											alt="profile"
										/>

										<FontAwesomeIcon className="fa-2x" icon={faUser} />

										<div className="dot-indicator bg-success"></div>
									</div>
									<div className="text-wrapper">
										<p className="profile-name mt-2">{userName}</p>
										<span className="designation">Admin</span>
									</div>
								</div>
							</Dropdown.Toggle>
							<Dropdown.Menu className="preview-list navbar-dropdown">
								<Dropdown.Item
									className="dropdown-item p-0 preview-item d-flex align-items-center"
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
								</Dropdown.Item>
								<Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center text-small"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Manage Accounts</Trans>
								</Dropdown.Item>
								<Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small">
									<Trans>
										<Link
											to="/admin/AdminChangePassword"
											style={{ textDecoration: "none", color: "black" }}>
											Change Password
										</Link>
									</Trans>
								</Dropdown.Item>
								<Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center text-small"
									onClick={(evt) => evt.preventDefault()}>
									<Trans>Check Inbox</Trans>
								</Dropdown.Item>
								<Dropdown.Item
									className="dropdown-item preview-item d-flex align-items-center text-small"
									onClick={(evt) => {
										evt.preventDefault();
										localStorage.clear();
										history.push("/admin/user/Registration/UserLogin");
									}}>
									<Trans>Sign Out</Trans>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</li> */}

				<li
					className={
						isPathActive("/dashboard")
							? "nav-item active mt-4"
							: "nav-item mt-4"
					}>
					<Link className="nav-link ps-3" to="/admin/dashboard">
						<i class="fa-solid fa-house"></i>
						<span className="menu-title ms-3">
							<Trans>Dashboard</Trans>
						</span>
					</Link>
				</li>

				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/CustomerList">
						<i class="fa-regular fa-user"></i>
						<span className="menu-title ms-3">
							<Trans>Customers</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/DeviceList">
						<i class="fa-solid fa-mobile-screen-button"></i>
						<span className="menu-title ms-3">
							<Trans>Devices</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/Assigned-devices">
						<i class="fa-solid fa-mobile-screen-button"></i>
						<span className="menu-title ms-3">
							<Trans>Assigned Devices</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/ListOfInvoices">
						<i class="fa-solid fa-mobile-screen-button"></i>
						<span className="menu-title ms-3">
							<Trans>Invoices</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/accoutnManagement">
						<i class="fa-regular fa-id-card"></i>
						<span className="menu-title ms-3">
							<Trans>Licensing Management</Trans>
						</span>
					</Link>
				</li>

				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/accoutnManagement">
						<i class="fa-solid fa-book"></i>
						<span className="menu-title ms-3">
							<Trans>Access History</Trans>
						</span>
					</Link>
				</li>

				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-solid fa-file-invoice"></i>
						<span className="menu-title ms-3">
							<Trans>Account Management</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-solid fa-money-bill-transfer"></i>
						<span className="menu-title ms-3">
							<Trans>Transaction Management</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-regular fa-bell"></i>

						<span className="menu-title ms-3">
							<Trans>Notification Management</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-solid fa-envelope"></i>
						<span className="menu-title ms-3">
							<Trans>Email Template Management</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-regular fa-life-ring"></i>
						<span className="menu-title ms-3">
							<Trans>Support</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-solid fa-gear"></i>
						<span className="menu-title ms-3">
							<Trans>Setting</Trans>
						</span>
					</Link>
				</li>
				<li
					className={
						isPathActive("/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link ps-3" to="/admin/AdminPaymentTransaction">
						<i class="fa-solid fa-screwdriver-wrench"></i>
						<span className="menu-title ms-3">
							<Trans>Setup</Trans>
						</span>
					</Link>
				</li>
				{/* <li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.AdminProfileMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("AdminProfileMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>User Profile</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.AdminProfileMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/update-profile">
									<Trans>User Profile</Trans>
								</Link>
							</li>
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminChangePassword">
									<Trans>Change Password</Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li> */}
				{/* <li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.VoidRefundMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("VoidRefundMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>Void & Refund</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.VoidRefundMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminVoid">
									<Trans>Void</Trans>
								</Link>
							</li>
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminRefund">
									<Trans>Refund</Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li> */}
				{/* <li
					className={
						isPathActive("/admin/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link" to="/admin/AdminMerchantProfile">
						<i className="mdi mdi-television menu-icon"></i>
						<span className="menu-title">
							<Trans>Merchant Profile</Trans>
						</span>
					</Link>
				</li> */}
				{/* <li
					className={
						isPathActive("/admin/dashboard") ? "nav-item active" : "nav-item"
					}>
					<Link className="nav-link" to="/admin/assign-merchnat-to-users">
						<i className="mdi mdi-television menu-icon"></i>
						<span className="menu-title">
							<Trans>Assign Merchant to User</Trans>
						</span>
					</Link>
				</li> */}

				{/* <li
					className={
						isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
					}>
					<div
						className={
							state.usersManageMenuOpen ? "nav-link menu-expanded" : "nav-link"
						}
						onClick={() => toggleMenuState("usersManageMenuOpen")}
						data-toggle="collapse">
						<i className="mdi mdi-crosshairs-gps menu-icon"></i>
						<span className="menu-title">
							<Trans>Users & Merchants</Trans>
						</span>
						<i className="menu-arrow"></i>
					</div>
					<Collapse in={state.usersManageMenuOpen}>
						<ul className="nav flex-column sub-menu">
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/buttons")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminManageUser">
									<Trans>Users</Trans>
								</Link>
							</li>
							<li className="nav-item">
								{" "}
								<Link
									className={
										isPathActive("/basic-ui/dropdowns")
											? "nav-link active"
											: "nav-link"
									}
									to="/admin/AdminManageRole">
									<Trans>Merchants </Trans>
								</Link>
							</li>
						</ul>
					</Collapse>
				</li> */}
			</ul>
		</nav>
	);
}

export default withRouter(Sidebar);
