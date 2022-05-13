import React from "react";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} width={140} height={60} alt="logo" />
    </div>
  );
};

export default Header;
