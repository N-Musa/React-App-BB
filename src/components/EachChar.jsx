import React from "react";

export const EachChar = ({ Character }) => {
  return (
    <div className="box">
      <div>
        <img src={Character.img} />
        <p>Character: {Character.name}</p>
        <p>Portrayed by: {Character.portrayed}</p>
        <span>Status: {Character.status}</span>
      </div>
    </div>
  );
};
