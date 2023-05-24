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
              <i class="fa-solid fa-user me-2"></i>   {details.firstName} {details.lastName} : {details.customer_id}
              </h4>
              <div className="row mt-4">
              <div class="col-md-7">
							 {details.notification.map((item) => {
									return (
									
											<p className="p-3 border text-dark"style={{ fontSize: "15px" ,borderRadius:"8px",background:"#f1f5f97d",boxShadow:'0px 0px 10px #b3bbc2a1 inset'}}>
												
												{item.message} <br />
												< p className="pt-2 text-primary" style={{ fontSize: "11px" }}>
													{moment(item.createdAt)
														.local()
														.format("DD-MM-YYYY hh:mm:ss ")}
												</p>
											</p>
									
								
									);
								})} 
							</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
