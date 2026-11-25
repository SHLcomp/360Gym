import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Classes", to: "/" },
    { name: "Services", to: "/" },
    { name: "Memberships", to: "/" },
    { name: "Recovery", to: "/" },
    { name: "Contact", to: "/" },
  ];

  return (
    <footer className="footer noise">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            ThreeSixty
            <span>360 GYM</span>
          </Link>

          <p>
            More than a place to train.
            <br />A space to push beyond limits.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="eyebrow">Explore</span>
            {links.map((link) => (
              <Link to={link.to} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <span className="eyebrow">Get in touch</span>
            <a href="mailto:info@threesixtygym.com">Email us</a>
            <a href="tel:+962000000000">Call us</a>
            <span className="location">Walton-on-Thames, Surrey, UK</span>
          </div>

          <div className="footer-col">
            <span className="eyebrow">Follow us</span>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <span className="eyebrow">Your next chapter starts here</span>
        <h2>
          BEYOND LIMITS<span>.</span>
        </h2>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} ThreeSixty Gym. All rights reserved.</p>
        <Link to="/">Back to top ↑</Link>
        <p>Built for progress.</p>
      </div>
    </footer>
  );
};

export default Footer;
