import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";

import "../styles/booking.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import logoRound from "../images/Praly-rond.png";

const BookingPage = function (props) {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  // useEffect(() => {
  //   let frame = document.getElementById("booking");

  //   console.log("found frame");
  //   console.log(frame);

  //   // frame.onload = function () {
  //   //   frame.style.height =
  //   console.log(frame.contentWindow.document.body.scrollHeight + "px");
  //   //   console.log("measuring iframe");
  //   frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";
  //   // };
  // });

  return (
    <div>
      <Helmet>
        <title>{languageToUse.bookingTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionBooking}
        />
        <meta name="keywords" content={languageToUse.metaKeywordsBooking} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="hero-booking">
        <img src={logoRound} alt="" className="hero-logo" />
        <Link to="/booking#booking" className="hero-button">
          {languageToUse.bookingPageTitle}
        </Link>
      </div>
      <div id="booking">
        <div className="header-placeholder" />

        <h2 className="page-subtitle">{languageToUse.bookingPageSubTitle}</h2>
        <p className="additional-info-resas">{languageToUse.additionalInfo}</p>
      </div>
      <iframe
        className="iframe-booking iframe-booking-all"
        id="booking"
        src="https://booking.smoobu.com/9A384298"
      />
    </div>
  );
};

export default BookingPage;
