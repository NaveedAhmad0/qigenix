import React, { useEffect, useState } from "react";
import "./dashboard.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import cardPic01 from "../../../assets/images/money.png";
import cardPic02 from "../../../assets/images/trade.png";
import cardPic03 from "../../../assets/images/setting.png";
import cardPic04 from "../../../assets/images/folderIcon01.png";
import cardPic05 from "../../../assets/images/folderIcon02.png";
import cardPic06 from "../../../assets/images/folderIcon03.png";
import cardPic07 from "../../../assets/images/Vector.png";
import { useHistory } from "react-router-dom";
import Mytask from "./table";
import ChartJs from '../../../app/charts/ChartJs'




function AdminDashboard() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [ittems, setItems] = useState([]);
  // const [invoiceRefId, setInvoiceRefId] = useState("");

  console.log("items is", ittems);

  // useEffect(() => {
  // 	const getUserDetails = async () => {
  // 		try {
  // 			await axios
  // 				.get(`${API}/admin/sandBox-transactionList`)
  // 				.then((response) => {
  // 					// if (response == 200) {
  // 					console.log(response.data);
  // 					const sample = [];
  // 					for (let i = 0; i < response.data.length; i += 1) {
  // 						sample.push({
  // 							id: response.data[i].id,
  // 							transactionType: response.data[i].transactionType,
  // 							payeeProxyId: response.data[i].payeeProxyId,
  // 							payeeProxyType: response.data[i].payeeProxyType,
  // 							payeeAccountNumber: response.data[i].payeeAccountNumber,
  // 							payeeName: response.data[i].payeeName,
  // 							payerAccountNumber: response.data[i].payerAccountNumber,
  // 							payerName: response.data[i].payerName,
  // 							amount: response.data[i].amount,
  // 							transactionId: response.data[i].transactionId,
  // 							billPaymentRef1: response.data[i].billPaymentRef1,
  // 							billPaymentRef2: response.data[i].billPaymentRef2,
  // 							billPaymentRef3: response.data[i].billPaymentRef3,
  // 						});
  // 						// setInvoiceRefId(response.data[i].t_id);
  // 					}
  // 					// console.log("babla", response.data.data.length);
  // 					setItems(sample);
  // 					setLoading(false);
  // 					setTimeout(() => {
  // 						setLoading(false);
  // 					}, 3000);
  // 					// }
  // 					// const listItems = response.json();
  // 				});
  // 		} catch (error) {
  // 			console.log(error);
  // 		}
  // 	};
  // 	(async () => await getUserDetails())();
  // }, []);

  const { SearchBar } = Search;

  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      classes: "deal-row",
      headerClasses: "deal-header",
    },
    {
      dataField: "payerAccountNumber",
      text: "User Account Number",
      classes: "deal-row",
      headerClasses: "deal-header",
    },
    {
      dataField: "payerName",
      text: "Payer Name",
      classes: "deal-row-2",

      headerClasses: "deal-header",
    },

    {
      dataField: "amount",
      text: "Amount",
      classes: "deal-row",
      headerClasses: "deal-header",
    },
    {
      dataField: "transactionType",
      text: "Transaction Type",
      classes: "deal-row",
      headerClasses: "deal-header",
    },
  ];

  const [totalPaidWithdrawAmount, setTotalPaidWithdrawAmount] = useState("");
  const [totalPendingWithdrawAmount, setTotalPendingWithdrawAmount] =
    useState("");
  const [usersCount, setUsersCount] = useState("");
  const [merchantCount, setMerchantCount] = useState("");

  // useEffect(() => {
  // 	axios.get(`${API}/admin/TotalCount`).then((res) => {
  // 		setTotalPaidWithdrawAmount(res.data.Total_paid_WithdrawAmount);
  // 		setTotalPendingWithdrawAmount(res.data.Total_pending_WithdrawAmount);
  // 		setUsersCount(res.data.users_count);
  // 		setMerchantCount(res.data.merchant_count);
  // 	});
  // }, []);

  return (
    <div className="adminDashboard">
      <div className="container">
        <div className="row">
          <div className=" col-xl-3 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper">
              <div className="d-flex mt-2">
                <div className="d-flex">
                  <div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic01}
                      alt="money.png"
                    ></img>
                  </div>
                  <p>Invoices Awaiting Payment</p>
                </div>
                <p>
                  <strong>12/14</strong>
                </p>
              </div>
              <div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%", backgroundColor: "#DC2626" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xl-3 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper">
              <div className="d-flex mt-2">
                <div className="d-flex">
                  <div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic02}
                      alt="money.png"
                    ></img>
                  </div>
                  <p className="mr-3">Converted Leads</p>
                </div>
                <p>
                  <strong>7/50</strong>
                </p>
              </div>
              <div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "20%", backgroundColor: "#22C55E" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xl-3 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper">
              <div className="d-flex mt-2">
                <div className="d-flex">
                  <div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic03}
                      alt="money.png"
                    ></img>
                  </div>
                  <p className="mr-3">Converted Leads</p>
                </div>
                <p>
                  <strong>4/4</strong>
                </p>
              </div>
              <div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", backgroundColor: "#2563EB" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-xl-3 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper">
              <div className="d-flex mt-2">
                <div className="d-flex">
                  <div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic01}
                      alt="money.png"
                    ></img>
                  </div>
                  <p className="mr-3">Converted Leads</p>
                </div>
                <p>
                  <strong>44/61</strong>
                </p>
              </div>
              <div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%", backgroundColor: "#475569" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="widget">
              <div className="finance-summary">
                <div className="panel_s">
                  <div className="panel-body ">
                    <div className="row home-summary">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="d-flex">
                              <div>
                                <img
                                  className="mr-2 mt-2"
                                  src={cardPic04}
                                  alt="money.png"
                                ></img>
                              </div>
                              <p className="mt-2" style={{ color: "#475569" }}>
                                Invoices Overview
                              </p>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#475569",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Draft
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.00%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0%",
                                    backgroundColor: "#F1F5F9",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#475569",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>14</span> Not Sent
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">85.71%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "85.71%",
                                    backgroundColor: "#475569",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#DC2626",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>9</span> Unpaid
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">64.29%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "64.29%",
                                    backgroundColor: "#DC2626",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#CC8A34",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>3</span> Partially Paid
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">21.43%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "21.43%",
                                    backgroundColor: "#DC2626",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#CC8A34",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Over Due
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.0%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.0%",
                                    backgroundColor: "#CC8A34",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#22C55E",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>2</span> Paid
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">14.29%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.0%",
                                    backgroundColor: "#22C55E",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="d-flex">
                              <div>
                                <img
                                  className="mr-2 mt-2"
                                  src={cardPic05}
                                  alt="money.png"
                                ></img>
                              </div>
                              <p className="mt-2" style={{ color: "#475569" }}>
                                Estimate Overview
                              </p>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#475569",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>5</span> Draft
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">35.71%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "35.71%",
                                    backgroundColor: "#475569",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#475569",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>5</span> Not Sent
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">35.71%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "35.71%",
                                    backgroundColor: "#475569",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#337AB7",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>4</span> Sent
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">28.57%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "28.57%",
                                    backgroundColor: "#337AB7",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#CC8A34",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Expired
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.00%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.00%",
                                    backgroundColor: "#DC2626",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#DC2626",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>5</span> Declined
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">35.71%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "35.71%",
                                    backgroundColor: "#DC2626",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#22C55E",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Accepted
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.00%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.00%",
                                    backgroundColor: "#22C55E",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="d-flex">
                              <div>
                                <img
                                  className="mr-2 mt-2"
                                  src={cardPic06}
                                  alt="money.png"
                                ></img>
                              </div>
                              <p className="mt-2" style={{ color: "#475569" }}>
                                Proposal Overview
                              </p>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#475569",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>1</span> Draft
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">33.33%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "33.33%",
                                    backgroundColor: "#475569",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#337AB7",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>1</span> Not Sent
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">33.33%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "33.33%",
                                    backgroundColor: "#337AB7",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#475569",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>1</span> Open
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">33.33%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "33.33%",
                                    backgroundColor: "#475569",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#337AB7",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Revised
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.00%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.00%",
                                    backgroundColor: "#337AB7",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#DC2626",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Declined
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.00%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.00%",
                                    backgroundColor: "#DC2626",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 text-stats-wrapper mb-3">
                            <div className="d-flex justify-content-between">
                              <div>
                                <p
                                  style={{
                                    color: "#22C55E",
                                    fontWeight: "800",
                                  }}
                                >
                                  <span>0</span> Accepted
                                </p>
                              </div>
                              <div>
                                <p className="text-muted">0.00%</p>
                              </div>
                            </div>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "0.00%",
                                    backgroundColor: "#22C55E",
                                  }}
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <hr className="breakLine"></hr>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="invoice-card">
                          <div>
                            <p>Outstanding Invoices</p>
                            <h4>$26,143.00</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12  mb-3">
                        <div className="invoice-card">
                          <div>
                            <p style={{ color: "#64748B" }}>
                              Outstanding Invoices
                            </p>
                            <h4>$0.00</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12  mb-3">
                        <div className="invoice-card">
                          <div>
                            <p style={{ color: "#22C55E" }}>
                              Outstanding Invoices
                            </p>
                            <h4>$6,215.00</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container tabs mt-3">
              <div class="card">
                <div class="card-body ">
                  {/* <!-- Bordered Tabs --> */}
                  <ul class="nav nav-tabs nav-tabs-bordered pt-3 px-2">
                    <li class="nav-item">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#MyTasks"
                      >
                        <i class="fa-solid fa-list-check"></i> My Tasks
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#MyProjects"
                      >
                        <i class="fa-solid fa-chart-bar"></i> My Projects
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#MyReminders"
                      >
                        <i class="fa-regular fa-clock"></i> My Reminders
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#Tickets"
                      >
                        <i class="fa-solid fa-ticket"></i> Tickets
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#Announcements"
                      >
                        <i class="fa-solid fa-bullhorn"></i> Announcements
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#LatestActivity"
                      >
                        <i class="fa-solid fa-chart-line"></i> Latest Activity
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-2">
                    <div class="tab-pane fade show active MyTasks" id="MyTasks">
                      <p className="ms-3 mt-3">
                        <a href="/view">View All</a>
                      </p>
                      <Mytask></Mytask>
                    </div>

                    <div
                      class="tab-pane fade MyProjects pt-3"
                      id="MyProjects"
                    ></div>

                    <div
                      class="tab-pane fade MyReminders pt-3"
                      id="MyReminders"
                    ></div>

                    <div class="tab-pane fade Tickets pt-3" id="Tickets"></div>

                    <div
                      class="tab-pane fade Announcements pt-3"
                      id="Announcements"
                    ></div>

                    <div
                      class="tab-pane fade LatestActivity pt-3"
                      id="LatestActivity"
                    ></div>
                  </div>
                  {/* <!-- End Bordered Tabs --> */}
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-2">
            <div className="row p-2" style={{ background: "white" }}>
              <div
                className="row list"
                style={{ borderBottom: "1px solid #EAEDF1" }}
              >
                <div className=" col pt-2 pb-2">
                  <span>
                    <i class="fa-regular fa-circle-check me-3"></i>
                    My To Do Items
                  </span>
                </div>
                <div className="col right-sec text-end pt-2 pb-2">
                  <a href="/view">View All</a>
                  <a href="/Newtodo" className="ms-3">
                    New To Do
                  </a>
                </div>
              </div>

              <div
                className="col-12 mt-3"
                style={{
                  color: "#CA8A04",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                }}
              >
                <i class="fa-solid fa-triangle-exclamation me-2"></i> Latest to
                do's
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex">
                  <span>
                    <i
                      class="fa-solid fa-grip-vertical"
                      style={{ color: "#EEEEEE" }}
                    ></i>
                  </span>
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <ul className="ms-3">
                    <li> ideate designs</li>
                    <li>
                      {" "}
                      10-04-2023 00:06:15{" "}
                      <span style={{ float: "right" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="fa-solid fa-xmark ms-1"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item d-flex">
                  <span>
                    <i
                      class="fa-solid fa-grip-vertical"
                      style={{ color: "#EEEEEE" }}
                    ></i>
                  </span>
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>

                  <ul className="ms-3">
                    <li> Queen: so she.</li>
                    <li>
                      {" "}
                      10-04-2023 00:06:15{" "}
                      <span style={{ float: "right" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="fa-solid fa-xmark ms-1"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item d-flex">
                  <span>
                    <i
                      class="fa-solid fa-grip-vertical"
                      style={{ color: "#EEEEEE" }}
                    ></i>
                  </span>
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ul className="ms-4">
                    <li> I'm not myself, you see.' 'I don't.</li>
                    <li>
                      {" "}
                      10-04-2023 00:06:15{" "}
                      <span style={{ float: "right" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="fa-solid fa-xmark ms-1"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>

              <div
                className="col-12 mt-3"
                style={{
                  color: "#16A34A",
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                }}
              >
                <i class="fa-solid fa-check me-2"></i> Latest finished to do's
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex">
                  <span>
                    <i
                      class="fa-solid fa-grip-vertical"
                      style={{ color: "#EEEEEE" }}
                    ></i>
                  </span>
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <ul className="ms-3">
                    <li className="complete"> Alice thought this a very.</li>
                    <li>
                      {" "}
                      10-04-2023 00:06:15{" "}
                      <span style={{ float: "right" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="fa-solid fa-xmark ms-1"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item d-flex">
                  <span>
                    <i
                      class="fa-solid fa-grip-vertical"
                      style={{ color: "#EEEEEE" }}
                    ></i>
                  </span>
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>

                  <ul className="ms-3">
                    <li className="complete">
                      Cat; and this Alice thought she might as well as.
                    </li>
                    <li>
                      {" "}
                      10-04-2023 00:06:15{" "}
                      <span style={{ float: "right" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="fa-solid fa-xmark ms-1"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </span>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item d-flex">
                  <span>
                    <i
                      class="fa-solid fa-grip-vertical"
                      style={{ color: "#EEEEEE" }}
                    ></i>
                  </span>
                  <input
                    class="form-check-input ms-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <ul className="ms-4">
                    <li className="complete">
                      {" "}
                      Cat; and this Alice thought she might as well as.
                    </li>
                    <li>
                      {" "}
                      10-04-2023 00:06:15{" "}
                      <span style={{ float: "right" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ fontSize: "20px" }}
                        ></i>
                        <i
                          class="fa-solid fa-xmark ms-1"
                          style={{ fontSize: "16px" }}
                        ></i>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="row mt-4" style={{ background: "white" }}>
              <div className="col-12 p-3">
                <span>
                  <img src={cardPic07} alt=""></img> Leads Overview
                </span>
              </div>
           
           <div className="col-12">
           <ChartJs></ChartJs>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
