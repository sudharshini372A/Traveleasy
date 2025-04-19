import React, { useEffect } from 'react'
import ScrollArrow from './ScrollArrow'

const Hotelresorts = () => {
  useEffect(() => {
    document.title = "Hotels & Resorts - Plan Your Stay | TravelEasy-Guide";

    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // ✅ Update meta tags dynamically
    updateMetaTag("description", "Find the best hotels and resorts for your perfect vacation. Book now with TravelEasy!");
    updateMetaTag("keywords", "hotels, resorts, stay, booking, travel, tourism");
    updateMetaTag("og:title", "Hotels & Resorts - TravelEasy");
    updateMetaTag("og:description", "Discover top-rated hotels and resorts for your next trip.");
    updateMetaTag("og:url", "https://traveleasy.co.in/hotels_resorts");

  }, []);
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <>
    <section>
      <div id="hotels_resorts-bg" className="justify-content-center align-items-center d-flex">
          <h1 className="text-center fw-bold px-3 w-75 text-light user-select-none above-text" >Authentic Reviews & Ratings For Hotels And Resorts You Can Trust </h1>
      </div>   
    </section>
    <div className="wave-container">
      <div className="wave1"></div>
      <div className="wave2"></div>
    </div>
    <section>
      <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/cominsoon.png" width="100%" alt="hotel-comingSoon"/>
    </section>
    <ScrollArrow/>
    </>
  )
}

export default Hotelresorts