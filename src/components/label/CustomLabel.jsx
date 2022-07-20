import React from "react";
import Form from "react-bootstrap/form";
function CustomLabel({ innetText, className }) {
  return <Form.Label className={className}>{innetText}</Form.Label>;
}

export default CustomLabel;
