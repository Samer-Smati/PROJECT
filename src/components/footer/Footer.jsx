import React from "react";
import Logo from "../../assets/images/icons/logo.png";
function Footer() {
  return (
    <footer>
      <span className="text-secondary-80 line-height-20 fs-18">
        Powered by{" "}
        <span>
          <img width="100" src={Logo} alt="Logo" />
        </span>
      </span>
      <span className="text-secondary-80 line-height-20 fs-18">
        © iConnect {new Date().getFullYear().toString()}
      </span>
    </footer>
  );
}

export default Footer;
