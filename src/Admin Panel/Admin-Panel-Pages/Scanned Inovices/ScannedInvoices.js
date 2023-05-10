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
import { Fragment } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import moment from "moment";
import Pdf from "react-to-pdf";

import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./scannedInvoices.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ScannedInvoice() {
  const { ExportCSVButton } = CSVExport;
  const [tableRowsData, setTableRowsData] = useState();
  const [rowData, setRowData] = useState();
  const ref = React.createRef();

  const [search, setSearch] = useState("");
  const [Filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const token = localStorage.getItem("token");
  const history = useHistory();

  const fetchData = async () => {
    try {
      var config = {
        method: "get",
        url: `https://qigenix.ixiono.com/apis/admin/getAllScans`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      axios(config)
        .then(function (response) {
          setTableRowsData(response.data.totalResponse);
          console.log(response.data.totalResponse);
          setFiltered(response.data.totalResponse);
        })
        .catch(function (error) {
          console.log(error.response.data.totalResponse);
        });
    } catch (error) {
      console.log(error.response.data.totalResponse);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [tableRowsData]);

  useEffect(() => {
    const result = tableRowsData?.filter((tables) => {
      return tables.scan_id.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(result);
  }, [search]);

  const customStyles = {
    headCells: {
      style: {
        borderRight: "0.1rem solid #D9D9D9 !important",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
    row: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
    },
  };

  const headerResponsive = [
    {
      name: "Scan Id",
      selector: "scan_id",
      sortable: false,
      style: {
        color: "#4E7AED",
      },
    },

    {
      name: "Customer Id",
      selector: "customer_id",
      sortable: true,
      style: {
        color: "#4E7AED",
      },
    },
    {
      name: "Device Id",
      selector: "device_id",
      sortable: false,
      style: {
        color: "#4E7AED",
      },
    },
    {
      name: "Tax",
      selector: "tax",
      sortable: false,
      style: {
        color: "#4E7AED",
      },
    },
    {
      name: "Total Amount",
      selector: "total_amount",
      sortable: false,
      style: {
        color: "#4E7AED",
      },
    },

    {
      name: "Description",
      selector: "description",
      sortable: false,
      style: {
        color: "#4E7AED",
      },
    },

    {
      name: "Product",
      style: {
        fontSize: "18px",
      },
      cell: (row) => [
        <p
          onClick={() => {
            setToggle(!toggle);
            setRowData(row);
          }}
          class="badge bg-warning"
          style={{ cursor: "pointer" }}
        >
          {row.products.length}
        </p>,
      ],
    },
  ];

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
            <h4>List Of Invoices</h4>
            <div className={toggle ? "col-md-12" : "col-12"}>
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      {/* <hr style={{ border: "1px #EAEDF1" }}></hr> */}
                      <div className="row page-title-header">
                        <div className="col-12">
                          <div
                            class="btn-group btn-group-toggle"
                            data-toggle="buttons"
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
                                id="option3"
                                autocomplete="off"
                              />
                              <i class="fa-solid fa-rotate"></i>
                            </label>
                          </div>

                          <div
                            class="btn-group btn-group-toggle me-4"
                            data-toggle="buttons"
                            style={{ float: "right" }}
                          >
                            <label
                              class="btn active"
                              style={{
                                borderRight: "1px solid #D9D9D9",

                                color: "#475569",
                                fontSize: "12px",
                                lineHeight: "14px",
                              }}
                            >
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </label>

                            <input
                              type="text"
                              style={{
                                borderRight: "1px solid #D9D9D9",
                                color: "#475569",
                                fontFamily: "Roboto",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "12px",
                                lineHeight: "14px",
                                border: "none",
                                width: "100%",
                                textAlign: "center",
                              }}
                              placeholder="Search..."
                              value={search}
                              onChange={(e) => {
                                setSearch(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <DataTable
                        columns={headerResponsive}
                        data={Filtered}
                        pagination={20}
                        highlightOnHover
                        subHeader
                        customStyles={customStyles}
                        paginationComponentOptions={{
                          rowsPerPageText: "Showing 1 to 6 of 12 entries:",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggle ? "col-12" : "invoiceDisplay"}>
              <div className="card" ref={ref}>
                <div className="card-body">
                  <div className="col-12 grid-margin">
                    <div className="row mt-4">
                      <div className="col-6">
                        <h5 className="text-primary">Scan Id :</h5>
                        <p>{rowData?.scan_id}</p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="font-weight-bold">
                          Bill To :
                          <p className="text-primary">{rowData?.customer_id}</p>
                        </p>
                        <p className="font-weight-bold">
                          Name:
                          <span className="font-weight-normal"></span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <table class="table table-responsive">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th scope="col">#Product Id</th>
                            <th scope="col">Product Name</th>

                            <th scope="col">QR Code</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rowData?.products?.map((item) => {
                            return (
                              <tr>
                               <td>{item.product_id}</td> 
                                <td>{item.product_name}</td>
                                <td>{item.qr_code}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>
                                  {moment(item.createdAt).local().format("DD-MM-YYYY hh:mm:ss ")}
                                  </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      <table class="table table-bordered mt-5">
                        <tr>
                          <th scope="col" className="text-dark">
                            Sub Total :
                          </th>
                          <td>$55,000</td>
                        </tr>
                        <tr>
                          <th className="text-dark">Total :</th>
                          <td>$55,000</td>
                        </tr>
                        <tr>
                          <th className="text-danger">Amount Due :</th>
                          <td>$55,000</td>
                        </tr>
                      </table>

                      <div className="row">
                        <div className="col-12 ">
                          <Pdf targetRef={ref} filename="invoice.pdf">
                            {({ toPdf }) => (
                              <button
                                className="btn btn-success mt-4"
                                onClick={toPdf}
                              >
                                Generate Pdf
                              </button>
                            )}
                          </Pdf>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ScannedInvoice;
