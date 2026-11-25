import React, { useRef } from "react";
import video from "../../assets/gym.mp4";
import "./Hero.scss";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Hero = () => {
  const containerRef = useRef();
  const titleRef1 = useRef();
  const titleRef2 = useRef();
  const inforef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const split1 = SplitText.create(titleRef1.current, {
        type: "chars",
      });

      const split2 = SplitText.create(titleRef2.current, {
        type: "chars",
      });

      // Initial state: both words overlap
      gsap.set([titleRef1.current, titleRef2.current], {
        x: 0,
      });
      gsap.set(inforef.current, {
        opacity: 0,
        y: 30,
      });

      // Animation
      tl.fromTo(
        [...split1.chars, ...split2.chars],
        {
          x: 0,
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
        },
      )
        .to(
          titleRef1.current,
          {
            x: "-2.5vw",
            duration: 1.5,
            ease: "power4.inOut",
            fontSize: "10vw",
          },
          "+=0.2",
        )
        .to(
          titleRef2.current,
          {
            x: "2vw",
            duration: 1.5,
            ease: "power4.inOut",
          },
          "<",
        )
        .to(
          inforef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3",
        );

      return () => {
        split1.revert();
        split2.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="hero" ref={containerRef}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-video"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-cont">
        <div className="txt">
          <h1 className="headline" ref={titleRef1}>
            Beyond
          </h1>

          <h1 className="headline" ref={titleRef2}>
            Limits
          </h1>
        </div>
        <div className="info" ref={inforef}>
          <div className="text">
            <p>
              Our space combines professional equipment, expert coaches, and a
              motivating atmosphere to help you train smarter, move better, and
              grow stronger every day.
            </p>
            <div className="cta-div">
              <h3 className="cta2">Contact</h3>
              <h3 className="cta1">Join Us</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
