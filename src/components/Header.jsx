import React, { useEffect } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import NoTextLogo from "../images/logo-dessin-seul-black.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
import flagNl from "../images/icon-nl.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }
  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  // const opacity = 0.1;
  // let header;

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (typeof window !== "undefined") {
  //       const y = 1 + (window.scrollY || window.pageYOffset);
  //       let o = (opacity + y) / 600;
  //       if (o > 0.85) {
  //         o = 0.85;
  //       }
  //       header = document.getElementById("header");
  //       header.style.backgroundColor = `rgb(255, 255, 255, ${o} `;
  //     }
  //   });
  // });

  return (
    <div className="header" id="header">
      <Link to="/" className="logo-link">
        <img className="header-logo" alt="logo" src={NoTextLogo} />
        <p className="header-logo-text">Les Lodges de Praly</p>
      </Link>
      <ul className="header-links hidden-mobile">
        <li>
          <Link to="/" className="nav-link">
            {languageToUse.home}
          </Link>
        </li>
        <span className="dot">&#8226;</span>
        <li>
          <Link to="/hebergements" className="nav-link">
            {languageToUse.herbergements}
          </Link>
        </li>
        <span className="dot">&#8226;</span>

        <li>
          <Link to="/#groups" className="nav-link">
            {languageToUse.groups}
          </Link>
        </li>
        <span className="dot">&#8226;</span>

        <li>
          <Link to="/#destination" className="nav-link">
            {languageToUse.destination}
          </Link>
        </li>
        <span className="dot">&#8226;</span>

        <li>
          <Link to="/#contact" className="nav-link">
            {languageToUse.contact}
          </Link>
        </li>
        <span className="dot">&#8226;</span>

        <li>
          <Link to="/booking" className="nav-link">
            <b> {languageToUse.book}</b>
          </Link>
        </li>
        <li>
          <div className="set-language-header">
            <img
              src={flagEn}
              onClick={() => handleSetLanguage("english")}
              className={`flag ${
                languageToUse.language === "english" ? "opaque" : "fade"
              } `}
            />
            <img
              src={flagFr}
              onClick={() => handleSetLanguage("french")}
              className={`flag ${
                languageToUse.language === "french" ? "opaque" : "fade"
              } `}
            />
            <img
              src={flagNl}
              onClick={() => handleSetLanguage("dutch")}
              className={`flag ${
                languageToUse.language === "dutch" ? "opaque" : "fade"
              } `}
            />
          </div>
        </li>
      </ul>

      <div className="hidden-desktop">
        <Burger
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </div>
    </div>
  );
};

export default Header;
