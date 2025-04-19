import React, { useEffect } from 'react'
import ScrollArrow from './ScrollArrow';

const TourPackage = () => {
  useEffect(() => {
    document.title = "Tour Package - Packages for tour | TravelEasy - Make Easy with Us";
  }, []);
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>

      <section >
        <div id="tourPackage-bg" className="justify-content-center align-items-center d-flex">
          <h1 className="text-center fw-bold px-3 w-75 text-light user-select-none above-text" > Comming Soon...</h1>
        </div>
      </section>
      <div className="wave-container">
        <div className="wave1"></div>
        <div className="wave2"></div>
      </div>
      <section>
        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/cominsoon.png" width="100%" alt="tour-comingSoon" />
      </section>
      <ScrollArrow />
    </>
  )
}
export default TourPackage;
