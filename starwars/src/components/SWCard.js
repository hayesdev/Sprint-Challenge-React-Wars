import React from "react";

const SWCard = props => {
  return (
    <div className="star-card" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.homeworld}</p>
      <p>{props.vehicles}</p>
      <p>{props.films}</p>
    </div>
  );
};

export default SWCard;
