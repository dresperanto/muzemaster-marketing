import React from 'react';

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="bg-parallax pt100 pb100"
        data-jarallax='{"speed": 0.2}'
        style={{ backgroundIimage: 'url("images/bg3.jpg")' }}
      >
        <div className="parallax-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mr-auto ml-auto text-center">
              <h6 className="text-white-gray text-center">Subscribe to our newsletter for news and product updates</h6>
              <h3 className="text-center text-white title-font mb50">Subscribe Now</h3>

              <form name="newsletter" method="post">
                <input type="hidden" name="form-name" value="newsletter" />
                <div className="row">
                  <div className="col-md-4">
                    <input type="text" name="name" className="form-control" placeholder="Name" required="" />
                  </div>
                  <div className="col-md-4">
                    <input type="email" name="email" className="form-control" placeholder="Email" required="" />
                  </div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
