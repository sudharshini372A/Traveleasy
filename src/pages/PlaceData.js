import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import insideData from '../json/data.json';
import ThingsSlide from '../components/ThingSlide';
import { FaCircleArrowLeft } from "react-icons/fa6";
import ScrollArrow from '../components/ScrollArrow';

const Spotdetailplaces = () => {
  const { spot, spotName } = useParams();

  const PlaceToSpots = ['backwater', 'beach', 'fort', 'heritage', 'hiking', 'hills', 'museum', 'palace', 'temple', 'waterfall', 'wildlife'];
  const fame = PlaceToSpots.findIndex(item => item === spot);
  const metaURL = `https://traveleasy.co.in/destination/${spot}/${spotName}`;

  const spotInside = insideData.dtdata[fame]?.find(
    item => item?.title.replaceAll(' ', '_').toLowerCase() === spotName.toLowerCase()
  );

  const navigate = useNavigate();

  const nextSideImage = () => {
    const currentIndex = insideData.dtdata[fame]?.findIndex(
      (item) => item?.title.replaceAll(' ', '_').toLowerCase() === spotName.toLowerCase()
    );

    const nextIndex = (currentIndex + 1) % insideData.dtdata[fame]?.length;
    const nextSpot = insideData.dtdata[fame][nextIndex];

    if (nextSpot) {
      navigate(`/placetovisit/${spot}/${nextSpot?.title.replaceAll(' ', '_').toLowerCase()}`);

      // Update Meta Tags Safely
      const updateMetaTag = (name, content) => {
        const tag = document.querySelector(`meta[name="${name}"]`);
        if (tag) tag.setAttribute('content', content);
      };

      document.title = `${nextSpot.title} | Spots Places | TravelEasy Guide`  || "TravelEasy | Guide to Travel";

      updateMetaTag("description", `Explore ${nextSpot.title}, one of the best places in ${spot}.`);
      updateMetaTag("keywords", `${spot}, travel, tourism, ${nextSpot.title}`);
      updateMetaTag("og:title", nextSpot.title);
      updateMetaTag("og:description", `Discover more about ${nextSpot.title}.`);
      updateMetaTag("og:image", nextSpot?.mainImage || "https://traveleasystorage.s3.eu-north-1.amazonaws.com/default-image.webp");
      updateMetaTag("og:url", `https://traveleasy.co.in/placetovisit/${spot}/${nextSpot?.title.replaceAll(' ', '_').toLowerCase()}`);
    }
  };



  const navigateToSpot = (spots) => {
    navigate(`/placetovisit/${spots}`);
  };

  const navigateToThings = (place) => {
    navigate(`/thingsdo/${place}`);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [spotName]);
  console.log(spot);

  return (
    <>
      <Helmet>
        <title>{spotInside?.title || "Travel Destination"}</title>
        <meta name="description" content={spotInside?.description || "Explore beautiful travel destinations."} />
        <meta name="keywords" content={`${spotInside?.title}, ${spot}, travel, places to visit, tourism`} />
        <meta name="Title" content={spotInside?.title || "Travel Destination"} />
        <meta property="og:title" content={spotInside?.title || "Travel Destination"} />
        <meta property="og:description" content={spotInside?.description || "Explore beautiful travel destinations."} />
        <meta property="og:image" content={spotInside?.mainImage || "default-image-url"} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:site_name" content="TravelEasy" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={metaURL} />
      </Helmet>
      <div
        className='btn btn-primary'
        style={{ position: 'fixed', zIndex: 1000 }}
        onClick={() => {
          navigate(`/placetovisit/${spot}`);

          document.title = `${spot.charAt(0).toUpperCase() + spot.slice(1)} | Explore Tourist Spots | TravelEasy Guide`;
        }}><FaCircleArrowLeft /></div>
      <div className="container-fluid mt15">

        <div id="dynamicContent"></div>
        <div className="inPage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8">

                <img loading="lazy" id="mainImage1" src={spotInside?.mainImage} alt="Main" style={{ width: '100%' }} />
              </div>
              <div className="col-xl-4" id="colRow">
                {spotInside?.sideContent.map((content, index) => (
                  <div className="row" key={index} style={{ marginBottom: '20px' }}>
                    <p id={`sideDes${index + 1}`}>
                      {index === 0 ? "Popular Spot" : "Hotels and Resorts"}
                    </p>
                    <img loading="lazy" id={`sideImage${index + 1}`} src={content?.image} alt={`Side ${index + 1}`} width="100%" onClick={() => { if (index === 0) nextSideImage() }} />
                  </div>
                ))}
              </div>

            </div>
            <div className="row">
              <div className="col-xl-8">
                <h3 id="title">{spotInside?.title}</h3>

                <p id="description">{spotInside?.description}</p>
                <h3 id="conclusionTitle">Conclusion</h3>
                <p id="conclusion">{spotInside?.conclusion}</p>
                {spotInside?.categories && (
                  <div className="container-fluid">
                    <div className="place-category-image">
                      {spotInside?.categories.map((category, index) => (
                        <img loading="lazy"
                          key={index}
                          src={category?.image}
                          alt={category?.name}
                          onClick={() => console.log(`${category?.name} clicked`)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="col-xl-4" id="colRow1">
                {spotInside?.sideContent.map((content, index) => (
                  <div key={index}>
                    <h3 id={`sideTitle${index + 1}`}>{content?.title}</h3>
                    <p id={`sideDesc${index + 1}`}>{content?.description}</p>
                  </div>
                ))}
              </div>
              <div className="container-fluid">
                <div className="place-category-image">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/backwater.png"
                    alt="backWater"
                    onClick={() => navigateToSpot("backwater")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/adventure.png"
                    alt="Adventure"
                    onClick={() => navigateToThings("adventure")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/art%26culture.png"
                    alt="ArtCult"
                    onClick={() => navigateToThings("artculture")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/beachs.png"
                    alt="Beaches"
                    onClick={() => navigateToSpot("beach")}
                  />
                </div>
                <div className="place-category-image">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/cuisine.png"
                    alt="Cuisine"
                    onClick={() => navigateToThings("cuisine")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/festival.png"
                    alt="Festival"
                    onClick={() => navigateToThings("festival")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/forts.png"
                    alt="Forts"
                    onClick={() => navigateToSpot("fort")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/Games.png"
                    alt="Games"
                    onClick={() => navigateToThings("martialart")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/heritage.png"
                    alt="Heritage"
                    onClick={() => navigateToSpot("heritage")}
                  />
                </div>
                <div className="place-category-image">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/hiking.png"
                    alt="Hiking"
                    onClick={() => navigateToSpot("hiking")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/hills.png"
                    alt="Hills"
                    onClick={() => navigateToSpot("hills")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/museum.png"
                    alt="Museum"
                    onClick={() => navigateToSpot("museum")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/palace.png"
                    alt="Palace"
                    onClick={() => navigateToSpot("palace")}
                  />
                </div>
                <div className="place-category-image">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/spritual.png"
                    alt="Spiritual"
                    onClick={() => navigateToThings("spiritual")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/temples.png"
                    alt="Temples"
                    onClick={() => navigateToSpot("temple")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/villagelife.png"
                    alt="Village"
                    onClick={() => navigateToThings("village")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/waterfalls.png"
                    alt="WaterFall"
                    onClick={() => navigateToSpot("waterfall")}
                  />
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/buttons/wildlife.png"
                    alt="WildLife"
                    onClick={() => navigateToSpot("wildlife")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThingsSlide />
      <ScrollArrow />
    </>
  );
};

export default Spotdetailplaces;
