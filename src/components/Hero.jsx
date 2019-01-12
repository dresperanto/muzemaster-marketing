import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        id="home"
        class=" parallax-hero"
        data-jarallax='{"speed": 0.2}'
        style={{ backgroundImage: 'url("images/bg1.jpg")' }}
      >
        <div class="parallax-overlay" />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 pb50">
              {/* <h5 class="text-white font400 text-uppercase" /> */}

              <h5 class="mb20 text-white title-font text-capitalize h1">
                Where gaming meets music lessons.
              </h5>
              <p class="text-white-gray mb30 lead">
                <strong>Muzemaster </strong>re-imagines the process of learning
                to play a musical instrument by using technology to provide the
                structure and tools to make learning more fun and engaging.
              </p>
              <div>
                <a
                  data-scroll
                  href="#features"
                  class="btn btn-white-outline mr-3"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="col-lg-5 ml-auto">
              <div class="hero-form">
                <h6 class="text-white-gray">
                  Subscribe to our Newsletter and get benefits
                </h6>
                <h3 class="text-white  mb20">Newsletter</h3>
                <form name="newsletter-subscription" data-netlify="true">
                  <div class="row">
                    <div class="col-md-12 mb20">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div class="col-md-12 mb20">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div class="col-md-12 mb20">
                      <div class="">
                        <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator" />
                          <span class="custom-control-description text-white-gray">
                            Accept our{" "}
                            <a href="#" class="text-white">
                              Terms &amp; Conditions
                            </a>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button type="submit" class="btn btn-primary btn-block">
                        Subscribe
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
