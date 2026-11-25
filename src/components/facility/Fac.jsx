import React from "react";
import "./Fac.scss";

const fac = [
  {
    name: "Weights and Strength Area",
    desc: "Fully equipped weights and strength zone to power your fitness journey.",
    img: "https://images.pexels.com/photos/9479166/pexels-photo-9479166.jpeg",
  },
  {
    name: "Showers and Lockers",
    desc: "Convenient changing rooms with showers and secure lockers for your peace of mind.",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c293b888782643.5de0856dc6ebc.jpg",
  },
  {
    name: "Boxing and Combat Training",
    desc: "A dynamic training rig with punching bags for boxing and combat workouts.",
    img: "https://pbs.twimg.com/media/EQRQAMKXUAE2-8S.jpg",
  },
  {
    name: "Relaxation Lounge",
    desc: "Unwind and recharge in a comfortable space designed for relaxation and recovery.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
  },
  {
    name: "Martial Arts Mats",
    desc: "Dedicated martial arts mats for intense training and technique refinement.",
    img: "https://image.made-in-china.com/2f0j00ZQyUfqwzsaru/High-Density-Customized-Logo-Martial-Arts-Tatami-Judo-Puzzle-Mat.webp",
  },
  {
    name: "Physiotherapy Facilities",
    desc: "A dedicated space for recovery, rehabilitation, and improving your mobility.",
    img: "https://images.squarespace-cdn.com/content/v1/6453131a96b34e7331d729ad/691d8506-f823-4346-be0f-1253a9df7710/Palmerston%2BClinic%2BGym.jpg",
  },
];

const Fac = () => {
  return (
    <section className="fac">
      <div className="heading">
        <span className="eyebrow">Our Facilities</span>
        <h1 className="title">Premium Fitness Facilities</h1>
      </div>

      <div className="facs">
        {fac.map((item, index) => (
          <article className="fac-item" key={item.name}>
            <img
              src={item.img}
              alt={item.name}
              loading={index < 3 ? "eager" : "lazy"}
            />

            <div className="info">
              <span className="number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Fac;