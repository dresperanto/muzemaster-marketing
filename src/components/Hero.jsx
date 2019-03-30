import React from 'react';

const Hero = () => {
  return (
    <div>
      <div
        id="home"
        className=" parallax-hero"
        data-jarallax='{"speed": 0.2}'
        style={{ backgroundImage: 'url("images/bg_trumpet.jpg")' }}
      >
        <div className="parallax-overlay" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pb50">
              <h5 className="mb20 text-white title-font text-capitalize h1">Where gaming meets music lessons.</h5>
              <p className="text-white-gray mb30 lead">
                <strong>Muzemaster </strong>re-imagines the process of learning to play a musical instrument by using
                technology to provide the structure and tools to make learning more fun and engaging.
              </p>
              <div>
                <a data-scroll href="#features" className="btn btn-white-outline mr-3">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="hero-form">
                <h6 className="text-white-gray">Sign up to get the latest Muzemaster updates</h6>
                <h3 className="text-white  mb20">Stay Tuned</h3>
                <form name="newsletter" method="post">
                  <input type="hidden" name="form-name" value="newsletter" />
                  <div className="row">
                    <div className="col-md-12 mb20">
                      <input type="text" name="name" className="form-control" placeholder="Name" required="" />
                    </div>
                    <div className="col-md-12 mb20">
                      <input type="email" name="email" className="form-control" placeholder="Email" required="" />
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary btn-block">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
