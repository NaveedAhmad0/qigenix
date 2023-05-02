import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Form } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import data from "./data";

import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./List.css";

function CustomerList() {
  const { ExportCSVButton } = CSVExport;
  const [tableRowsData, setTableRowsData] = useState(data);

  const history = useHistory();
  const [loading, setLoading] = useState(false);
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

  const products = [];
  // list.map((list)=>{})
  products.push(
    {
      id: 1212,
      code: "ssfsd",
      purchasedate: "Jul. 8, 2022",
      status: (
        <input
          type="radio"
          id="customRadioInline1"
          name="customRadioInline1"
          className="custom-control-input"
        />
      ),
      branchredeem: "Glorietta - GLO101",
      redemptiondate: "Jul. 10, 2022 at 4:30pm",
    },

    {
      id: 1004,
      code: "5Q2H-MWXF-36HE",
      purchasedate: "Jul. 8, 2022",
      status: "used",
      branchredeem: "Glorietta - GLO101",
      redemptiondate: "Jul. 10, 2022 at 4:30pm",
    },
    {
      id: 1005,
      code: "5Q2H-MWXF-36HE",
      purchasedate: "Jul. 8, 2022",
      status: "used",
      branchredeem: "Glorietta - GLO101",
      redemptiondate: "Jul. 10, 2022 at 4:30pm",
    },
    {
      id: 1006,
      code: "5Q2H-MWXF-36HE",
      purchasedate: "Jul. 8, 2022",
      status: "used",
      branchredeem: "Glorietta - GLO101",
      redemptiondate: "Jul. 10, 2022 at 4:30pm",
    },
    {
      id: 1007,
      code: "5Q2H-MWXF-36HE",
      purchasedate: "Jul. 8, 2022",
      status: "used",
      branchredeem: "Glorietta - GLO101",
      redemptiondate: "Jul. 10, 2022 at 4:30pm",
    }
  );

  console.log("list of item", ittems);

  // list.map((list)=>{})
  const customStyles = {
    headCells: {
        style: {
			borderRight:'0.1rem solid #D9D9D9 !important'
        },
    },
   
};

  const headerResponsive = [
    {
      name: "#",
      selector: "id",
      sortable: false,
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
    {
      name: "Company",
      selector: "runtime",
      sortable: true,
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#4E7AED",
      },
    },
    {
      name: "Primary Contact",
      selector: "director",
      sortable: false,
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#4E7AED",
      },
    },
    {
      name: "Primary Email",
      selector: "year",
      sortable: false,
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#4E7AED",
      },
    },
    {
      name: "Phone",
      selector: "year",
      sortable: false,
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#4E7AED",
      },
    },
    {
      name: "active",
      cell: (d) => [
        <div class="form-check form-switch text-center">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
          ></input>
        </div>,
      ],
      sortable: false,
    },
    {
      name: "Groups",
      selector: "year",
      cell: (d) => [
        <button
          className="btn"
          style={{
            background: "#FFFFFF",
            border: "1px solid #EFEFEF",
            borderRadius: "5px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "11px",
            lineHeight: "18px",
            color: "#515151",
          }}
        >
          {d.year}
        </button>,
      ],
      sortable: false,
    },
    {
      name: "Date Created",
      selector: "year",
      sortable: false,
    },
  ];

  useEffect(() => {}, [tableRowsData]);
  return (
    <div>
      {/* <MerchantForm /> */}
      {loading ? (
        <div className="row" style={{ height: "500px" }}>
          <div className="col-12 text-center my-auto">
            <ClipLoader color="#136be0" size={100} speedMultiplier={1} />
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row page-title-header">
                    <div className="col-6">
                      <button className="btn btn-primary mr-2">
					  <i class="fa-solid fa-plus"></i>  New Customer
                      </button>
                      <button className="btn btn-primary mr-2">
					  <i class="fa-solid fa-upload"></i>  Import Customers
                      </button>
                      <button className="btn btn-outline-secondary mr-2">
					  <i class="fa-regular fa-user"></i>  Contacts
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row page-title-header">
                        <div className="col-6">
						
                          <h4><i class="fa-regular fa-file-lines me-2"></i> Customers summary</h4>
                        </div>
                      </div>
                      <div className="row page-title-header">
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p>
                            <span className="text-black">15 </span>Import
                            Customers
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p className="text-success">
                            {" "}
                            <span className="text-black">15 </span> Active
                            Customers
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p className="text-danger">
                            <span className="text-black">15 </span>Inactive
                            Customers
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p className="text-primary">
                            <span className="text-black">15 </span>Active
                            Contacts
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p className="text-danger">
                            <span className="text-black">15 </span>Inactive
                            Customers
                          </p>
                        </div>
                        <div className="col-xl-2 col-lg-6  col-sm-6 grid-margin-xl-0 grid-margin">
                          <p>
                            <span className="text-black">15 </span>Contacts
                            Logged..
                          </p>
                        </div>
                      </div>
                      <hr style={{border:'1px #EAEDF1'}}></hr>
                      <div className="row page-title-header">
                        <div className="col-6">
                          <div className="form-check">
                            <label className="form-check-label text-muted">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <i className="input-helper"></i>
                              Exclude Inactive Customers
                            </label>
                          </div>
                          <div
                            class="btn-group btn-group-toggle"
                            data-toggle="buttons"
							style={{marginLeft:"65px"}}
							
                          >
                            <label
                              class="btn active"
                              style={{
                                borderRight: "1px solid #D9D9D9",
                                color: "#475569",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "12px",
                                lineHeight: "14px",
                              }}
                            >
                              <input
                                type="radio"
                                name="options"
                                id="option1"
                                autocomplete="off"
                                checked
                              />{" "}
                              Export
                            </label>
                            <label
                              class="btn"
							  style={{
                                borderRight: "1px solid #D9D9D9",
                                color: "#475569",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "12px",
                                lineHeight: "14px",
                              }}
                            >
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autocomplete="off"
                              />{" "}
                              Bulk Actions
                            </label>
                            <label
                              class="btn"
                              style={{
                                borderRight: "1px solid #D9D9D9",
                                color: "#475569",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "12px",
                                lineHeight: "14px",
                              }}
                            >
                              <input
                                type="radio"
                                name="options"
                                id="option3"
                                autocomplete="off"
                              />
                              <i class="fa-solid fa-rotate"></i>
                            </label>
                          </div>
                        </div>
                      </div>

                      <DataTable
                        columns={headerResponsive}
                        data={tableRowsData}
                        pagination={20}
                        selectableRows
                        highlightOnHover
                        subHeader
						customStyles={customStyles}
						paginationComponentOptions={{rowsPerPageText: 'Showing 1 to 6 of 12 entries:'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomerList;
