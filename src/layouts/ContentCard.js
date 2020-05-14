import React from "react";
import "./ContentCard.css";

const ContentCard = ({ children, height, display }) => {
  return (
    <div
      className='ContentCard'
      style={{ height: `${height}`, display: `${display}` }}
    >
      {children}
    </div>
  );
};

export default ContentCard;
