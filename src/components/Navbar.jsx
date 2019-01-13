import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#landingkit-navbar"
            aria-controls="landingkit-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="landingkit-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" data-scroll href="#home">
                  Muzemaster <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-scroll href="#features">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-scroll href="#video">
                  Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll href="#contact">
                  Subscribe
                </a>
              </li>
            </ul>
            <div>
              <a
                href="https://www.facebook.com/muzemaster"
                className="social-icon si-dark si-facebook si-dark-round"
              >
                <i className="fa fa-facebook" />
                <i className="fa fa-facebook" />
              </a>
              <a
                href="https://twitter.com/muzemaster"
                className="social-icon si-dark si-twitter si-dark-round"
              >
                <i className="fa fa-twitter" />
                <i className="fa fa-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/muzemaster/"
                className="social-icon si-dark si-g-plus si-dark-round"
              >
                <i className="fa fa-linkedin" />
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
