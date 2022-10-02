import React, { useContext } from "react";
import "./Contact.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Contact = () => {
  const { dark } = useContext(DarkthemeContext);
  return (
    <div id="contact">
      <div className={`contact__details ${!dark ? "contact__light" : ""}`}>
        <h1
          className={`contact__details__heading ${
            !dark ? "contact__heading__light" : ""
          }`}
        >
          Contact me
        </h1>
        <p>Open for Suggestions and Oppurtunities!</p>
        <h2
          className={`contact__details__name ${
            !dark ? "contact__name__light" : ""
          }`}
        >
          Anmoldeep Singh
        </h2>
        <p className="contact__details__address">Jalandhar, Punjab</p>
        <p className="contact__details__links">
          <a
            className={`contact__details__resume ${
              !dark ? "contact__deatails__resumeDark" : ""
            }`}
          >
            ✉ sainianmol16@gmail.com
          </a>
        </p>
        <p className="contact__details__links">
          <a
            className={`contact__details__resume ${
              !dark ? "contact__deatails__resumeDark" : ""
            }`}
            href="https://drive.google.com/file/d/1OgpWEhKuYUHJOHMe8bHB9oouJapa7A0d/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/anmoldeep-singh-51bb4b1b1/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
        <a
          href="https://github.com/AnmolSaini16"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
        <a
          href="https://leetcode.com/sainianmol16/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
        <a
          href="https://www.instagram.com/anmol_saini16"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
