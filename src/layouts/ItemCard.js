import React from "react";
import "./ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className='ItemCard' style={props.itemStyles}>
      {props.children}
    </div>
  );
};

export default ItemCard;
