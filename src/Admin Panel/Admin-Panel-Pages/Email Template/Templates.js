import React from "react";
import "./Templates.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Setup = () => {
	const autoComplete = `<p class="card-text pt-2 pb-4">
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
	const InvoiceOverDue = `<p class="card-text pt-2 pb-4">
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
	const CloseTicket = `<p class="card-text pt-2 pb-4">
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
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="d-flex mb-2 justify-content-between">
						<h4 className="tw-mt-0 tw-font-semibold tw-text-lg tw-text-neutral-700">
							Email Templates
						</h4>
						<Link to={"/admin/send-email"}>
							<button className="btn btn-success">Send New mail</button>
						</Link>
					</div>

					<div className="panel_s">
						<div className="panel-body">
							<div className="row">
								<div className="col-md-12">
									<h4 className="tw-font-semibold email-template-heading mt-2">
										Tickets
										{/* <a
											href="https://perfexcrm.com/demo/admin/emails/disable_by_type/ticket"
											className="pull-right mleft5 mright25">
											<small>Disable All</small>
										</a>
										<a
											href="https://perfexcrm.com/demo/admin/emails/enable_by_type/ticket"
											className="pull-right">
											<small>Enable All</small>
										</a> */}
									</h4>
									<div className="table-responsive mb-2">
										<table className="table table-bordered">
											<thead>
												<tr>
													<th>
														<span className="tw-font-semibold">
															Template Name
														</span>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="">
														<Link
															to={{
																pathname: "/admin/close-ticket",
																query: CloseTicket,
															}}>
															Auto Close Ticket
														</Link>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/3"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												{/* <tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/3">
															New Ticket Opened (Opened by Staff, Sent to
															Customer)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/3"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/4">
															Ticket Reply (Sent to Customer)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/4"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/5">
															New Ticket Opened - Autoresponse
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/5"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/9">
															New Ticket Created (Opened by Customer, Sent to
															Staff Members)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/9"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/11">
															Ticket Reply (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/11"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/30">
															Auto Close Ticket
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/30"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/51">
															New Ticket Assigned (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/51"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>

								{/* <div className="col-md-12">
									<h4 className="tw-font-semibold email-template-heading mt-2">
										Estimates
										<a
											href="https://perfexcrm.com/demo/admin/emails/disable_by_type/ticket"
											className="pull-right mleft5 mright25">
											<small>Disable All</small>
										</a>
										<a
											href="https://perfexcrm.com/demo/admin/emails/enable_by_type/ticket"
											className="pull-right">
											<small>Enable All</small>
										</a>
									</h4>
									<div className="table-responsive mb-2">
										<table className="table table-bordered">
											<thead>
												<tr>
													<th>
														<span className="tw-font-semibold">
															Template Name
														</span>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/10">
															Send Estimate to Customer
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/10"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/12">
															Estimate Already Sent to Customer
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/12"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/18">
															Estimate Declined (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/18"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/19">
															Estimate Accepted (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/19"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/26">
															Thank You Email (Sent to Customer After Accept)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/26"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/38">
															Estimate Expiration Reminder
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/38"
															className="pull-right">
															<small className="small-1">Enable</small>
														</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div> */}

								<div className="clearfix"></div>

								<div className="col-md-12">
									<h4 class="bold email-template-heading mt-2">
										Contracts
										{/* <a
											href="https://perfexcrm.com/demo/admin/emails/disable_by_type/contract"
											className="pull-right mleft5 mright25">
											<small>Disable All</small>
										</a>
										<a
											href="https://perfexcrm.com/demo/admin/emails/enable_by_type/contract"
											className="pull-right">
											<small>Enable All</small>
										</a> */}
									</h4>
									<div className="table-responsive mb-2">
										<table className="table table-bordered">
											<thead>
												<tr>
													<th>
														<span className="tw-font-semibold">
															Template Name
														</span>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="">
														<Link
															to={{
																pathname: "/admin/customer-added",
																query: autoComplete,
															}}>
															New Contract/Customer Added
														</Link>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/13"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												{/* <tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/28">
															Send Contract to Customer
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/28"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/60">
															New Comment &nbsp;(Sent to Customer Contacts)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/60"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/61">
															New Comment (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/61"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/66">
															Contract Expiration Reminder (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/66"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/70">
															Contract Signed (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/70"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>

								<div className="col-md-12">
									<h4 className="bold email-template-heading mt-2">
										Invoices
										{/* <a
											href="https://perfexcrm.com/demo/admin/emails/disable_by_type/invoice"
											className="pull-right mleft5 mright25">
											<small>Disable All</small>
										</a>
										<a
											href="https://perfexcrm.com/demo/admin/emails/enable_by_type/invoice"
											className="pull-right">
											<small>Enable All</small>
										</a> */}
									</h4>
									<div className="table-responsive mb-2">
										<table className="table table-bordered">
											<thead>
												<tr>
													<th>
														<span className="tw-font-semibold">
															Template Name
														</span>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="">
														<Link
															to={{
																pathname: "/admin/invoice-overdue",
																query: InvoiceOverDue,
															}}>
															Invoice Overdue Notice
														</Link>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/2"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												{/* <tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/6">
															Invoice Payment Recorded (Sent to Customer)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/6"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/7">
															Invoice Overdue Notice
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/7"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/8">
															Invoice Already Sent to Customer
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/8"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/8">
															Invoice Payment Recorded (Sent to Staff)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/8"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/8">
															Invoice Due Notice
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/8"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr>
												<tr>
													<td className="">
														<a href="https://perfexcrm.com/demo/admin/emails/email_template/8">
															Invoices Payments Recorded in Batch (Sent to
															Customer)
														</a>
														<a
															href="https://perfexcrm.com/demo/admin/emails/disable/8"
															className="pull-right">
															<small className="small-1">Disable</small>
														</a>
													</td>
												</tr> */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setup;
