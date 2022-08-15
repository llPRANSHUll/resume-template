import React from "react";
import "./Resume4.css";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Resume4 = () => {
  return (
    <div>
      <div className="resume4">
        <div className="left"></div>
        <div className="right">
          <div className="resume">
            <div className="r4-left-right-wrapper">
              <div className="resume_left">
                <div className="r4-leftside-contents">
                  <div className="r4-circle-image">
                    <img src={require("./r1-img.jpg")} alt="Profile" />
                  </div>
                  <div className="r4-objective">
                    <h2>OBJECTIVE</h2>
                    <div className="r4-objective-info">
                      <p>
                        To offer medical assistance to our target groups either
                        for free or highly subsided by having health/medical
                        facilities, centres and hospitals. To empower our target
                        groups with free vocational, and entrepreneurial skills
                        through the provision of such centres. To empower our
                        target groups with both financial and infrastructural
                        assistance to free them from over-reliance and over-
                        dependence on others.
                      </p>
                    </div>
                  </div>

                  <div className="r4-skills">
                    <h2>SKILLS</h2>
                    <div className="r4-skills-info">
                      <div className="dots"></div>
                      <h4>Java</h4>
                    </div>
                    <div className="r4-skills-info">
                      <div className="dots"></div>
                      <h4>Html,css</h4>
                    </div>
                    <div className="r4-skills-info">
                      <div className="dots"></div>
                      <h4>Javascript</h4>
                    </div>
                  </div>
                  <div className="r4-languages">
                    <h2>LANGUAGES</h2>
                    <div className="r4-languages-info">
                      <div className="dots"></div>
                      <h4>English</h4>
                    </div>
                    <div className="r4-languages-info">
                      <div className="dots"></div>
                      <h4>Hindi</h4>
                    </div>
                    <div className="r4-languages-info">
                      <div className="dots"></div>
                      <h4>Bengali</h4>
                    </div>
                  </div>
                  <div className="r4-contact">
                    <div className="r4-heading">
                      <h2>CONTACT</h2>
                    </div>
                    <div className="r4-contact-info">
                      <div className="r4-contact-info-details">
                        <AiOutlineMail />
                        <p>saharohit158@gmail.com</p>
                      </div>
                      <div className="r4-contact-info-details">
                        <MdCall />
                        <p>1234567890</p>
                      </div>
                      <div className="r4-contact-info-details">
                        <HiOutlineLocationMarker />
                        <p>saharohit158@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resume_right">
                <div className="r4-rightside-contents">
                  <div className="r4-name">
                    <div className="r4-name-info">
                      <h1>anna muthuswami</h1>
                      <p>App Developer</p>
                    </div>
                  </div>

                  <div className="r4-education">
                    <h2>EDUCATION</h2>
                    <div className="r4-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>Vellore Institue of Technology </p>
                    </div>
                    <div className="r4-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
                    </div>
                    <div className="r4-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
                    </div>
                  </div>

                  <div className="r4-internship-experience">
                    <h2>EXPERIENCE</h2>
                    <div className="r4-internship-info">
                      <div className="r4-internship-info-details">
                        <div className="dots"></div>
                        <h3>Intern at Simmi Foundation</h3>
                      </div>
                      <div className="r4-internship-info-details">
                        <div className="dots"></div>
                        <h3>TL at Warrior</h3>
                      </div>
                      <div className="r4-internship-info-details">
                        <div className="dots"></div>
                        <h3>Member of Code Vision</h3>
                      </div>
                    </div>
                  </div>

                  <div className="r4-projects">
                    <h2>PROJECTS</h2>
                    <div className="r4-projects-info">
                      <div className="r4-projects-info-details">
                        <div className="dots"></div>
                        <h3>Resume Builder</h3>
                      </div>
                      <div className="r4-projects-info-details">
                        <div className="dots"></div>
                        <h3>Resume Builder</h3>
                      </div>
                      <div className="r4-projects-info-details">
                        <div className="dots"></div>
                        <h3>Resume Builder</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume4;
