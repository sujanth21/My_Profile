import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className='ui segment Header'>
      <i class='code icon big icon-left'></i>
      <div className='center-align'>
        <h3>Sujanth S</h3>
        <p>React & Node JS Developer</p>
      </div>
      <i class='coffee icon big icon-right'></i>
    </div>
  );
};

export default Header;
