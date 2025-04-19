import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import ThingsSlide from './ThingsSlide';
import { FaCircleArrowLeft } from "react-icons/fa6";
import morePlaces from "../json/morePlace.json"
import ScrollArrow from '../components/ScrollArrow';


const PlaceSpots = () => {
  const navigate = useNavigate();
  const { spot } = useParams();
  const PlaceToVisit = ['backwater', 'beach', 'fort', 'heritage', 'hiking', 'hills', 'museum', 'palace', 'temple', 'waterfall', 'wildlife']

  const placeIndex = PlaceToVisit.findIndex(item => item === spot);

  const spotData = morePlaces.places[placeIndex]
  console.log({ spot });

  const navigateToSpot = (spots) => {
    navigate(`/placetovisit/${spots}`)
  }
  const navigateToThings = (place) => {
    navigate(`/thingsdo/${place}`)
  }
  useEffect(() => { window.scroll(0, 0) }, [spot])

  return (
    <>
      <div className='btn btn-primary ' style={{ position: 'fixed', zIndex: 1000 }} onClick={() => {
        navigate(`/placetovisit`);
        setTimeout(() => {
          document.title = "Place to Visit - Explore places | TravelEasy-Guide";
        }, 200);
      }}><FaCircleArrowLeft /></div>
      <div className='container-fluid ' style={{ marginTop: "14vh" }}>
        <div className="row">
          <div className="col-xl-9">
            <h1 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "Kadwa" }}>{spotData[0].title}</h1>

            <div id="contentSection">

              {spotData.map((spot1, index) => (
                <div className="place" key={index}>
                  <img loading="lazy" className='placeImage'
                    src={spot1.image}
                    alt={spot1.name}
                    onClick={() => navigate(`/placetovisit/${spot}/${spot1.name.toLowerCase().replaceAll(" ", "_")}`)}
                  />
                  <h2 id="catHead">{spot1.name}</h2>
                  <p id="catPara1">{spot1.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-3 text-center fixed-right" id="textt">
            <div className="container-fluid">
              <h3 style={{ marginTop: '13%' }}><b>Explore Spots</b></h3>
              <div className="place-imagecategory">
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/backwater.png" alt="backwater" onClick={() => navigateToSpot("backwater")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/beachs.png" alt="beach" onClick={() => navigateToSpot("beach")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/forts.png" alt="fort" onClick={() => navigateToSpot("fort")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/heritage.png" alt="heritage" onClick={() => navigateToSpot("heritage")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/hiking.png" alt="hiking" onClick={() => navigateToSpot("hiking")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/hills.png" alt="hills" onClick={() => navigateToSpot("hills")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/museum.png" alt="museum" onClick={() => navigateToSpot("museum")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/palace.png" alt="palace" onClick={() => navigateToSpot("palace")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/temples.png" alt="temple" onClick={() => navigateToSpot("temple")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/waterfalls.png" alt="waterfall" onClick={() => navigateToSpot("waterfall")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/wildlife.png" alt="wildlife" onClick={() => navigateToSpot("wildlife")} />
              </div>
            </div>
            <div className="container-fluid">
              <h3 className="mt-5"><b>Know More Things</b></h3>
              <div className="place-imagecategory">
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/adventure.png" alt="Adventure" onClick={() => navigateToThings("adventure")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/art%26culture.png" alt="ArtCult" onClick={() => navigateToThings("artculture")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/cuisine.png" alt="Cuisine" onClick={() => navigateToThings("cuisine")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/festival.png" alt="Festival" onClick={() => navigateToThings("festival")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/Games.png" alt="Games" onClick={() => navigateToThings("martialart")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/spritual.png" alt="Spiritual" onClick={() => navigateToThings("spiritual")} />
                <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/villagelife.png" alt="Village" onClick={() => navigateToThings("village")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ThingsSlide/> */}
      <ScrollArrow />
    </>
  );
};

export default PlaceSpots;
