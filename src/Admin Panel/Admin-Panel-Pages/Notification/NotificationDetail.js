import React from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
import "./List.css";

const NotificationDetail = () => {
	const location = useLocation();
	const details = location.state.details;
	console.log(details);

	return (
		<div className="col-12 grid-margin" style={{ background: "white" }}>
			<h4 className="p-3">Notification</h4>
			<div className="row">
				<div className="card">
					<div className="card-body">
						<div className="col-12 ">
							<h4 className="text-primary">
								<i class="fa-solid fa-user me-2"></i> {details.firstName}{" "}
								{details.lastName} : {details.customer_id}
							</h4>
							<div className="row mt-4">
								<table class="table table-responsive">
									<thead className="bg-dark text-white">
										<tr>
											<th scope="col">Notification</th>
											<th scope="col"> Created Date</th>
										</tr>
									</thead>

									<tbody>
										{details?.notification?.map((item) => {
											return (
												<tr>
													<td className="p-2 w-50">{item.message}</td>
													<td>
														{moment(item.createdAt)
															.local()
															.format("DD-MM-YYYY  hh:mm:ss ")}
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotificationDetail;
