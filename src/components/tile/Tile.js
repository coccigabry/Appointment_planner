import React from "react";

export const Tile = ({tile}) => {

  return (
    <div className="tile-container">
      {
        Object.values(tile).map(
          (value, idx) => (
           <p key={idx} className={`${idx === 0 ? "title-title" : ""} tile`} > {value}</p> 
          )
        )
      }
    </div>
  );
};