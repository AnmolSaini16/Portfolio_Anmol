import React, { useContext } from "react";
import "./Title.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import TypeWriter from "react-typewriter";
import { DarkthemeContext } from "../Contexts/ThemeContext";
import { Grid } from "@mui/material";

const Title = () => {
  const { dark } = useContext(DarkthemeContext);

  return (
    <div
      className="title"
      style={{
        backgroundImage: dark
          ? `url("images/bg-dark.jpg")`
          : `url("images/bg-light.jpg")`,
      }}
    >
      <div className="title__content">
        <div
          className={`title__content__container ${
            dark ? "title__content__dark" : ""
          } `}
        >
          <h1
            className={`title__heading ${!dark ? "title__heading__light" : ""}`}
          >
            <TypeWriter typing={0.6}>I'm Anmoldeep Singh</TypeWriter>
          </h1>
          <h3
            className={`title__content__left__subheading ${
              dark ? "subheading__dark" : ""
            }`}
          >
            I am a Frontend Developer, I love coding and developing Websites and
            Applications.
          </h3>
          <hr className="title__content__line" />
          <div className="title__links">
            <a
              href="https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                className={`title__content__left__icons ${
                  dark ? "left__icons__dark" : ""
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
                  dark ? "left__icons__dark" : ""
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
                  dark ? "left__icons__dark" : ""
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
                  dark ? "left__icons__dark" : ""
                }`}
              />
            </a>
          </div>
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
