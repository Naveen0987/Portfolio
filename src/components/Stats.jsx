import React from "react";

import "./Stats.css";

const stats = [
  {
    number: "5+",
    title: "Projects Completed"
  },
  {
    number: "1+",
    title: "Real Clients"
  },
  {
    number: "10+",
    title: "Technologies"
  },
  {
    number: "100%",
    title: "Dedication"
  }
];

const Stats = () => {
  return (
    <section className="stats reveal">

      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Stats;
