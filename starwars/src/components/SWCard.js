import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 500px;
  height: 275px;
  font-size: 25px;
  color: black;
  background: #dadd1b;
  margin: 10px;
  border-radius: 20px;

  &:hover {
    color: #dadd1b;
    background: black;
  }
`;

const SWCard = props => {
  return (
    <div className="star-card" key={props.id}>
      <Card>
        <h2>{props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Weight: {props.weight}</p>
      </Card>
    </div>
  );
};

export default SWCard;
