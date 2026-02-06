import React from "react";
import "./TeamCard.css";

export default function TeamCard({ image, name, role }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-img" />
      <div className="team-info ">
        <h3 className="team-name font-[vampire] ">{name}</h3>
        <p className="team-role">{role}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
}
