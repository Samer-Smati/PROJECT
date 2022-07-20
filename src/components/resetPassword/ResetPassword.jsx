import React from "react";
import FpwImg from "../../assets/images/icons/forgetPassword.svg";
import ArrowLeft from "../../assets/images/icons/arrow-left-solid.svg";
import Input from "../input/CustomInput";
import Label from "../label/CustomLabel";
import Button from "../button/CustomButton";
import { InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
function ResetPassword() {
  return (
    <div>
      <div className="login m-t-60 m-l-auto m-r-auto d-block text-center">
        <div className="mb-4">
          <img src={FpwImg} alt="FpwImg" />
        </div>
        <h3 className="fw-600">Forgot password?</h3>
        <h5 className="text-neutral-60 mb-2 fw-400">
          Please enter your details.
        </h5>
        <Form className="mb-4 d-flex justify-content-center flex-column">
          <Label innetText="Email" className="fw-500 text-start" />
          <InputGroup className="mb-4">
            <Input
              type="email"
              placeholder="Enter your email"
              required="required"
            />
          </InputGroup>
          <InputGroup className="mb-4">
            <Button
              innerText="Reset password"
              type="submit"
              className="btn-primary-filled text-regular text-white w-100 "
            />
          </InputGroup>
          <Link
            className="text-neutral-60 text-decoration-none text-medium d-flex m-auto"
            to="/"
          >
            <img src={ArrowLeft} className="m-r-10" alt="ArrowLeft" /> Back to
            log in
          </Link>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
