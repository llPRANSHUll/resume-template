import React from "react";
import "./Resume5.css";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Resume5 = () => {
  return (
    <div>
      <div className="resume5">
        <div className="left"></div>
        <div className="right">
          <div className="resume">
            <div className="r5-left-right-wrapper">
              <div className="resume_right">
                <div className="r5-rightside-contents">
                  <div className="r5-name">
                    <div className="r5-name-info">
                      <h1>anna muthuswami</h1>
                      <p>App Developer</p>
                    </div>
                  </div>

                  <div className="r5-skills">
                    <h2>SKILLS</h2>
                    <div className="r5-skills-info">
                      <div className="r5-skills-info-details">
                        <div className="dots"></div>
                        <h3>Java</h3>
                      </div>
                      <div className="r5-skills-info-details">
                        <div className="dots"></div>
                        <h3>Html, CSS</h3>
                      </div>
                      <div className="r5-skills-info-details">
                        <div className="dots"></div>
                        <h3>Javascript</h3>
                      </div>
                    </div>
                  </div>
                  <div className="r5-languages">
                    <h2>LANGUAGES</h2>
                    <div className="r5-languages-info">
                      <div className="r5-languages-info-details">
                        <div className="dots"></div>
                        <h3>Hindi</h3>
                      </div>
                      <div className="r5-languages-info-details">
                        <div className="dots"></div>
                        <h3>English</h3>
                      </div>
                      <div className="r5-languages-info-details">
                        <div className="dots"></div>
                        <h3>Bengali</h3>
                      </div>
                    </div>
                  </div>

                  <div className="r5-internship-experience">
                    <h2>EXPERIENCE</h2>
                    <div className="r5-internship-info">
                      <div className="r5-internship-info-details">
                        <div className="dots"></div>
                        <h3>Intern at Simmi Foundation</h3>
                      </div>
                      <div className="r5-internship-info-details">
                        <div className="dots"></div>
                        <h3>TL at Warrior</h3>
                      </div>
                      <div className="r5-internship-info-details">
                        <div className="dots"></div>
                        <h3>Member of Code Vision</h3>
                      </div>
                    </div>
                  </div>

                  <div className="r5-projects">
                    <h2>PROJECTS</h2>
                    <div className="r5-projects-info">
                      <div className="r5-projects-info-details">
                        <div className="dots"></div>
                        <h3>Resume Builder</h3>
                      </div>
                      <div className="r5-projects-info-details">
                        <div className="dots"></div>
                        <h3>Resume Builder</h3>
                      </div>
                      <div className="r5-projects-info-details">
                        <div className="dots"></div>
                        <h3>Resume Builder</h3>
                      </div>
                    </div>
                  </div>

                  <div className="r5-contact">
                    <div className="r5-heading">
                      <h2>CONTACT</h2>
                    </div>
                    <div className="r5-contact-info">
                      <div className="r5-contact-info-details">
                        <AiOutlineMail color="#696969" fontSize="1.5em" />
                        <h3>saharohit158@gmail.com</h3>
                      </div>
                      <div className="r5-contact-info-details">
                        <MdCall color="#696969" fontSize="1.5em" />
                        <h3>1234567890</h3>
                      </div>
                      <div className="r5-contact-info-details">
                        <HiOutlineLocationMarker
                          color="#696969"
                          fontSize="1.5em"
                        />
                        <h3>saharohit158@gmail.com</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume_left">
                <div className="r5-leftside-contents">
                  <div className="r5-circle-image">
                    <img src={require("./r1-img.jpg")} alt="Profile" />
                  </div>
                  <div className="r5-objective">
                    <h2>OBJECTIVE</h2>
                    <div className="r5-objective-info">
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

                  <div className="r5-education">
                    <h2>EDUCATION</h2>
                    <div className="r5-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>Vellore Institue of Technology </p>
                    </div>
                    <div className="r5-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
                    </div>
                    <div className="r5-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
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

export default Resume5;
