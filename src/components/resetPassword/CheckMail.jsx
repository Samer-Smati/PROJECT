import React from "react";
import CustomButton from "../button/CustomButton";
import openMail from "../../assets/images/icons/openMail.svg";
import ArrowLeft from "../../assets/images/icons/arrow-left-solid.svg";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
function CheckMail() {
  return (
    <div>
      <div className="login m-t-50 m-l-auto m-r-auto d-block text-center mb-4">
        <div className="mb-3">
          <img src={openMail} alt="openMail" />
        </div>
        <h4 className="fw-600">Check your email</h4>
        <h6 className="text-neutral-60 mb-2 fw-400 m-b-20">
          We sent a password reset link to olivia@iconnect.com
        </h6>
        <CustomButton
          innerText="Open email app"
          className="btn btn-primary-filled text-regular text-white w-100 m-b-10"
        />
        <span className="text-neutral-60">
          Didn’t receive the email?
          <Link
            to="/ForgetPassword"
            className="text-primary-50 text-decoration-none text-medium m-b-10"
          >
            {" "}
            Click to resend
          </Link>
        </span>
        <Link
          className="text-neutral-60 text-decoration-none text-medium d-block m-auto m-t-10"
          to="/"
        >
          <img src={ArrowLeft} className="m-r-10" alt="ArrowLeft" /> Back to log
          in
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default CheckMail;
