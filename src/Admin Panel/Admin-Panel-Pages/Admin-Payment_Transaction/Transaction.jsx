
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import data from "./data";

import { useHistory } from "react-router-dom";

import "./List.css";

function Transaction() {
  const { ExportCSVButton } = CSVExport;
  const [tableRowsData, setTableRowsData] = useState(data);

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [ittems, setItems] = useState([]);

  console.log("list of item", ittems);

  // list.map((list)=>{})
  const customStyles = {
    headCells: {
      style: {
        borderRight: "0.1rem solid #D9D9D9 !important",
      },
    },
  };

  const headerResponsive = [
    {
      name: "Payment #",
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
      name: "Invoice #",
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
      name: "Payment Mode",
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
      name: "Transaction ID",
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
      name: "Customer	",
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
      name: "Amount",
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
      name: "Date",
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
          <div className="row bg-light p-3 ">
            <div className="col-md-12 ">
            <div class="btn-group btn-group-toggle " data-toggle="buttons">
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
          <input type="radio" name="options" id="option3" autocomplete="off" />
          <i class="fa-solid fa-rotate"></i>
        </label>
      </div>
      <div
        style={{ float: "right", width: "20%" }}
        class="btn-group btn-group-toggle "
        data-toggle="buttons"
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
        />
      </div>
              <DataTable className="pt-3"
                columns={headerResponsive}
                data={tableRowsData}
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
      )}
    </div>
  );
}
export default Transaction;
