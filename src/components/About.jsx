import React, { useContext } from "react";
import "./About.css";
import Lottie from "react-lottie";
import animationData from "../Animation-data/aboutPic.json";

import { FaDownload } from "react-icons/fa";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const About = () => {
  const { dark } = useContext(DarkthemeContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`about ${!dark ? "about__light" : ""}`} id="about">
      <div className="about__content">
        <h1 className={`about__heading ${!dark ? "heading__light" : ""}`}>
          About Me
        </h1>

        <div className="about__content__body">
          <div className="about__image">
            <Lottie options={defaultOptions} height={200} width={120} />
          </div>
          <div className="about__content__body_text">
            <p>
              Hi there! I am Anmoldeep Singh! I am software engineer, During the
              second year of my colledge I found a intrest in myself about Web
              Development and now here I am. I love coding and developing
              websites and applications. Hope you like my work here. <br />I
              have done B.Tech in Computer Science and Engineering from Guru
              Nanak Dev University, Amritsar and currently working as Software
              Engineer in Optym, Bengaluru.
            </p>
            <a
              className={`about__content__body__button ${
                !dark ? "about__button__light" : ""
              }`}
              href="https://drive.google.com/file/d/1OgpWEhKuYUHJOHMe8bHB9oouJapa7A0d/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload className="download__icon" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
