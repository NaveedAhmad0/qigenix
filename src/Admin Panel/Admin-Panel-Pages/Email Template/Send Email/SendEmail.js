import React, { useEffect, useState } from "react";
import "./templateContent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { components } from "react-select";
import makeAnimated from "react-select/animated";
import MySelect from "../../Notification/My select/MySelect";
import axios from "axios";

const Option = (props) => {
	return (
		<div>
			<components.Option {...props}>
				<input
					type="checkbox"
					checked={props.isSelected}
					onChange={() => null}
				/>{" "}
				<label>{props.label}</label>
			</components.Option>
		</div>
	);
};

const MultiValue = (props) => (
	<components.MultiValue {...props}>
		{/* {console.log(props.data, "props")}	 */}
		<span>{props.data.firstName}</span>
	</components.MultiValue>
);

const autoCloseTIcket = `<p class="card-text pt-2 pb-4">
			Hi <strong>firstName </strong> <strong>lastname</strong>
			<br />
			Ticket <strong> ticket_subject </strong> has been auto close due to
			inactivity.
			<br />
			<br />
			Ticket #:<strong> ticket_id </strong>
			<br />
			Department: <strong> ticket_department </strong>
			<br />
			Priority: <strong> ticket_priority </strong>
			<br />
			<br />
			Kind Regards, <br />
			{/* {email_signature} */}
		</p>`;

const SendEmail = () => {
	const [optionSelected, setOptionSelected] = useState("");
	const animatedComponents = makeAnimated();
	const [userList, setUserList] = useState([]);
	const [subject, setSubject] = useState("");
	const [html, setHtml] = useState("");
	const [email, setEmail] = useState("");
	const token = localStorage.getItem("token");

	const handleChange = (selected, i) => {
		const dataa = [];
		for (let i = 0; i < selected?.length; i++) {
			console.log("select", selected[i].email);
			dataa.push({
				customer_id: selected[i].email,
				firstName: selected[i].firstName,
			});
		}
		setOptionSelected(dataa);
	};

	useEffect(() => {
		var config = {
			method: "get",
			url: `https://qigenix.ixiono.com/apis/admin/getAllCustomer`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `${token}`,
			},
		};
		axios(config).then((res) => {
			setUserList(res.data);
		});
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		// const userId = inputFields2[0].userId;
		// const deviceId = inputFields2[0].deviceId;

		const data = JSON.stringify({
			email: email,
			subject: subject,
			html: html,
		});

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/emailTemplate`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: data,
			};
			axios(config).then((res) => {
				console.log("res", res.data);
				if (res.data.status === 200) {
					alert("Sent sucessfully!");
				} else {
					alert(res.data.message);
				}
			});
		} catch (error) {
			if (error) {
				alert("something went wrong!");
			}
			console.log(error.res.data);
		}
	};
	return (
		<div>
			<div className="container">
				<div className="row ">
					<div className="col-md-8 ">
						<div className="mod-content data ">
							<div className="mod-header-section d-flex justify-content-between ">
								<h4 className="mt-2">Send Invoice To Customer</h4>
							</div>

							<form>
								<div class="form-group pt-4 pr-4 pl-4">
									<label for="fromname" class="control-label">
										<small class="text-danger">* </small>
										To Name
									</label>
									{/* <MySelect
										options={userList}
										isMulti
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										components={{ Option, MultiValue, animatedComponents }}
										onChange={handleChange}
										allowSelectAll={true}
										value={optionSelected}
									/> */}
									<select
										className="custom-select"
										onChange={(e) => {
											setEmail(e.target.value);
										}}>
										<option selected>Select </option>
										{userList?.map((item) => {
											return (
												<option value={item.email}>{item.firstName}</option>
											);
										})}
									</select>
								</div>

								<div class="form-group pl-4 pr-4 pb-1">
									<label for="subject[2]" class="control-label p-2">
										Subject
									</label>
									<input
										type="text"
										id="subject[2]"
										name="subject[2]"
										class="form-control"
										value={subject}
										onChange={(e) => {
											setSubject(e.target.value);
										}}
									/>
								</div>

								<div class="form-group pl-4 pr-4 pb-1">
									<label for="fromname" class="control-label">
										<small class="text-danger">* </small>
										From Name
									</label>
									<input
										type="text"
										id="fromname"
										name="fromname"
										class="form-control"
										value="{companyname} | CRM"
									/>
								</div>

								<p class="bold pl-4 pr-4 pb-1">Email message</p>

								<div class="form-group pl-4 pr-4 pb-2">
									<CKEditor
										editor={ClassicEditor}
										className="textArea"
										// data="<p>Hello from CKEditor 5!</p>"
										data={html}
										onReady={(editor) => {
											// You can store the "editor" and use when it is needed.
											console.log("Editor is ready to use!", editor);
										}}
										onChange={(event, editor) => {
											const data = editor.getData();
											console.log(data);
											setHtml(data);
										}}
										onBlur={(event, editor) => {
											console.log("Blur.", editor);
										}}
										onFocus={(event, editor) => {
											console.log("Focus.", editor);
										}}
									/>
								</div>

								<div className=" pl-4 pb-3">
									<button
										className="btn btn-primary pl-4 pr-4 pb-2 pt-2"
										onClick={(e) => onSubmit(e)}>
										Sent
									</button>
								</div>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SendEmail;
