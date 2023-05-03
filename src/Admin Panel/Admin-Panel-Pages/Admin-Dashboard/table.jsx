import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import DataTable from "react-data-table-component";
import data from "../Customer List/data";
import "../Customer List/List.css";
function Mytask() {
  const [tableRowsData, setTableRowsData] = useState(data);

  const customStyles = {
    headCells: {
      style: {
        borderRight: "0.1rem solid #D9D9D9 !important",
      },
    },
  };

  const headerResponsive = [
    {
      name: "#",
      selector: "id",
      sortable: false,
      width: "40px", // added line here
      headerStyle: (selector, id) => {
        return { textAlign: "center" }; // removed partial line here
      },
    },
    {
      name: "Name",
      //   selector: "runtime",
      sortable: true,
      width: "130px",
      cell: () => [
        <p
          className="mt-3"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            color: "#515151",
          }}
        >
          Makan Bakso Adams Group Start Timer | Edit | Delete
        </p>,
      ],
    },
    {
      name: "Status",
      selector: "director",
      sortable: false,
      width: "140px",
      cell: () => [
        <div class="dropdown statusBtn">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            In Progress
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Pending</li>
            <li>Completed</li>
            <li>In progress</li>
          </ul>
        </div>,
      ],
    },
    {
      name: "Start Date",
      selector: "year",
      sortable: false,
      width: "100px",
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#515151",
      },
    },
    {
      name: "Tags",
      selector: "year",
      sortable: false,
      width: "150px",
      style: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "12px",

        color: "#4E7AED",
      },
      cell: () => [
        <div>
          <button className="btn followUp">Follow Up</button>
          <br></br>
          <button className="btn followUp mt-2">próxima semana</button>
        </div>,
      ],
    },

    {
      name: "Priority",
      selector: "year",
      sortable: false,
      cell: () => [
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle text-danger"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            High
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Urgent</li>
          </ul>
        </div>,
      ],
    },
  ];

  useEffect(() => {}, [tableRowsData]);
  return (
    <div>
      <div class="btn-group btn-group-toggle ms-3" data-toggle="buttons">
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
        class="btn-group btn-group-toggle me-4"
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

      <DataTable
        className="dataTable px-3"
        columns={headerResponsive}
        data={tableRowsData}
        pagination={20}
        highlightOnHover
        subHeader
        customStyles={customStyles}
        paginationComponentOptions={{ rowsPerPageText: "" }}
      />
    </div>
  );
}
export default Mytask;
