import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12 text-center">
            <div className="row">
              <div className="col-lg-4 mb20">
                <h5 className=" mb20">Call Us</h5>
                <p className="lead">‭484-320-7570‬</p>
              </div>
              <div className="col-lg-4 mb20">
                <h5 className=" mb20">Mail Us</h5>
                <p className="lead">info@muzemaster.com</p>
              </div>
              <div className="col-lg-4 mb20">
                <h5 className=" mb20">Connect</h5>
                <a
                  href="#"
                  className="social-icon si-dark si-facebook si-dark-round"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="#"
                  className="social-icon si-dark si-twitter si-dark-round"
                >
                  <i className="fa fa-twitter" />
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="#"
                  className="social-icon si-dark si-g-plus si-dark-round"
                >
                  <i className="fa fa-google-plus" />
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  href="#"
                  className="social-icon si-dark si-skype si-dark-round"
                >
                  <i className="fa fa-skype" />
                  <i className="fa fa-skype" />
                </a>
              </div>
            </div>
            <hr className="mb20" />

            <ul className="list-inline pb20">
              {/* <li className="list-inline-item">
                <a href="#">About us</a>
              </li>
              <li className="list-inline-item">
                <a href="#">News</a>
              </li> */}

              <li className="list-inline-item">
                <a href="https://muzemaster.com">Muzemaster</a> &copy; Copyright
                2019.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
