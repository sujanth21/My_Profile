import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import ContentCard from "../layouts/ContentCard";
import BasicInfoCard from "./BasicInfoCard";
import Description from "./Description";
import CurrentStack from "./CurrentStack";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Github from "../apis/github";

import "./App.css";
import ItemCard from "../layouts/ItemCard";

const App = () => {
  const [githubUserData, setGithubUserData] = useState({});

  const getGithubUserData = async () => {
    const res = await Github.get("/users/sujanth21", {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      },
    });

    setGithubUserData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getGithubUserData();
  }, []);

  return (
    <div>
      <Header
        icon_left='code'
        icon_right='coffee'
        profile_name='Sujanth Sebamalaithasan'
        job_title='React & Node JS Developer'
      />
      {/* 1st Row */}
      <div className='ui grid'>
        <div className='four wide column'>
          <ContentCard height='500px'>
            <BasicInfoCard
              githubData={githubUserData}
              email='sujanth1987@gmail.com'
              mobile='1234567890'
            />
          </ContentCard>
        </div>
        <div className='eight wide column'>
          <ContentCard height='500px'>
            <Description />
          </ContentCard>
        </div>
        <div className='four wide column'>
          <ContentCard height='500px'>
            <CurrentStack />
          </ContentCard>
        </div>
      </div>

      {/* 2nd Row */}
      <div className='ui grid'>
        <div className='ten wide column'>
          <ContentCard height='830px'>
            <WorkExperience />
          </ContentCard>
        </div>
        <div className='six wide column'>
          <ContentCard height='830px'>
            <Education />
          </ContentCard>
        </div>
      </div>

      {/* Third Row */}
      <div className='ui grid'>
        <div className='eight wide column'>
          <h4>Skills and Interested Areas - Web Application Development</h4>
          <ContentCard display='flex'>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <i className='fab fa-node-js fa-2x'></i> Node JS
            </ItemCard>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <i className='fab fa-react fa-2x'></i> React JS
            </ItemCard>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <i className='fas fa-database fa-2x'></i> Mongo DB
            </ItemCard>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <i className='fas fa-laptop-code fa-2x'></i> Express
            </ItemCard>
          </ContentCard>
        </div>
        <div className='eight wide column'>
          <h4>Skills and Interested Areas - Mobile Application Development</h4>
          <ContentCard display='flex'>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                src='https://secure.meetupstatic.com/photos/event/c/7/f/7/highres_478491191.jpeg'
                width='30px'
              />
              Flutter
            </ItemCard>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                src='https://cdn.vox-cdn.com/thumbor/kL-Z76ZSmU6AUOBanezRDqSQ7us=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086219/Android_logo_stacked__RGB_.jpg'
                width='30px'
              />
              Android
            </ItemCard>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                src='https://www.computerhope.com/jargon/i/ios.jpg'
                width='30px'
              />
              iOS
            </ItemCard>
            <ItemCard
              itemStyles={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                src='https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png'
                width='30px'
              />
              React Native
            </ItemCard>
          </ContentCard>
        </div>
      </div>
      <div className='ui grid'>
        <div className='sixteen wide cloumn'>
          <h4>Work History</h4>
          <ContentCard>
            <ItemCard>
              <img
                src='https://www.appearition.com/wp-content/uploads/2019/03/PepOHraB_400x400.png'
                width='50px'
              />

              <h3>Appearition</h3>

              <p>
                At Appearition, the primary responsibility for the mobile
                application developer is controlling and managing app stores
                deployment and handling clients and end users technical queries
                to resolve product issues and bugs. Mobile developer also
                closely work with chief scientist and solution architect and
                involve all research and development processes to adapt latest
                technology and changes in the business
              </p>

              <h5>Key Responsibilities</h5>
              <ul>
                <li>
                  Involve all design, development and research processes and
                  report directly to chief scientist and solution architect
                </li>
                <li>
                  Manage and control app stores deployment processes and
                  maintains back-end systems for mobile apps
                </li>
                <li>
                  Lead QA testing for mobile apps and web based back-end systems
                </li>
                <li>
                  Develop and maintains automated test scripts for back-end web
                  portal
                </li>
                <li>
                  Guide external developers and answer queries about development
                  processes
                </li>
                <li>
                  Provide technical support to internal and external clients,
                  end users and other stakeholders
                </li>
              </ul>
              <h5>Achievements</h5>
              <ul>
                <li>
                  Completed mobile app development tasks within the estimated
                  time period
                </li>
                <li>
                  Reduced the Manual QA processes by creating automated test
                  suit for complex web CMS system
                </li>
              </ul>
            </ItemCard>

            <ItemCard>
              <h3>Keystone Solutions</h3>
              <p>
                At Keystone Solutions, the primary role was working closely with
                the client to deliver the agreed requirements in a timely
                manner. Mainly focused in the quality assurance areas and also
                worked with a senior developer to ensure all the taskes
                delivered to the customer met the expectations.
              </p>
              <h5>Key Responsibilities</h5>
              <ul>
                <li>
                  Analyzed clients and software requirements to determine
                  feasibility of design within a specified time frame.
                </li>
                <li>
                  Designed, developed and tested web application modules using
                  project management and programming techniques to predict and
                  measure process outcome and consequences.
                </li>
                <li>
                  Ensured high level customer satisfaction by providing answers
                  to client’s queries and resolve technical and non-technical
                  issues
                </li>
              </ul>
            </ItemCard>
            <ItemCard>
              <img
                src='https://pbs.twimg.com/profile_images/628182041/Saberion_logo8_400x400.jpg'
                width='50px'
              />
              <h3>Saberion Pty Ltd</h3>
              <p>
                At Saberion, the primary role was developing web applications to
                cater clients' requirements. Mainly involved in the software
                application development areas and closely worked with the
                director and other team members across the board
              </p>
              <h5>Key Responsibilities</h5>
              <ul>
                <li>
                  Gathered and analyzed user requirements for clients’ web
                  applications
                </li>
                <li>
                  Designed and developed commercial web based applications
                </li>
                <li>
                  Designed, developed and maintained databases and back-ends for
                  web applications
                </li>
                <li>
                  Provided suitable solutions for technical queries regarding
                  database and framework selection
                </li>
              </ul>
            </ItemCard>
          </ContentCard>
        </div>
      </div>

      {/* Footer */}
      <ContentCard>
        <div style={{ textAlign: "center" }}>
          <em>
            Developed using React JS - Only work on large screens - Not focused
            on the designs yet
          </em>
        </div>
      </ContentCard>
    </div>
  );
};

export default App;
