import React from "react";
import "./Timeline.css";
import experience from "../assets/data/experience";

const Timeline = () => {
  return (
    <section className="timeline reveal" id="experience">

      <div className="section-header">
        <p>My Journey</p>
        <h2>Experience</h2>
      </div>

      <div className="timeline-container">

        {experience.map((item, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span className="timeline-duration">
                {item.duration}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Timeline;
