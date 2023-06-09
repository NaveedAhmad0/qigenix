import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Login from "./Login";

const validationSchema = Yup.object({
	email: Yup.string().email().required("Please enter valid email"),
	password: Yup.string()
		.matches(/\w*[a-z]\w*/, "Password must have a lowercase letter")
		.matches(/\w*[A-Z]\w*/, "Password must have a uppercase letter")
		.matches(/\d/, "Password must have a number")
		.matches(
			/[!@#$%^&*()\-_"=+{};:,<.>]/,
			"Password must have a special character"
		)
		.min(8, ({ min }) => `Password must be at least 8 characters`)
		.required("Password is required"),
});

const LoginProcess = () => {
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={{
				email: "",
				password: "",
				otp: "",
			}}>
			{(formik) => <Login {...formik} />}
		</Formik>
	);
};

export default LoginProcess;
