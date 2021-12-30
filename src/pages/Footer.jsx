import React from "react";
import { FiberManualRecord } from "@material-ui/icons";
import "./Footer.css";

function Footer() {
  const country = "Pakistan";
  const location = "Gulberg II , Lahore ";
  return (
    <div className="footer">
      <div className="footer__upper">
        <div className="footer__upper__left">
          <p>{country}</p>
        </div>

        <div className="footer__upper__right">
          <FiberManualRecord />
          <b>{location}</b>-<a href="#">From Your IP Adress</a>-
          <a href="#">Update Your Location</a>
        </div>
      </div>
      <div className="footer__down">
        <a href="#">Help</a>
        <a href="#">Send Feedback</a>
        <a href="#">Privacy</a>
        <a href="#">Support</a>
      </div>
      <div className="owner">
 <center>       <p>@created by Umar Khatab</p> </center>
      </div>
    </div>
  );
}

export default Footer;
