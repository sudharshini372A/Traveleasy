import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollArrow from './ScrollArrow';

export const ThingsToDo = () => {

  const ThingsVisit = [
    "adventure", "cuisine", "spiritual", "village", "festival", "artculture", "martialart"
  ];
  const navigate = useNavigate();
  const navigateToThings = (index) => {
    navigate(`/thingsdo/${ThingsVisit[index]}`);
  };
  useEffect(() => {
    document.title = "Spots in Places - Explore Places | TravelEasy | Travel Guide";
  }, []);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <section>
        <div id="thingsdo-bg" className="justify-content-center align-items-center d-flex">
          <h1 className="text-center fw-bold px-3 w-75 text-light user-select-none above-text" >Discover Tamil Nadu: Timeless temples, epic journeys, rich heritage, and the ancient soul of Tamil expressed through its language</h1>

        </div>
      </section>
      <div className="wave-container">
        <div className="wave1"></div>
        <div className="wave2"></div>
      </div>
      <section>
        <div className="things-img">
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/adventure.webp"
              alt="Adventure"
              className="district-img"
              onClick={() => navigateToThings(0)}
            />
            <p className="image-description">Adventure</p>
          </div>
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/culture.webp"
              alt="Cuisine"
              className="district-img"
              onClick={() => navigateToThings(1)}
            />
            <p className="image-description">Cuisine</p>
          </div>
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/spritual.webp"
              alt="Spiritual"
              className="district-img"
              onClick={() => navigateToThings(2)}
            />
            <p className="image-description">Spiritual</p>
          </div>
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/village.webp"
              alt="Village"
              className="district-img"
              onClick={() => navigateToThings(3)}
            />
            <p className="image-description">Village</p>
          </div>
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/village+festival.webp"
              alt="Festival"
              className="district-img"
              onClick={() => navigateToThings(4)}
            />
            <p className="image-description">Festival</p>
          </div>
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/artculture.webp"
              alt="Art & Culture"
              className="district-img"
              onClick={() => navigateToThings(5)}
            />
            <p className="image-description">Art & Culture</p>
          </div>
          <div className="district-container">
            <img loading="lazy"
              src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/vilaiyatu.webp"
              alt="Martial Art"
              className="district-img"
              onClick={() => navigateToThings(6)}
            />
            <p className="image-description">Martial Art</p>
          </div>
        </div>
      </section>
      <ScrollArrow />
    </>
  )
}

export default ThingsToDo;