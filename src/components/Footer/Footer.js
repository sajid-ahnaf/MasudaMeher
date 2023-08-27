import React, { Component } from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="footer">
        <img src="images/m.svg" alt="logo" height="70" weight="70" />
        <h4 className="follow">Reach out to me at</h4>
        <MDBContainer
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <a
            href="https://www.linkedin.com/in/masudhameher/"
            className="social-logo"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>
          <a href="https://github.com/samflab" className="social-logo">
            <MDBIcon fab icon="github" />
          </a>
          <a href="https://samflab.medium.com" className="social-logo">
            <MDBIcon fab icon="medium-m" />
          </a>
          <a href="#!" className="social-logo">
            <MDBIcon fab icon="hackerrank" />
          </a>
        </MDBContainer>
        <span>
          Made with ♡ by{" "}
          <a className="my-name" href="https://github.com/samflab/Portfolio">
            Masudha Meher
          </a>
        </span>
        <Link
          id="scrollUp"
          to="top"
          smooth={true}
          style={{ position: "fixed", zIndex: "2147483647" }}
        >
          <i class="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }
}

export default Footer;
