import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Input from "../input/CustomInput";
import Label from "../label/CustomLabel";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import Footer from "../footer/Footer";
import Button from "../button/CustomButton";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logos/Iconnect-logo.svg";
import SideLine from "../../assets/images/icons/connector.svg";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  return (
    <div className="register-container">
    <div className="row d-flex h-100vh">
    <div className="col-4 bg-neutral-10">
        <img className="p-30 sidebar-img" src={LogoImg} alt="LogoImg" />
        <div className="sidebar-container">
          <div className="row">
            <div className="d-flex align-items-baseline p-l-30">
              <Form.Check
                defaultChecked={true}
                type="radio"
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
              <Form.Check type="radio" className="text-center mb-4 p-10" />
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
        <h4 className="fw-600">Welcome back</h4>
        <h5 className="text-neutral-60 mb-3 fw-400">
          Please set your login credentials
        </h5>
        <Form className="mb-4 text-center m-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Label innetText="Email" className="fw-500 float-left" />
            <Input
              type="email"
              placeholder="Enter your email"
              required="required"
              value="test@test.com"
              disabled="disabled"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Label innetText="Password" className="fw-500 float-left" />
            <Form.Group>
              <Label
                innetText="Password"
                className="fw-500 text-start float-left"
              />
              <InputGroup className="mb-2 flex-column">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <InputGroup className="mb-2">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required="required"
                    />
                    <InputGroup.Text
                      className="showPassword"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-1">
              <Label
                innetText="Confirm password"
                className="fw-500 text-start float-left"
              />
              <InputGroup className="mb-4 flex-column">
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <InputGroup className="mb-2">
                    <Input
                      type={confirmShowPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      required="required"
                    />
                    <InputGroup.Text
                      className="showPassword"
                      onClick={() =>
                        setConfirmShowPassword(!confirmShowPassword)
                      }
                    >
                      {confirmShowPassword ? <VisibilityOff /> : <Visibility />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </InputGroup>
            </Form.Group>
          </Form.Group>
          <Button
            innerText="Submit and Next"
            className="btn-primary-filled text-regular text-white w-100 mb-4"
          />
          <span className="text-neutral-60">
            <Link
              to="/Register"
              className="text-neutral-80 text-decoration-none text-medium"
            >
              {" "}
              Submit and skip next step
            </Link>
          </span>
        </Form>
        <div className="steps d-flex align-items-center justify-content-center">
          <span className="step text-primary-70">.</span>
          <span className="step text-primary-50">.</span>
          <span className="step text-primary-50">.</span>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Register;
