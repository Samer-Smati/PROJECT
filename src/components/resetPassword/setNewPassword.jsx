import React, { useRef, useState } from "react";
import FpwImg from "../../assets/images/icons/forgetPassword.svg";
import ArrowLeft from "../../assets/images/icons/arrow-left-solid.svg";
import Input from "../input/CustomInput";
import Label from "../label/CustomLabel";
import Button from "../button/CustomButton";
import { InputGroup, Form, Overlay, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div>
      <div className="login m-t-20 m-l-auto m-r-auto d-block text-center">
        <div>
          <img src={FpwImg} alt="FpwImg" />
        </div>
        <h3 className="fw-600">Set new password</h3>
        <h5 className="text-neutral-60 mb-1 fw-400">
          Please Write your new password
        </h5>
        <Form className="mb-2 d-flex justify-content-center flex-column">
          <Form.Group>
            <Label
              innetText="Password"
              className="fw-500 text-start float-left"
            />
            <HelpOutlineIcon ref={target}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)} 
                      className="float-left"
                    />
            <InputGroup className="mb-1 flex-column">
              <Form.Group controlId="formBasicPassword">
                <InputGroup>
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
                  <Overlay target={target.current} show={show} placement="top">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        The password can be in letters, numbers, and / or
                        symbols
                      </Tooltip>
                    )}
                  </Overlay>
                </InputGroup>
                <Form.Text className="text-muted float-left">
                  Must be at least 8 characters.
                </Form.Text>
              </Form.Group>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Label
              innetText="Confirm password"
              className="fw-500 text-start float-left"
            />
            <InputGroup className="mb-2 flex-column">
              <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                <InputGroup>
                  <Input
                    type={confirmShowPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    required="required"
                  />
                  <InputGroup.Text
                    className="showPassword"
                    onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                  >
                    {confirmShowPassword ? <VisibilityOff /> : <Visibility />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </InputGroup>
          </Form.Group>
          <InputGroup className="mb-2">
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

export default SetNewPassword;
