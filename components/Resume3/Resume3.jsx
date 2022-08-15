import React from "react";
import "./Resume3.css";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Resume3 = () => {
  return (
    <div>
      <div className="resume3">
        <div className="left"></div>
        <div className="right">
          <div className="resume">
            <div className="r3-header-img">
              <div className="r3-header-img-front"></div>
              <div className="r3-person-info">
                <h1>Dani Martinez</h1>
                <h4>Digital Marketing Manager</h4>
              </div>
            </div>
            <div className="r3-left-right-wrapper">
              <div className="resume_left">
                <div className="r3-leftside-contents">
                  <div className="r3-profile-pic"></div>
                  <div className="r3-objective">
                    <h2>OBJECTIVE</h2>
                    <div className="r3-objective-info">
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
                  <div className="r3-skills">
                    <h2>SKILLS</h2>
                    <div className="r3-skills-info">
                      <div className="dots"></div>
                      <h4>Java</h4>
                    </div>
                    <div className="r3-skills-info">
                      <div className="dots"></div>
                      <h4>Html,css</h4>
                    </div>
                    <div className="r3-skills-info">
                      <div className="dots"></div>
                      <h4>Javascript</h4>
                    </div>
                  </div>

                  <div className="r3-languages">
                    <h2>LANGUAGES</h2>
                    <div className="r3-languages-info">
                      <div className="dots"></div>
                      <h4>English</h4>
                    </div>
                    <div className="r3-languages-info">
                      <div className="dots"></div>
                      <h4>Hindi</h4>
                    </div>
                    <div className="r3-languages-info">
                      <div className="dots"></div>
                      <h4>Bengali</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resume_right">
                <div className="r3-rightside-contents">
                  <div className="r3-education">
                    <h2>EDUCATION</h2>
                    <div className="r3-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
                    </div>
                    <div className="r3-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
                    </div>
                    <div className="r3-education-details">
                      <h3>2019-2023</h3>
                      <p>B.tech in Computer Science And Engineering</p>
                      <p>B.tech in Computer Science And Engineering</p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="r3-internship-experience">
                    <h2>EXPERIENCE</h2>
                    <div className="r3-internship-info">
                      <div className="r3-internship-info-details">
                        <div className="dots"></div>
                        <p>Intern at Simmi Foundation</p>
                      </div>
                      <div className="r3-internship-info-details">
                        <div className="dots"></div>
                        <p>TL at Warrior</p>
                      </div>
                      <div className="r3-internship-info-details">
                        <div className="dots"></div>
                        <p>Member of Code Vision</p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="r3-projects">
                    <h2>PROJECTS</h2>
                    <div className="r3-projects-info">
                      <div className="r3-projects-info-details">
                        <div className="dots"></div>
                        <p>Resume Builder</p>
                      </div>
                      <div className="r3-projects-info-details">
                        <div className="dots"></div>
                        <p>Resume Builder</p>
                      </div>
                      <div className="r3-projects-info-details">
                        <div className="dots"></div>
                        <p>Resume Builder</p>
                      </div>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="r3-contact">
                    <div className="r3-heading">
                      <h2>CONTACT</h2>
                    </div>
                    <div className="r3-contact-info">
                      <div className="r3-contact-info-details">
                        <AiOutlineMail />
                        <p>saharohit158@gmail.com</p>
                      </div>
                      <div className="r3-contact-info-details">
                        <MdCall />
                        <p>1234567890</p>
                      </div>
                      <div className="r3-contact-info-details">
                        <HiOutlineLocationMarker />
                        <p>saharohit158@gmail.com</p>
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

export default Resume3;
