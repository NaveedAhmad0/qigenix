import React from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
const NotificationDetail = () => {
	const location = useLocation();
	const details = location.state.details;

	console.log(details);
	

	return (
		<div className="col-12 grid-margin" style={{background:'white'}}>
			<div className="row mt-2">
				<div className="col-12">
					<div className="form-check p-3 text-primary">
						<h2>{details.customer_id}</h2>
					</div>
                   
				</div>
                
                <div className="card">
                <div className="card-body">
                  <div className="col-12 grid-margin">
                   
                    <div className="row mt-4">
                      <div className="col-6">
                        <h5 className="text-danger">{details.firstName} {details.lastName}</h5>
                      </div>
                      <div className="col-6 ">
                      
                        <p className="font-weight-bold">
                          Created Date:
                          <span className="font-weight-normal"> 
                         { moment(details.notification[0].createdAt).local().format("DD-MM-YYYY  hh:mm:ss ")}
						  </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <table class="table">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th scope="col">Notification</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                          <tr>
                           
                            <td >{details.notification[0].message}</td>
                           
							
                          </tr>
						 
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
