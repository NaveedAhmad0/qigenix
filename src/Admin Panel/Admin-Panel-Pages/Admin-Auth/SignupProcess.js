import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Signup from "./Signup";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = Yup.object({
  email: Yup.string().email().required("Please enter valid email"),
  username: Yup.string().required("enter user name"),
  mobilenumber: Yup.number().positive().integer().min(10).required("enter valid mobile number"),
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

const SignupProcess = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        username: "",
        mobilenumber:"",
        password: "",
        otp:"",
      }}
    >
      {(formik) => <Signup {...formik} />}


    </Formik>
  );
};

export default SignupProcess;
