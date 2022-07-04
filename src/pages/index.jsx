import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import { Link } from "gatsby";

// import SimpleReactLightbox from "simple-react-lightbox";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Intro from "../components/Intro";
import Destination from "../components/Destination";
import Contact from "../components/Contact";

import top from "../images/top.png";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  useEffect(() => {
    const top = document.getElementById("top");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        top.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !top.classList.contains(scrollDown)) {
        top.classList.remove(scrollUp);
        top.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        top.classList.contains(scrollDown)
      ) {
        top.classList.remove(scrollDown);
        top.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <div>
      {/* <SimpleReactLightbox> */}
      <Helmet>
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Link to="/" id="top" className="scroll-down">
        <img src={top} className="top-link" alt="Back to top" />
      </Link>
      <Intro language={language} languageToUse={languageToUse} />
      <Destination language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
      {/* </SimpleReactLightbox> */}
    </div>
  );
};

export default IndexPage;
