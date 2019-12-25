import React from "react";
import "./cardListStyles.css";
import Card from "../card/Card";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
