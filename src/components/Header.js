import React from "react";
import "./Header.css";

const Header = ({ icon_left, icon_right, profile_name, job_title }) => {
  return (
    <div className='Header'>
      <i className={`${icon_left} icon big icon-left`}></i>
      <div className='center-align'>
        <h3 className='profile_name'>{profile_name}</h3>
        <p>{job_title}</p>
      </div>
      <i className={`${icon_right} icon big icon-right`}></i>
    </div>
  );
};

export default Header;
