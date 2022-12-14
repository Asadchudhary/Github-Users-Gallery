import React from "react";
import { FcApproval } from "react-icons/fc";
const Card = (props) => {
  return (
    <>
      <div className="col-10 col-md-4 mt-5 mb-2">
        <div className="card p-2">
          <div className="d-flex align-items-center">
            <div className="image">
              <img src={props.img} className="rounded imgsize" alt="" />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0 text-left">
                {props.login} <FcApproval />
              </h4>
              {/* <span className="text-left">Developer</span> */}
              <div className="p-2 mt-2 d-flex justify-content-between rounded text-white  stats">
                <div className="d-flex flex-column bgc">
                  <span className="articles">Article</span>
                  <span className="number1">38</span>
                </div>
                <div className="d-flex flex-column bgc">
                  <span className="followers">Followers</span>
                  <span className="number2">38</span>
                </div>
                <div className="d-flex flex-column bgc">
                  <span className="ratings">Rating</span>
                  <span className="number3">38</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
