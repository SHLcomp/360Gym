
import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="heading">
        <span className="eyebrow">360° FITNESS. ONE COMMUNITY.</span>
        <h2 className="title">More than a place to train.</h2>

        <div className="info">
          <div className="text">
            {/* <span className="eyebrow">THE THREE SIXTY EXPERIENCE</span> */}

            <p>
              At ThreeSixty, we believe fitness is about more than lifting
              weights or reaching a number. It's about building strength,
              pushing boundaries, and becoming a better version of yourself.
            </p>

            <p>
              From expert coaching and purposeful training to a supportive
              community and spaces designed for progress, every part of the
              ThreeSixty experience is built around helping you move forward.
              Whatever your starting point, we're here to help you find your
              strength, build confidence, and achieve more.
            </p>

            <a href="/about" className="cta-div">
              <span className="cta2">Discover Our Story</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          <div className="gallery">
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/32610335/pexels-photo-32610335.jpeg"
                alt="Gym training"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/10518845/pexels-photo-10518845.jpeg"
                alt="Strength training"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/11433027/pexels-photo-11433027.jpeg"
                alt="Fitness coaching"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/9479166/pexels-photo-9479166.jpeg"
                alt="Gym workout"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/5785714/pexels-photo-5785714.jpeg"
                alt="Gym workout"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
