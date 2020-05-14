import React from "react";
import Institute from "./Institute";

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <Institute
        data={{
          logo:
            "https://media-exp1.licdn.com/dms/image/C510BAQExfSFBDePstQ/company-logo_100_100/0?e=1597276800&v=beta&t=4G_pEOLi7whCdAh6tVP4_NKUtKF5YskIn8gaho1BrzQ",
          name: "Monash College",
          period: "2015-2016",
          course: "Professional Year Program - Information Technology",
        }}
      />
      <Institute
        data={{
          logo:
            "https://media-exp1.licdn.com/dms/image/C560BAQHf1P0vpXynqA/company-logo_100_100/0?e=1597276800&v=beta&t=s4Oech3HpJjw1qdnWw-aZsU0V1T2iIkdh4l8Yf0LVrs",
          name: "Charles Sturt University",
          period: "2013-2015",
          course: "Master of Information Technology (Distinction)",
        }}
      />
      <Institute
        data={{
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/University_of_Moratuwa_logo.png/200px-University_of_Moratuwa_logo.png",
          name: "University of Moratuwa",
          period: "2008-2011",
          course: "B.Sc in Information Technology",
        }}
      />
      Online Learning
      <Institute
        data={{
          logo:
            "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png",
          name: "Udemy",
          course: "Web and mobile app development",
        }}
      />
    </div>
  );
};

export default Education;
