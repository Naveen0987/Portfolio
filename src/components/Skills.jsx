import React from "react";

import "./Skills.css";
import skills from "../assets/data/skills";

const Skills = () => {
  return (
    <section className="skills reveal" id="skills">

      <div className="section-header">
        <p>What I Know</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress">

              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>

            </div>

            <span>{skill.level}%</span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Skills;
