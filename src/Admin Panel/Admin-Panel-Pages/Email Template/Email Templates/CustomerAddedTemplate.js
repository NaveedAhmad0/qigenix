import React, { useEffect, useState } from "react";
import "./templateContent.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import makeAnimated from "react-select/animated";
import axios from "axios";
import {
	useLocation,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const CustomerAdded = () => {
	const [optionSelected, setOptionSelected] = useState("");
	const animatedComponents = makeAnimated();
	const [userList, setUserList] = useState([]);
	const [subject, setSubject] = useState("");
	const [html, setHtml] = useState("");
	const [email, setEmail] = useState("");
	const token = localStorage.getItem("token");
	const { query } = useLocation();
	console.log("QU", query);
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
		});

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/admin/auto-send-registered`,
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
										disabled
										name="fromname"
										class="form-control"
										value="Admin"
									/>
								</div>

								<p class="bold pl-4 pr-4 pb-1">Email message</p>

								<div class="form-group pl-4 pr-4 pb-2">
									<CKEditor
										editor={ClassicEditor}
										className="textArea"
										disabled
										// data="<p>Hello from CKEditor 5!</p>"
										data={query}
										onReady={(editor) => {
											// You can store the "editor" and use when it is needed.
											console.log("Editor is ready to use!", editor);
										}}
										// onChange={(event, editor) => {
										// 	const data = editor.getData();
										// 	console.log(data);
										// 	setHtml(data);
										// }}
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

export default CustomerAdded;
