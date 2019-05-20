import React from 'react';

const Features = () => {
  return (
    <div>
      <section id="features" className="pt90 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp" data-wow-delay=".1s">
              <i className="icon-laptop-phone" />
              <h3>Social Sharing</h3>
              <p className="text-left">
                Share your progress with your friends, family and instructor for instant feedback.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp" data-wow-delay=".2s">
              <i className="icon-new-tab" />
              <h3>Smarter Practice</h3>
              <p className="text-left">Identify weaknesses so you can practice smarter and improve faster.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp" data-wow-delay=".3s">
              <i className="icon-graph" />
              <h3>Game Play</h3>
              <p className="text-left">
                Earn rewards when you hit your goals and complete challenges against your peers.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp" data-wow-delay=".4s">
              <i className="icon-palette" />
              <h3>Inuitive</h3>
              <p className="text-left">
                Getting up to speed is a snap with the simple intuituve interface. Start improving right away.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
