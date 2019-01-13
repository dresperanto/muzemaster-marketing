import React from "react";

const Faq = () => {
  return (
    <div>
      <section id="video" className="border-btm1">
        <div className="bg-white">
          <div className="container pt90 pb50">
            <div className="row align-items-center">
              <div className="col-lg-5 ml-auto mb40">
                <h6 className="text-dark-gray">Make More Music</h6>
                <h3 className="title-font mb20">Preview Muzemaster</h3>
                <p className="lead">
                  Watch this short video see some of the features to help take
                  you musical journey to the next level.
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
                  style={{ border: "3px solid #f5f5f5", borderRadius: "10px" }}
                  src="images/video_screenshot.png"
                  alt=""
                  className="img-fluid center-img shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
