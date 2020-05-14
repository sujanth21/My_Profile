import React from "react";
import ItemCard from "../layouts/ItemCard";
import "./CurrentStack.css";

const CurrentStack = () => {
  return (
    <div className='CurrentStack'>
      <h3>My Stack</h3>
      <ItemCard
        itemStyles={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <i className='fab fa-node-js fa-2x'></i>
        <span className='text_size_1'> Node JS</span>
      </ItemCard>
      <ItemCard
        itemStyles={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <i className='fab fa-react fa-2x'></i>
        <span className='text_size_1'> React JS</span>
      </ItemCard>
      <ItemCard
        itemStyles={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <i className='fas fa-database fa-2x'></i>
        <span className='text_size_1'> Mongo DB</span>
      </ItemCard>
      <ItemCard
        itemStyles={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <i className='fas fa-laptop-code fa-2x'></i>
        <span className='text_size_1'> Express</span>
      </ItemCard>
    </div>
  );
};

export default CurrentStack;
