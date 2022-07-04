import React from "react";

import { Link } from "gatsby";

import "../styles/RoomIntro.css";

import { content } from "../content/languages";

import chalet from "../images/new-images/chalet-ext2.jpg";
import appart from "../images/appart-main.jpg";
import pavillion from "../images/new-images/pavillon-façade.jpg";

import pictoChaletColor from "../images/chalet-couleur.png";
import pictoPavillionColor from "../images/pavillon-couleur.png";
import pictoAppartColor from "../images/appart-couleur.png";

const RoomIntro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <>
      <div className="room-intro" id="accommodation">
        <div className="header-placeholder" />
        <h2>{languageToUse.ourRooms1}</h2>
        <h2>{languageToUse.ourRooms2}</h2>

        <div className="image-links">
          <Link to="/#chalet-intro" className="image-link chalet-image-link">
            <p className="image-link-title">Le Chalet</p>
            <div to="/#chalet-intro" className="extra-info-button">
              {languageToUse.moreInfo}
            </div>
          </Link>

          <Link to="/#appart-intro" className="image-link appart-image-link">
            <p className="image-link-title">L'Appart</p>
            <div className="extra-info-button">{languageToUse.moreInfo}</div>
          </Link>

          <Link
            to="/#pavillion-intro"
            className="image-link pavillion-image-link"
          >
            <p className="image-link-title">Le Pavillon</p>
            <div to="/#pavillion-intro" className="extra-info-button">
              {languageToUse.moreInfo}
            </div>
          </Link>
        </div>
        <div id="chalet-intro" />

        <div className="room-images-container room-images-container-chalet">
          <Link
            to="/chalet-booking"
            className="book-now book-now-chalet mobile-only"
          >
            {languageToUse.bookNow}
          </Link>
          <div className="picto-container picto-container-chalet">
            <img src={pictoChaletColor} alt="Le Chalet" className="picto " />
            <h3 className="h3-room h3-chalet">Le Chalet</h3>
          </div>
          <div className="room-image-container chalet-image">
            <Link
              to="/chalet-booking"
              className="book-now book-now-chalet desktop-only"
            >
              {languageToUse.bookNow}
            </Link>

            <img src={chalet} alt="Le Chalet" className="room-image" />
          </div>
        </div>

        <div className="bottom-room-intro">
          <div className="room-intro1 chalet-intro">
            <div className="room-intro-text-block  hidden-mobile-room-intro" />

            <p className="room-intro1-text">{languageToUse.introTextChalet}</p>
          </div>
          <Link
            to="/hebergements/#chalet"
            className="room-info-button room-info-button-right desktop-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>
        <div className="room-intro2">
          <Link
            to="/hebergements/#chalet"
            className="room-info-button room-info-button-right mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>

        <div id="appart-intro" />

        <div className="room-intro-inverse">
          <div className="room-images-container-inverse room-images-container-appart">
            <Link
              to="/appart-booking"
              className="book-now book-now-appart mobile-only"
            >
              {languageToUse.bookNow}
            </Link>
            <div className="picto-container picto-container-appart">
              <img src={pictoAppartColor} alt="L'Appart" className="picto " />
              <h3 className="h3-room h3-appart">L'Appart</h3>
            </div>
            <div className="room-image-container-inverse appart-image">
              <Link
                to="/appart-booking"
                className="book-now book-now-appart desktop-only"
              >
                {languageToUse.bookNow}
              </Link>

              <img src={appart} alt="L'Appart" className="room-image" />
            </div>
          </div>
        </div>
        <div className="bottom-room-intro bottom-room-intro-reverse ">
          <div className="room-intro1 appart-intro">
            <div className="room-intro-text-block-inverse hidden-mobile-room-intro" />

            <p className="room-intro1-text">{languageToUse.introTextAppart}</p>
          </div>
          <Link
            to="/hebergements/#appart"
            className="room-info-button room-info-button-left  desktop-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>
        <div className="room-intro2">
          <p className="coming-soon">{languageToUse.comingSoon}</p>

          <Link
            to="/hebergements/#appart"
            className="room-info-button room-info-button-left  mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>

        <div id="pavillion-intro" />

        <div className="room-images-container room-images-container-pavillion">
          <Link
            to="/pavillion-booking"
            className="book-now book-now-pavillion mobile-only"
          >
            {languageToUse.bookNow}
          </Link>
          <div className="picto-container picto-container-pavillion">
            <img
              src={pictoPavillionColor}
              alt="Le Pavillon"
              className="picto "
            />
            <h3 className="h3-room h3-pavillion">Le Pavillon</h3>
          </div>
          <div className="room-image-container pavillion-image">
            <Link
              to="/pavillion-booking"
              className="book-now book-now-pavillion desktop-only"
            >
              {languageToUse.bookNow}
            </Link>

            <img src={pavillion} alt="Le Pavillon" className="room-image" />
          </div>
        </div>

        <div className="bottom-room-intro">
          <div className="room-intro1 pavillion-intro">
            <div className="room-intro-text-block hidden-mobile-room-intro" />

            <p className="room-intro1-text">
              {languageToUse.introTextPavillion}
            </p>
          </div>
          <div className="more-info-button-container">
            <Link
              to="/hebergements/#pavillion"
              className="room-info-button room-info-button-right desktop-only"
            >
              {languageToUse.moreInfo}
            </Link>
          </div>
        </div>
        <div className="room-intro2">
          <Link
            to="/hebergements/#pavillion"
            className="room-info-button room-info-button-right mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomIntro;
