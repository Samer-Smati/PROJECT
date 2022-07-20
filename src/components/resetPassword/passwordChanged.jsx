import React from "react";
import { Link } from "react-router-dom";
import CheckedGreen from "../../assets/images/icons/check-green.svg";
import Footer from "../footer/Footer";
function PasswordChanged() {
  return (
    <div>
      <div className="login m-t-60 m-l-auto m-r-auto d-block text-center mb-5">
        <div className="mb-4">
          <img src={CheckedGreen} alt="CheckedGreen" />
        </div>
        <h3 className="fw-600">Password reset</h3>
        <h5 className="text-neutral-60 mb-2 fw-400 m-b-50">
          Your password has been changed successfully
        </h5>
        <Link
          to="/"
          className="btn btn-primary-filled text-regular text-white w-100"
        >
          Login Now
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default PasswordChanged;
