import React from "react";
import "./Resume2.css";

const Resume2 = () => {
  return (
    <>
      <div className="resume2">
        <div className="left"></div>
        <div className="right">
          <div className="resume">
            <div className="resume_left">
              <div className="r2-main-image">
                <img src={require("./r1-img.jpg")} alt="Profile" />
              </div>
              <div className="r2-name">
                <h1>Wasim Zafar Shah</h1>
                <p>App developer</p>
              </div>
              <div className="r2-education">
                <h2>EDUCATION</h2>
                <div className="r2-education-data">
                  <h3>2019-2023</h3>
                  <div className="r2-education-data-p">
                    <p>B.tech in Computer Science and Engineering</p>
                    <p>Bengal College of Engineering and Technology</p>
                  </div>
                </div>
                <div className="r2-education-data">
                  <h3>2019-2023</h3>
                  <div className="r2-education-data-p">
                    <p>B.tech in Computer Science and Engineering</p>
                    <p>Bengal College of Engineering and Technology</p>
                  </div>
                </div>
                <div className="r2-education-data">
                  <h3>2019-2023</h3>
                  <div className="r2-education-data-p">
                    <p>B.tech in Computer Science and Engineering</p>
                    <p>Bengal College of Engineering and Technology</p>
                  </div>
                </div>
              </div>
              <div className="divider"> </div>
              <div className="r2-contact">
                <h2>CONTACT</h2>
                <div className="r2-contact-details">
                  <h3>Phone</h3>
                  <p>+91-1234567890</p>
                </div>
                <div className="r2-contact-details">
                  <h3>Email</h3>
                  <p>brihhantm@reallygoodsite.com</p>
                </div>
                <div className="r2-contact-details">
                  <h3>Address</h3>
                  <p>anycity, 134003, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            <div className="resume_right">
              <div className="r2-objective">
                <h2>OBJECTIVE</h2>
                <div className="r2-objective-info">
                  <p>
                    To offer medical assistance to our target groups either for
                    free or highly subsided by having health/medical facilities,
                    centres and hospitals. To empower our target groups with
                    free vocational, and entrepreneurial skills through the
                    provision of such centres. To empower our target groups with
                    both financial and infrastructural assistance to free them
                    from over-reliance and over- dependence on others.
                  </p>
                </div>
              </div>
              <div className="r2-skills">
                <h2>SKILLS</h2>
                <div className="r2-skills-info">
                  <div className="dots"></div>
                  <h4>Java</h4>
                </div>
                <div className="r2-skills-info">
                  <div className="dots"></div>
                  <h4>Html,css</h4>
                </div>
                <div className="r2-skills-info">
                  <div className="dots"></div>
                  <h4>Javascript</h4>
                </div>
              </div>

              <div className="r2-languages">
                <h2>LANGUAGES</h2>
                <div className="r2-languages-info">
                  <div className="dots"></div>
                  <h4>English</h4>
                </div>
                <div className="r2-languages-info">
                  <div className="dots"></div>
                  <h4>Hindi</h4>
                </div>
                <div className="r2-languages-info">
                  <div className="dots"></div>
                  <h4>Bengali</h4>
                </div>
              </div>

              <div className="r2-internship-experience">
                <h2>EXPERIENCE</h2>
                <div className="r2-internship-info">
                  <div className="r2-internship-info-details">
                    <div className="dots"></div>
                    <h4>Intern at Simmi Foundation</h4>
                  </div>
                  <div className="r2-internship-info-details">
                    <div className="dots"></div>
                    <h4>TL at Warrior</h4>
                  </div>
                  <div className="r2-internship-info-details">
                    <div className="dots"></div>
                    <h4>Member of Code Vision</h4>
                  </div>
                </div>
              </div>

              <div className="r2-projects">
                <h2>PROJECTS</h2>
                <div className="r2-projects-info">
                  <div className="r2-projects-info-details">
                    <div className="dots"></div>
                    <h4>Resume Builder</h4>
                  </div>
                  <div className="r2-projects-info-details">
                    <div className="dots"></div>
                    <h4>Resume Builder</h4>
                  </div>
                  <div className="r2-projects-info-details">
                    <div className="dots"></div>
                    <h4>Resume Builder</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume2;
