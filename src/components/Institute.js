import React from "react";
import ItemCard from "../layouts/ItemCard";

const Institute = (props) => {
  const { logo, name, period, course } = props.data;
  return (
    <div>
      <ItemCard>
        <div className='ui grid'>
          <div className='three wide column'>
            <img src={logo} width='50px' />
          </div>
          <div className='thirteen wide column'>
            <h4>{name}</h4>
            <p>{course}</p>
            <span className='meta'>{period}</span>
          </div>
        </div>
      </ItemCard>
    </div>
  );
};

export default Institute;
