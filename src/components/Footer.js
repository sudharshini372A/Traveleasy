import React, { useState, useEffect } from 'react';
import footMain from '../assets/images/footMain.png';
import footBottom from '../assets/images/footBottom.png';
import logoTravel from '../assets/images/logoTravelEasy.png';
import data from '../json/data.json';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [xOffset, setXOffset] = useState(0);
  const [isMouseIn, setIsMouseIn] = useState(false);
  const slideWidth = 200;
  const transitionSpeed = 0.2;
  const intervalTime = 16;

  useEffect(() => {
    // Load the data from JSON
    setSlidesData(data.dtdata?.[3] || []);
  }, []);

  useEffect(() => {
    // Animation logic
    const interval = setInterval(() => {
      if (!isMouseIn && slidesData.length > 0) {
        setXOffset((prevOffset) => {
          const newOffset = prevOffset + transitionSpeed;
          // If the slides have moved fully out of view, reset the offset
          if (newOffset >= slidesData.length * slideWidth) {
            return 0;
          }
          return newOffset;
        });
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isMouseIn, slidesData, slideWidth]);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <footer id="footMain">
        <div className="foot-container">
          <div className="foot1"></div>
        </div>
        <div className="footMain">
          <img loading="lazy" src={footMain} alt="footMain" className="footMain1" />
        </div>
        <div className="footBottom">
          <img loading="lazy" src={footBottom} alt="footBottom" className="footBottom1" />
        </div>
        <a href="https://www.instagram.com/_travel___easy_/profilecard/?igsh=cDg2d243aXFzbWc4" target='_blank'>
          <div className="footCarosuel">
            <div className="container film1">
              <div className="film-roll top-film-roll"></div>
              <div
                className="slid-er"
                onMouseEnter={() => setIsMouseIn(true)}
                onMouseLeave={() => setIsMouseIn(false)}
              >
                <div
                  className="slides"
                  style={{
                    transform: `translateX(-${xOffset}px)`,
                    whiteSpace: 'nowrap',
                    transition: 'transform 0.1s linear',
                  }}
                >
                  {/* Duplicate slidesData to create an infinite loop */}
                  {[...slidesData, ...slidesData].map((item, index) => (
                    <div className="slide" key={index} style={{ display: 'inline-block' }}>
                      <div className="slide-content">
                        <img loading="lazy" src={item.mainImage} alt={item.title || `Slide ${index + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="film-roll bottom-film-roll"></div>
            </div>
          </div>
          <div className="instaFixed">
            <p>
              Follow on <span>INSTAGRAM</span>
            </p>
          </div>
        </a>
        <div className="row">
          <div className="col-xl-3">
            <div className="QuickLinks">
              <h5>Quick Links</h5>
              <div id="Quickk">
                <a href="/">Home</a>
                <Link to="/hotels_resorts">Hotels & Resorts</Link>
                <Link to="/placetovisit">Place To Visit</Link>
                <Link to="/tourPackage">Tour Package</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="explore">
              <h4>Explore-TravelEasy-Make-with Us</h4>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="logoFoot">
              <img loading="lazy" src={logoTravel} alt="logoTravel2" width="200px" height="120px" />
            </div>
          </div>
          <div className="col-xl-3">
            <div className="QuickLinks1">
              <h5>Quick Links</h5>
              <div id="Quickk">
                <Link to="/destination">Destination</Link>
                <Link to="/thingsdo">Things To Do</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/contactus">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyFoot">
          <p className="copyh6">© 2024 Softnova. All Rights Reserved.</p>
          <a
            href="https://softnovatech.com/"
            rel="noreferrer"
          >
            <p className="copyh6">Powered by Softnova</p>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;