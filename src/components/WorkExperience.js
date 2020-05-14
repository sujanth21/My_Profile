import React from "react";

import Experience from "./Experience";

const WorkExperience = () => {
  return (
    <div>
      <h3>Work Experience</h3>
      <Experience
        company_details={{
          logo:
            "https://media-exp1.licdn.com/dms/image/C4E0BAQGc1ywLPUvR7A/company-logo_100_100/0?e=1597276800&v=beta&t=geJ8cAQbucKEe7Ju8yA_CGR--aOXTz6lItEe-NIlS74",
          name: "Appearition",
          total_worked: "4 Years 1 Month",
        }}
        position_details={[
          {
            title: "Mobile Application Developer",
            worked: "Aug 2016 – Jan 2020",
            duration: "3 yrs 6 mos",
          },
          {
            title: "Junior Mobile Application Developer",
            worked: "Apr 2016 – Aug 2016",
            duration: "5 mos",
          },
          {
            title:
              "Intern - Virtual Reality & Augmented Reality Application Developer",
            worked: "Jan 2016 – Mar 2016",
            duration: "3 mos",
          },
        ]}
      />

      <Experience
        company_details={{
          logo: "https://image.flaticon.com/icons/svg/1401/1401914.svg",
          name: "Keystone Solutions",
          total_worked: "7 Months",
        }}
        position_details={[
          {
            title: "Software Engineer",
            worked: "Mar 2012 – Sept 2012",
            duration: "7 mos",
          },
        ]}
      />

      <Experience
        company_details={{
          logo:
            "https://media-exp1.licdn.com/dms/image/C4D0BAQFbaWEPeENHog/company-logo_100_100/0?e=1597276800&v=beta&t=Mh_eTmzBNRdrGSqz-dWqJJ1n1IFmg6hXuZRawcrYuks",
          name: "Saberion",
          total_worked: "6 Months",
        }}
        position_details={[
          {
            title: "Associate Software Engineer",
            worked: "May 2011 - Oct 2011",
            duration: "6 mos",
          },
        ]}
      />
    </div>
  );
};

export default WorkExperience;
