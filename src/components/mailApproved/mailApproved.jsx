import React from "react";
import Footer from "../footer/Footer";
import CheckedGreen from "../../assets/images/icons/check-green.svg";
import IconnectLogo from "../../assets/images/logos/Iconnect-logo.svg";
import { Link } from "react-router-dom";

function mailApproved() {
  return (
    <div className="text-center">
    <img width='250' src={IconnectLogo} alt='IconnectLogo' className="mb-4 mt-4"/>
      <div className="login m-t-50 m-l-auto m-r-auto d-block text-center mb-4">
        <div className="mb-3">
          <img src={CheckedGreen} alt="CheckedGreen" />
        </div>
        <h4 className="fw-600">You are invited to use iConenct</h4>
        <h6 className="text-neutral-60 mb-2 fw-400 m-b-20">
          You have been invited to use iConnect advrtiser app, follow the steps
          to complete your account
        </h6>
         <Link
          to="/Register"
          className="btn btn-primary-filled text-regular text-white w-100"
        >
          Join iConnect
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default mailApproved;
