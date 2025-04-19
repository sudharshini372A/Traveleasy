import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom'
import DistContent from "../json/distContent.json"
import ThingsSlide from '../components/ThingSlide'
import { FaCircleArrowLeft } from "react-icons/fa6";
import ScrollArrow from '../components/ScrollArrow';


const DistrictData = () => {
  const { district, name } = useParams()
  const navigate = useNavigate()
  const DistrictName = ["ariyalur", "chengalpattu", "chennai", "coimbatore", "cuddalore", "dharmapuri", "dindigal", "erode", "kallakurichi", "kanchipuram", "kanniyakumari", "karur", "krishnagiri", "madurai", "mayiladuthurai", "nagapattinam", "namakkal", "nilgiris", "perambalur", "pudukkottai", "ramanathapuram", "ranipet", "salem", "sivagangai", "tenkasi", "thanjavur", "theni", "thirunelveli", "thirupathur", "thiruppur", "thiruvallur", "thiruvannamalai", "thiruvarur", "trichy", "tuticorin", "vellore", "vilupuram", "virudhunagar", "pondicherry"]
  const index = DistrictName.findIndex(item => item === district);

  const data = DistContent.dtdata[index]
  const placeData = data.find((item) => item.title.trim().replaceAll(" ", "_").toLowerCase() === name.toLowerCase())

  const metaTitle = placeData?.title.toLowerCase() || `${district} Tourism - Explore the Best Places | TravelEasy Guide`;
  const metaDescription = placeData?.description || `Discover top attractions, cultural heritage, and the best places to visit in ${district}. Plan your trip now!`;
  const metaKeywords = `${district}, travel, tourism, places to visit, attractions, ${placeData?.title || ''}`;
  const metaImage = placeData?.mainImage || "https://traveleasystorage.s3.eu-north-1.amazonaws.com/default-image.webp";
  const metaURL = `https://traveleasy.co.in/destination/${district}/${name}`;
  console.log(metaTitle);

  const navigateToNext = () => {
    let nextIndex = data.findIndex(item => item === placeData)
    if (data.length - 1 > nextIndex) {
      nextIndex += 1
    } else {
      nextIndex = 0
    }

    const nextPlace = data[nextIndex]
    const nextTitle = nextPlace.title.trim().replaceAll(" ", "_").toLowerCase()

    navigate(`/destination/${district}/${nextTitle}`)

    document.title = `${nextPlace.title} Tourism - Explore the Best Places | TravelEasy Guide` || `${district} Tourism - Explore the Best Places | TravelEasy Guide`
  }

  const navigateToSpot = (spots) => {
    navigate(`/placetovisit/${spots}`)
  }
  const navigateToThings = (place) => {
    navigate(`/thingsdo/${place}`)
  }
  useEffect(() => {
    if (name === "allPlaces") {
      const metaTitle = `${district} TravelEasy - Explore All Places | Travel Guide`;
      const metaDescription = `Discover all the top attractions, cultural heritage, and the best places to visit in ${district}-TravelEasy Make easy. Plan your trip now!`;
      const metaKeywords = `${district}, travel, tourism, all places, top attractions`;
      const metaImage = "https://traveleasystorage.s3.eu-north-1.amazonaws.com/default-image.webp";
      const metaURL = `https://traveleasy.co.in/destination/${district}/allPlaces`;

      document.title = metaTitle;
      document.querySelector('meta[name="description"]').setAttribute('content', metaDescription);
      document.querySelector('meta[name="keywords"]').setAttribute('content', metaKeywords);
      document.querySelector('meta[property="og:title"]').setAttribute('content', metaTitle);
      document.querySelector('meta[property="og:description"]').setAttribute('content', metaDescription);
      document.querySelector('meta[property="og:image"]').setAttribute('content', metaImage);
      document.querySelector('meta[property="og:url"]').setAttribute('content', metaURL);
      document.querySelector('link[rel="canonical"]').setAttribute('href', metaURL);
    }
  }, [district, name]);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      <Helmet>
        <title>{metaTitle.charAt(0).toUpperCase() + name.slice(1)}</title>
        <meta name="title" content={metaTitle}/>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={metaURL} />
      </Helmet>
      <div className='btn btn-primary' style={{ position: 'fixed', zIndex: 1000 }} onClick={() => {
        navigate(`/destination/${district}/allPlaces`);

        document.title = `${district.charAt(0).toUpperCase() + district.slice(1)} Tourism | Explore All Places | TravelEasy-Guide`;

        const updateMetaTag = (name, content) => {
          const tag = document.querySelector(`meta[name="${name}"]`);
          if (tag) tag.setAttribute('content', content);
        };

        updateMetaTag("description", `Explore all popular places to visit in ${district}. Plan your next trip now!`);
        updateMetaTag("keywords", `${district}, travel, tourism, all places, attractions`);
        updateMetaTag("og:title", `Destination | ${district} | All Places`);
        updateMetaTag("og:description", `Discover all the must-visit places in ${district} for your perfect trip.`);
        updateMetaTag("og:url", `https://traveleasy.co.in/destination/${district}/allPlaces`);
      }}><FaCircleArrowLeft size={20} color='white' /></div>

      <div className="container-fluid mt15">
        <div id="dynamicContent"></div>
        <div className="inPage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8">
                <img loading="lazy" id="mainImage1" src={placeData.mainImage} alt="Main" />
              </div>
              <div className="col-xl-4" id="colRow">
                <div className="row">
                  <p id="sideDes1">{placeData.sideDes1}</p>
                  <img loading="lazy"
                    id="sideImage1"
                    src={placeData.sideContent[0].image}
                    alt="Side 1"
                    onClick={() => navigateToNext()}
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="row">
                  <p id="sideDes2">{placeData.sideDes2}</p>
                  <img loading="lazy" id="sideImage2" src={placeData.sideContent[1].image} alt="Side 2" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <h3 id="title">{placeData.title}</h3>
                <p id="description">{placeData.description}</p>
                <h3 id="conclusionTitle">Conclusion</h3>
                <p id="conclusion">{placeData.conclusion}</p>
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
              <div className="col-xl-4" id="colRow1">
                <h3 id="sideTitle1">{placeData.sideContent[0].title}</h3>
                <p id="sideDesc1">{placeData.sideContent[0].description}</p>
                <h3 id="sideTitle2">{placeData.sideContent[1].title}</h3>
                <p id="sideDesc2">{placeData.sideContent[1].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThingsSlide />
      <ScrollArrow />
    </div>
  )
}

export default DistrictData