import React from "react";

import { Link } from "gatsby";

import "../styles/Appart.css";

import pictoAppartColor from "../images/appart-couleur.png";

import { content } from "../content/languages";

import comingSoonFR from "../images/DISPO-BIENTOT.jpg";
import comingSoonEN from "../images/Available-soon.jpg";
import comingSoonNL from "../images/Binnenkort-beschikbaar.jpg";

import appart from "../images/picto-appart.png";
import vueVillage from "../images/icons/vue-village.png";
import doubleBed from "../images/icons/lit-double.png";
import sofaBed from "../images/icons/Canap-convertible.png";
import douche from "../images/icons/douche.png";
import speaker from "../images/icons/enceinte-bluetooth.png";
import swimmingPool from "../images/icons/piscine.png";
import privateGarden from "../images/icons/transat.png";
import parking from "../images/icons/parking.png";
import bikeParking from "../images/icons/velo.png";
import clim from "../images/icons/clim.png";
import bebe from "../images/icons/lit-bébé.png";

const Appart = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  const { data } = props;

  let images = data.allContentfulPraly.nodes;

  const imagesListFrench = (
    <>
      <div className="room-description-image-container">
        <img
          src={comingSoonFR}
          alt="Bientôt disponible"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonFR}
          alt="Bientôt disponible"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonFR}
          alt="Bientôt disponible"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonFR}
          alt="Bientôt disponible"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonFR}
          alt="Bientôt disponible"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonFR}
          alt="Bientôt disponible"
          className="thumbnail-image coming-soon-image"
        />
      </div>
    </>
  );

  const imagesListEnglish = (
    <>
      <div className="room-description-image-container">
        <img
          src={comingSoonEN}
          alt="Coming soon"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonEN}
          alt="Coming soon"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonEN}
          alt="Coming soon"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonEN}
          alt="Coming soon"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonEN}
          alt="Coming soon"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonEN}
          alt="Coming soon"
          className="thumbnail-image coming-soon-image"
        />
      </div>
    </>
  );

  const imagesListDutch = (
    <>
      <div className="room-description-image-container">
        <img
          src={comingSoonNL}
          alt="Binnenkort beschikbaar"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonNL}
          alt="Binnenkort beschikbaar"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonNL}
          alt="Binnenkort beschikbaar"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonNL}
          alt="Binnenkort beschikbaar"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonNL}
          alt="Binnenkort beschikbaar"
          className="thumbnail-image coming-soon-image"
        />
      </div>
      <div className="room-description-image-container">
        <img
          src={comingSoonNL}
          alt="Binnenkort beschikbaar"
          className="thumbnail-image coming-soon-image"
        />
      </div>
    </>
  );

  return (
    <>
      <div className="chalet" id="appart">
        <div className="header-placeholder" />
        <Link
          to="/appart-booking"
          className="book-now book-now-appart mobile-only"
        >
          {languageToUse.bookNow}
        </Link>
        <div className="picto-container-herbergement picto-container-herbergement-appart ">
          <img
            src={pictoAppartColor}
            alt="L'Appart"
            className="picto-herbergement "
          />
          <h3 className="h3-room h3-appart">L'Appart</h3>
        </div>
        <div className="video-container-appart">
          <Link
            to="/appart-booking"
            className="book-now book-now-appart desktop-only"
          >
            {languageToUse.bookNow}
          </Link>
        </div>
        <div className="room-description-text">
          <p className="room-text">{languageToUse.appartP1}</p>
          <p className="room-text">{languageToUse.appartP2}</p>
          <p className="room-text">{languageToUse.appartP3}</p>
        </div>
        <div className="room-description room-description-appart">
          {language === "french" ? (
            <div className="room-description-images">{imagesListFrench}</div>
          ) : language === "english" ? (
            <div className="room-description-images">{imagesListEnglish}</div>
          ) : (
            <div className="room-description-images">{imagesListDutch}</div>
          )}
          <div className="room-description-list">
            <h3 className="installations-title">
              {languageToUse.installations}
            </h3>
            <ul className="facilities-list">
              <li>
                <img src={appart} alt="" className="facilities-icon" />
                {languageToUse.appartLi1}
              </li>
              <li>
                <img src={vueVillage} alt="" className="facilities-icon" />
                {languageToUse.appartLi2}
              </li>
              <li>
                <img src={doubleBed} alt="" className="facilities-icon" />
                {languageToUse.appartLi3}
              </li>
              <li>
                <img src={sofaBed} alt="" className="facilities-icon" />
                {languageToUse.appartLi4}
              </li>
              <li>
                <img src={douche} alt="" className="facilities-icon" />
                {languageToUse.appartLi5}
              </li>
              <li>
                <img src={speaker} alt="" className="facilities-icon" />
                {languageToUse.appartLi6}
              </li>
              <li>
                <img src={swimmingPool} alt="" className="facilities-icon" />
                {languageToUse.appartLi7}
              </li>
              <li>
                <img src={parking} alt="" className="facilities-icon" />
                {languageToUse.appartLi8}
              </li>
              <li>
                <img src={bebe} alt="" className="facilities-icon" />
                {languageToUse.appartLi9}
              </li>
            </ul>
            <p className="room-text">{languageToUse.appartLiExtrasTitle}</p>
            <ul>
              {/* <li className="room-text">{languageToUse.appartLiExtra1}</li> */}
              <li className="room-text">{languageToUse.appartLiExtra2}</li>
            </ul>
            <div className="button-container">
              <Link
                to="/appart-booking"
                className="herbergement-button appart-button"
              >
                {languageToUse.bookNow}
              </Link>
            </div>
          </div>
        </div>
        <p className="coming-soon">{languageToUse.comingSoon}</p>
      </div>
    </>
  );
};

export default Appart;
