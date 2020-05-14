import React from "react";
import "./BasicInfoCard.css";

const BasicInfoCard = ({ githubData, email, mobile }) => {
  return (
    <div className='BasicInfoCard'>
      <img src={githubData.avatar_url} alt={githubData.login} />
      <div className='content'>
        <div className='text_size_1 p1'>
          <strong>Name: </strong>
          <p className='text_size_1'>{githubData.name}</p>
        </div>
        <div className='text_size_1 p1'>
          <strong>Location: </strong>
          <p className='text_size_1'>{githubData.location}</p>
        </div>
        <div className='text_size_1 p1'>
          <strong>Email:</strong>
          <p className='text_size_1'> {email}</p>
        </div>
        <div className='text_size_1 p1'>
          <strong>Mobile:</strong>
          <p className='text_size_1'> {mobile}</p>
        </div>
        <div className='p1'>
          <a className='ui positive basic button' href={githubData.html_url}>
            Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoCard;
