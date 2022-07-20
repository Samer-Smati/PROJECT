import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Input from "../input/CustomInput";
import Label from "../label/CustomLabel";
import Footer from "../footer/Footer";
import Button from "../button/CustomButton";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logos/Iconnect-logo.svg";
import SideLine from "../../assets/images/icons/redConnector.svg";

function RegisterSecStep() {
    
  return (
    <div className="register-container">
      <div className="row  h-100vh">
        <div className="col-4 bg-neutral-10">
          <img className="p-30 sidebar-img" src={LogoImg} alt="LogoImg" />
          <div className="sidebar-container">
            <div className="row">
              <div className="d-flex align-items-baseline p-l-30">
                <Form.Check
                  type="checkbox"
                  defaultChecked={true}
                  className="text-center mb-4 p-10"
                />
                <div className="flex-column d-flex">
                  <span className="label text-primary-70 text-medium fs-16">
                    Password
                  </span>
                  <span className="label text-primary-50 text-medium fs-16">
                    Please provide your password
                  </span>
                </div>
              </div>
            </div>
            <img
              width="65"
              height="85"
              className="SideLine"
              src={SideLine}
              alt="SideLine"
            />
            <div className="row">
              <div className="d-flex align-items-baseline p-l-30">
                <Form.Check
                  type="radio"
                  defaultChecked={true}
                  className="text-center mb-4 p-10"
                />
                <div className="flex-column d-flex">
                  <span className="label  text-medium fs-16">
                    Invite your team
                  </span>
                  <span className="label text-neutral-60 text-medium fs-16">
                    Start collaborating with your team
                  </span>
                </div>
              </div>
            </div>
          </div>
        
          <Footer />
        </div>
        <div className="register col-8 text-center">
          <h4 className="fw-600">Invite Team Member</h4>
          <Form className="mb-4 text-center m-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Label innetText="Full Name" className="fw-500 float-left" />
              <span className="text-primary-60 float-left">*</span>
              <Input
                type="text"
                placeholder="Enter team member full name"
                required="required"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Label innetText="Position" className="fw-500 float-left" />
              <Input
                type="text"
                placeholder="Enter position"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Label innetText="Email" className="fw-500 float-left" />
              <span className="text-primary-60 float-left">*</span>
              <Input
                type="email"
                placeholder="Enter email"
                required="required"
              />
            </Form.Group>
            <Label innetText="Phone" className="fw-500 float-left" />
            <InputGroup className="mb-3">
              <Form.Select className="col-3">
                <option>US</option>
                <option>US</option>
              </Form.Select>
              <Input
                type="text"
                placeholder="Enter phone number"
              />
            </InputGroup>
            <Button
              innerText="Submit and Finish"
              className="btn-primary-filled text-regular text-white w-100 mb-4"
            />
            <span className="text-neutral-60">
              <Link
                to="/Register"
                className="text-primary-50 text-decoration-none text-medium"
              >
                {"+ "}
                Add Another Member
              </Link>
            </span>
          </Form>
          <div className="steps d-flex align-items-center justify-content-center">
            <span className="step text-primary-50">.</span>
            <span className="step text-primary-70">.</span>
            <span className="step text-primary-50">.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSecStep;
