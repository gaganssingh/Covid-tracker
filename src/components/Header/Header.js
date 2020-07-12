import React from "react";

import logo from "../../images/corona-image.png";
import classes from "./Header.module.css";

const Header = () => {
   return (
      <header className={classes.header}>
         <img src={logo} className={classes.image} alt="COVID 19" />
      </header>
   );
};

export default Header;
