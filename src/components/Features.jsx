import React from "react";

const Features = () => {
  return (
    <div>
      <section id="features" className="pt90 pb50">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp"
              data-wow-delay=".1s"
            >
              <i className="icon-laptop-phone" />
              <h3>Smarter</h3>
              <p className="text-left">
                Organize your lessons more efficiently and record your progress
                in the ledger.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp"
              data-wow-delay=".2s"
            >
              <i className="icon-new-tab" />
              <h3>Faster</h3>
              <p className="text-left">
                Our intelligence engine will help identify weaknesses so you can
                practice what you need to get better.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp"
              data-wow-delay=".3s"
            >
              <i className="icon-graph" />
              <h3>Fun</h3>
              <p className="text-left">
                Use gamification to hit milestones and reward yourself for
                achieving your goals. Compete against others to see where your
                stack up.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp"
              data-wow-delay=".4s"
            >
              <i className="icon-palette" />
              <h3>Easy</h3>
              <p className="text-left">
                Simple and elegant interface makes gettng up to speed a snap.
                You won't spend you time on figuring out how to use Muzemaster,
                rather you'll start using it in now time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
