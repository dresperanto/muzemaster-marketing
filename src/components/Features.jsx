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
              <h4>Practice smarter</h4>
              <p>
                Organize your lessons more efficiently and record your progress
                in the ledger.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp"
              data-wow-delay=".2s"
            >
              <i className="icon-new-tab" />
              <h4>Learn faster</h4>
              <p>
                Our intelligence engine will help identify weaknesses so you can
                practice what you need to get better.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 mb40 text-center feature-icon wow fadeInUp"
              data-wow-delay=".3s"
            >
              <i className="icon-graph" />
              <h4>Make learning fun</h4>
              <p>
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
              <h4>Easy to use</h4>
              <p>
                Simple and elegant interface makes gettng up to speed a snap.
                You won't spend you time on figuring out how to use Muzemaster,
                rather you'll start using it in now time.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container pt90 pb50">
            <div className="row align-items-center">
              <div className="col-lg-5 ml-auto mb40">
                <h6 className="text-dark-gray">
                  Well documented and clean coded
                </h6>
                <h3 className="title-font mb20">Developers friendly code</h3>
                <p className="lead">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=zRV9Jd-503c"
                  className="btn btn-outline-dark modal-video"
                >
                  <i className="icon-play-circle" />
                  Watch Video
                </a>
              </div>
              <div
                className="col-lg-6 mr-auto mb40 wow zoomInUp"
                data-wow-delay=".1s"
              >
                <img
                  src="images/mockup5.png"
                  alt=""
                  className="img-fluid center-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
