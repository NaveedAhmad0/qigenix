import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./customerForm.css";
import sublogo from "../../../assets/images/Group 220.png";
import logo from "../../../assets/images/logo.png";
import axios from "axios";
import { useEffect } from "react";

const SetupForm = () => {
  const [inputFields, setInputFields] = useState();
  const token = localStorage.getItem("token");
  const [toggle, setToggle] = useState(false);
  const [toggled, setToggle2] = useState(false);

  const fetchData = async () => {
    try {
      var config = {
        method: "get",
        url: `https://qigenix.ixiono.com/apis/admin/get-companyinfo`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      axios(config)
        .then(function (response) {
          setInputFields(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [postImage, setPostImage] = useState("");
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const splitbase = fileReader.result;
        const mainBase64 = splitbase.split(",");
        resolve(mainBase64[1]);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, icon: base64 });
  };

  const handleSubmit = async () => {
    const name = inputFields.company_name;
    const domain = inputFields.company_domain;
    const logo = postImage.icon;

    const data = JSON.stringify({
      company_name: name,
      company_domain: domain,
      logo: logo,
    });
    console.log(data);
    try {
      var config = {
        method: "post",
        url: `https://qigenix.ixiono.com/apis/admin/set-companyinfo`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          alert(response.data.message);
          setToggle(!toggle);
          setToggle2(false);
          setPostImage("");
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, [toggle]);

  return (
    <div className="col-12 grid-margin">
      <form className="form-sample">
        {/* <p className="card-description"> Personal info </p> */}
        <div className="row">
          {/* <div
            className="col-md-12 pb-4 "
            style={{ borderBottom: "1px solid #EAEDF1", alignItems: "center" }}
          >
            <img src={sublogo} alt=""></img>
            <i
              class="fa-solid fa-xmark text-danger mt-3"
              style={{ float: "right" }}
            ></i>
          </div> */}
          <div
            className="col-md-12 py-4 "
            style={{ display: toggled === true ? "none" : "block" ,background:'#f1f5f9'}}
          >
            <img
              width={200}
              src={"data:image/;base64," + inputFields?.logo}
              alt="icon"
            />
            <i
              class="fa-solid fa-xmark text-danger mt-3 me-3"
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => setToggle2(true)}
            ></i>
          </div>

          <div
            className="col-md-12 pt-4"
            style={{ borderBottom: "1px solid #EAEDF1", alignItems: "center" }}
          >
            <Form.Group>
              <Form.Label className=" mb-3">Company Logo</Form.Label>

              <Form.Control
                className="addcustomerInputN"
                type="file"
                id="icon"
                name="icon"
                placeholder="Choose logo"
                onChange={(e) => handleFileUpload(e)}
              />
            </Form.Group>
          </div>

          <div
            className="col-md-12 pt-4"
            style={{ borderBottom: "1px solid #EAEDF1", alignItems: "center" }}
          >
            <Form.Group>
              <Form.Label className=" mb-3">Company Name</Form.Label>

              <Form.Control
                className="addcustomerInputN"
                value={inputFields?.company_name}
                onChange={(e) => {
                  setInputFields({
                    ...inputFields,
                    company_name: e.target.value,
                  });
                }}
                type="text"
                name="company_name"
                placeholder="Company Name"
              />
            </Form.Group>
          </div>

          <div className="col-md-12 py-4">
            <Form.Group>
              <Form.Label className=" mb-3">Company Domain Name</Form.Label>

              <Form.Control
                className="addcustomerInputN"
                value={inputFields?.company_domain}
                onChange={(e) => {
                  setInputFields({
                    ...inputFields,
                    company_domain: e.target.value,
                  });
                }}
                type="text"
                name="companyDomainName"
                placeholder="Company Domain Name"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 ">
            <button
              type="button"
              className="btn btnCustomerProfileN btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetupForm;
