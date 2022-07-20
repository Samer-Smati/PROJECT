import React from "react";
import Form from "react-bootstrap/Form";
function CustomInput({
  type,
  value,
  onChange,
  DefaultValue,
  placeholder,
  onClick,
  disabled,
  className,
}) {
  return (
    <Form.Control
      type={type}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  );
}

export default CustomInput;
