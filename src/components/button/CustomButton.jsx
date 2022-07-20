import React from "react";

function CustomButton({ type, className, innerText, onClick }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {innerText}
    </button>
  );
}

export default CustomButton;
