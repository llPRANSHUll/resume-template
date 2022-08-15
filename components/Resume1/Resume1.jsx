import React from "react";
import "./Resume1.css";

const Resume1 = () => {
  return (
    <>
      <div className="resume1">
        <div className="left"></div>
        <div className="right">
          <div className="resume">
            <div className="resume_left">
              <div className="r1-name-img">
                <div className="r1-name-img-wrapper">
                  <div className="r1-main-image">
                    <img src={require("./r1-img.jpg")} alt="Profile" />
                  </div>
                  <div className="r1-name-designation">
                    <h1>Wasim zafar </h1>
                    <h5>software developer</h5>
                  </div>
                </div>
              </div>

              <div className="r1-midsection-wrapper">
                <div className="r1-midsection-left">
                  <div className="r1-objective">
                    <h2>OBJECTIVE</h2>
                    <div className="r1-objective-info">
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
                </div>
                <div className="divider"></div>
                <div className="r1-midsection-right">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume1;
