import React from "react";
import ItemCard from "../layouts/ItemCard";

const Experience = (props) => {
  const { logo, name, total_worked } = props.company_details;
  return (
    <div>
      <ItemCard>
        <div className='ui grid'>
          <div className='two wide column'>
            <img src={logo} style={{ width: "50px" }} />
          </div>
          <div className='fourteen wide column'>
            <h4>{name}</h4>
            <span className='meta'>{total_worked}</span>

            <ul>
              {props.position_details.map((position) => {
                return (
                  <li style={{ listStyle: "none" }}>
                    <strong>{position.title}</strong>
                    <br />
                    <span className='meta'>
                      {position.worked} - {position.duration}
                    </span>
                    <br />
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ItemCard>
    </div>
  );
};

Experience.defaultProps = {
  logo: "https://image.flaticon.com/icons/svg/1401/1401914.svg",
};

export default Experience;
