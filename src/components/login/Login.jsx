import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/logos/Iconnect-logo.svg";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import Input from "../input/CustomInput";
import Button from "../button/CustomButton";
import Footer from "../footer/Footer";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="login d-block text-center m-t-50 m-l-auto m-r-auto">
        <img
          className="login-icon mb-2"
          width="150"
          src={LoginImg}
          alt="Araby"
        />
        <h3 className="fw-600">Welcome back</h3>
        <h4 className="text-neutral-60 mb-3 fw-400">
          Please enter your details.
        </h4>
        <Form className="mb-3">
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Input
              type="email"
              placeholder="Enter your email"
              required="required"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
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
          <Form.Group className="mb-2 float-left" controlId="formBasicPassword">
            <Link
              to="/ForgetPassword"
              className="text-primary-50 text-decoration-none text-medium"
            >
              Forgot password
            </Link>
          </Form.Group>
          <Button
            innerText="Submit"
            className="btn-primary-filled text-regular text-white w-100 "
          />
        </Form>
        <span className="text-neutral-60">
          Don’t have an account?
          <Link
            to="/Register"
            className="text-primary-50 text-decoration-none text-medium"
          >
            {" "}
            Sign up
          </Link>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
