import React from "react";
import { MdFoundation } from "react-icons/md";
import { BsCloudDownload } from "react-icons/bs";
import { IconContext } from "react-icons";
import myResume from "../../Assets/Jinmin_Dai_Resume20.pdf";
import "../Styles/Resume.css";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <IconContext.Provider value={{color:"#12c0a0", className: "download-icon" }}>
                <div>
                <BsCloudDownload />
                </div>
                </IconContext.Provider>
              </a>
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <IconContext.Provider value={{color:"#12c0a0", className: "download-icon" }}>
                <div>
                <MdFoundation />
                </div>
                </IconContext.Provider>
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>API</li>
              <li>Bulma</li>
              <li>Bootstrap</li>
              <li>GITBASH</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          <p className="column-title">Back-End Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <IconContext.Provider value={{color:"#12c0a0", className: "download-icon" }}>
                <div>
                <MdFoundation />
                </div>
                </IconContext.Provider>
              </li>
              <li>Node.Js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Performance Tech</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <IconContext.Provider value={{color:"#12c0a0", className: "download-icon" }}>
                <div>
                <MdFoundation />
                </div>
                </IconContext.Provider>
              </li>
              <li>Progressive Web Applications (PWA)</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;