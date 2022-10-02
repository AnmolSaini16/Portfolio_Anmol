import React, { useContext } from "react";
import "./Title.css";
import Lottie from "react-lottie";
import animationData from "../Animation-data/webPic.json";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";

import TypeWriter from "react-typewriter";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Title = () => {
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
    <div className="title">
      <div className="title__content">
        <div className="title__content__left">
          <h1
            className={`title__heading ${!dark ? "title__heading__light" : ""}`}
          >
            <TypeWriter typing={0.6}>I'm Anmoldeep Singh</TypeWriter>
          </h1>
          <h3
            className={`title__content__left__subheading ${
              !dark ? "subheading__dark" : ""
            }`}
          >
            I am a Software Engineer, I love coding and developing Websites and
            Applications.
          </h3>
          <hr className="title__content__line" />
          <a
            href="https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn
              className={`title__content__left__icons ${
                !dark ? "left__icons__dark" : ""
              }`}
            />
          </a>
          <a
            href="https://github.com/AnmolSaini16"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className={`title__content__left__icons ${
                !dark ? "left__icons__dark" : ""
              }`}
            />
          </a>
          <a
            href="https://leetcode.com/sainianmol16/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode
              className={`title__content__left__icons ${
                !dark ? "left__icons__dark" : ""
              }`}
            />
          </a>
          <a
            href="https://www.instagram.com/anmol_saini16"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              className={`title__content__left__icons ${
                !dark ? "left__icons__dark" : ""
              }`}
            />
          </a>
        </div>

        <div className="title__content__right">
          <Lottie options={defaultOptions} height={350} width={350} />
        </div>
      </div>
      <button className={`scrollDown__button ${!dark ? "scroll__light" : ""}`}>
        <a href="#about">
          <FaChevronDown className="scrollDown__button__icon" />
        </a>
      </button>
    </div>
  );
};

export default Title;
