import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
require("dotenv").config();

// const HomePage = lazy(() => import("../Homepage/HomePage"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

// ADMIN PANEL IMPORTS

const AdminDashboard = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Dashboard/AdminDashboard")
);
const AdminLogin = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Auth/LoginProcess")
);
const Profile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin profile/Profile")
);
const AdminTransaction = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Payment_Transaction/Transaction"
	)
);
const AccessHistory = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Access History/AccessHistory")
);

const AdminProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Profile/AdminProfile")
);

const AdminChangePassword = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Reset-Password/resetPassword")
);
const ForgotPasswordLink = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Forgot Password/ForgotPasswordLink")
);
const ForgotPassword = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Forgot Password/ForgotPassword")
);

const DeviceList = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Device List/DeviceList")
);
const CustomerList = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer List/CustomerList")
);
const AddCustomer = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Customer List/Add Customer/AddCustomer"
	)
);
const AddDevice = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Device List/Add Device/AddDevice")
);
const CustomerDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer details/CustomerDetails")
);
const DeviceDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Device Details/DeviceDetails")
);

const SignUp = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Auth/Register")
);
const ListOfInvoices = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/List of invoices/ListOfInvoices")
);
const ListOfAssDevices = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/List of Assigned Devices/ListOfAssignedDevice"
	)
);
const EmailTemplate = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Email Template/Setup")
);
const Notifications = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Notification/notificationList")
);
const ScannedInvoice = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Scanned Inovices/ScannedInvoices")
);
const NotificationDetail = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Notification/NotificationDetail")
);
const Support = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/support/Queries/QueryList")
);
const SupportDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/support/Queries/QueryDetails")
);
const SendEmail = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Email Template/Send Email/SendEmail")
);

const ListOfTokens = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/List-Of-Tokens/ListOfTokens")
);
class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					{/* <Route exact path="/homepage" component={HomePage} /> */}
					{/* <Route exact path="/homepage" component={UserLogin} /> */}
					<Route path="/admin/basic-ui/buttons" component={Buttons} />
					<Route path="/admin/basic-ui/dropdowns" component={Dropdowns} />

					<Route
						path="/admin/form-Elements/basic-elements"
						component={BasicElements}
					/>

					<Route path="/admin/tables/basic-table" component={BasicTable} />

					<Route path="/admin/icons/mdi" component={Mdi} />

					<Route path="/admin/charts/chart-js" component={ChartJs} />

					{/*------------------------- ADMIN PANEL ROUTES -------------------------- */}
					<Route exact path="/admin/login" component={AdminLogin} />

					<Route exact path="/admin/dashboard" component={AdminDashboard} />

					<Route
						path="/admin/AdminPaymentTransaction"
						component={AdminTransaction}
					/>

					<Route path="/admin/Registration" component={SignUp} />
					<Route path="/admin/CustomerList" component={CustomerList} />
					<Route path="/admin/addCustomer" component={AddCustomer} />
					<Route path="/admin/CustomerDetails" component={CustomerDetails} />

					<Route path="/admin/DeviceList" component={DeviceList} />
					<Route path="/admin/device-details" component={DeviceDetails} />
					<Route path="/admin/add-device" component={AddDevice} />

					<Route path="/admin/update-profile" component={AdminProfile} />

					<Route path="/admin/resetPassword" component={AdminChangePassword} />

					<Route
						exact
						path="/admin/get_forgotPassword_link"
						component={ForgotPasswordLink}
					/>
					<Route
						exact
						path="/admin/forgotPassword"
						component={ForgotPassword}
					/>

					<Route path="/admin/profile" component={Profile} />
					<Route path="/admin/ListOfInvoices" component={ListOfInvoices} />
					<Route path="/admin/Assigned-devices" component={ListOfAssDevices} />
					<Route path="/admin/list-of-tokens" component={ListOfTokens} />
					<Route path="/admin/email-template" component={EmailTemplate} />
					<Route path="/admin/send-email" component={SendEmail} />
					<Route path="/admin/notifications" component={Notifications} />
					<Route
						path="/admin/NotificationDetails"
						component={NotificationDetail}
					/>
					<Route path="/admin/ScannedInvoice" component={ScannedInvoice} />
					<Route path="/admin/access-history" component={AccessHistory} />
					<Route path="/admin/Support" component={Support} />
					<Route path="/admin/query-details" component={SupportDetails} />

					<Route path="/admin/error-pages/error-404" component={Error404} />
					<Route path="/admin/error-pages/error-500" component={Error500} />
					{/* <Route path="*" component={<Redirect to="/admin/login" />} /> */}
					<Redirect to="/admin/login" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
