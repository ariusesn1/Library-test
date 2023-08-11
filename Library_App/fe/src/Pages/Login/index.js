import React, { Fragment, useRef } from "react";
import classes from "./login.module.css";
import BackgeoundLogin from "./BackgroundLogin";
import FormLogin from "./FormLogin";
const Login = () => {
    
  return (
    <div>
      <BackgeoundLogin props={classes} />
      <FormLogin props={classes}/>
    </div>
  );
};

export default Login;
