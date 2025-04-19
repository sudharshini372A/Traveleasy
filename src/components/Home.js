import React, { useEffect } from 'react'
import '../css/index.css'
import Testimonials from './Review'
import { useNavigate } from 'react-router-dom'
import ScrollArrow from './ScrollArrow'

const Home = () => {
  const navigate = useNavigate()
  const navigateToSpot = (spots) => {
    navigate(`/placetovisit/${spots}`)
  }
  const navigateToDist = (place) => {
    navigate(`/destination/${place}`)
  }
  useEffect(() => {
    document.title = "TravelEasy | Guide for Travel to Make Easy With Us";
  }, []);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <section id="second">
        <div className="second-sec d-flex align-items-center">
          <div className="content-wrapper">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="tamil-text">
                    பாதை முடிந்த பிறகும்,<br />
                    இந்த உலகில்,<br />
                    பயணம் முடிவதில்லையே
                  </p>
                </div>
                <div className="flip-card-back">
                  <p className="english-text">
                    Jobs fill your pockets,<br /> but adventures fill your soul
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img loading="lazy"
            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/New.webp"
            className="bg-img"
            alt="HomePageImg"
          />
        </div>
      </section>
      <div className="wave-container">
        <div className="wave1"></div>
        <div className="wave2"></div>
      </div>
      <section>
        <div className="container-fluid">
          <div className="row align-items-center">
            <h1 className="bold">Hotel & Resort</h1>
            <div className="col-md-6 col-xl-6">
              <img loading="lazy"
                src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/homepage/homerest.webp"
                alt="restaurantImg"
                className="restaurant"
              />
            </div>
            <div className="col-md-6 col-xl-6 tex">
              <p className="text-center">
                Find the city's top tourist destinations with ease. Allow us to assist
                you in selecting the ideal hotel for your stay and lead you to an
                experience that will never be forgotten. Begin your adventure with us
                right now.
              </p>
              <p className="hotel-expert">
                Our expert recommendations will guide you to iconic landmarks, hidden
                gems, and cultural hotspots that truly capture the essence of the
                city. From breathtaking views and vibrant local markets to historic
                sites brimming with stories, we ensure you experience the best the
                city has to offer. Equally important is finding the perfect
                accommodation, and we are here to connect you with the finest hotels
                tailored to your preferences and budget. Relax in style, enjoy
                exceptional hospitality, and recharge for another day of exploration.
                Whether you're marveling at stunning sights, immersing yourself in
                local culture, or savoring the comforts of your stay, every moment of
                your journey will be seamless and unforgettable. Start your adventure
                with us today, and let the magic of travel unfold. Your next great
                story begins here!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid load">
          <div className="row d-flex justify-content-end">
            <div className="col-xl-6 col-md-6">
              <h1 className="disc">
                Discover the best Holidays<br /> and unforgettable Travel<br /> Experiences
              </h1>
              <p className="quote">
                "In the grace of the world, I find freedom; wherever I<br /> roam, nature feels like home, and in its quiet<br /> moments, my soul finds peace"
              </p>
            </div>
            <div className="col-xl-3 col-md-3" id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/Full+District/Dindugul/Hills/kodaikaanal.webp"
                    alt="mountainImg"
                    id="disimg"
                    onClick={() => navigateToSpot("hills")}
                  />
                  <h3 className="mirror">HILLS</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/Full+District/Dharmapuri/waterfalls/hogenakkal.webp"
                    alt="dharma"
                    id="disimg"
                    onClick={() => navigateToSpot("waterfall")}
                  />
                  <h3 className="mirror">WATERFALLS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row load">
            <div className="col-xl-3 col-md-3" id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/beach.webp"
                    alt="tropical"
                    id="disimgs"
                    onClick={() => navigateToSpot("beach")}
                  />
                  <h3 className="mirror">BEACHES</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/hiking.webp"
                    alt="backwackerImg"
                    id="disimgs"
                    onClick={() => navigateToSpot("hiking")}
                  />
                  <h3 className="mirror">HIKING</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/Full+District/ariyalur/famous+places/gangaikonda_cholapuram.webp"
                    alt="templeImg"
                    id="disimgs"
                    onClick={() => navigateToSpot("temple")}
                  />
                  <h3 className="mirror">TEMPLES</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/Full+District/Thiruchirapalli/Temples/2.+rockfort.webp"
                    alt="fortImg"
                    id="disimgs"
                    onClick={() => navigateToSpot("fort")}
                  />
                  <h3 className="mirror">FORTS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row mt-5 align-items-center">
            <div className="col-md-6 col-xl-6" style={{ position: 'relative' }}>
              <img loading="lazy"
                src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/homepage/travelbag.webp"
                alt="Travelbag"
                width="70%"
                className="travell"
              />
              <div className="trollyimg slide-left">
                <img loading="lazy"
                  src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/homepage/trolly.webp"
                  alt="trollyimg"
                  id="trolly"
                />
                <img loading="lazy"
                  src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/homepage/enjoy.webp"
                  alt="enjoyimg"
                  id="enjoy"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-6">
              <p className="travelh1">Great opportunity for adventure & travels</p>
              <p className="adventpara">
                We are committed to creating meaningful partnerships and opportunities
                that benefit both travelers and businesses alike. For local
                establishments, we offer an excellent platform to showcase your
                restaurants, hotels, or attractions to a global audience, helping you
                expand your reach and connect with potential customers worldwide. By
                leveraging our services, you can boost your visibility and attract a
                larger clientele, ensuring your business stands out in a competitive
                market. Whether you're aiming to enhance your brand's presence or
                capture the attention of international tourists, our platform provides
                the tools and exposure needed to achieve your goals effectively and
                efficiently.
              </p>
              <ul>
                <li className="adventlist">Take advantage of exclusive hotel deals;</li>
                <li className="adventlist">
                  As we simplify, concentrate on having fun on your journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="destination">
        <div className="container-fluid" id="homeDestination">
          <div className="row desti-row1">
            <div className="col-xl-6 col-md-6" style={{ paddingTop: '24px', paddingLeft: '8%' }}>
              <p className="chooseplace">CHOOSE YOUR PLACE</p>
              <p className="desti-row1h2">Popular</p>
              <br />
              <p className="desti-row1h2">Destinations</p>
              <p className="quote2">
                "Start your adventure with us today, and let the magic of travel unfold before you. Your next great story begins here!"
              </p>
            </div>
            <div className="col-xl-3 col-md-3" style={{ position: 'relative', marginBottom: '3%' }} id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/covai.png"
                    className="desti-image"
                    alt="erodeimg"
                    onClick={() => navigateToDist("coimbatore")}
                  />
                  <h3 className="mirror">COIMBATORE</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" style={{ position: 'relative', marginBottom: '3%' }} id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    className="desti-image"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/1-marina-beach-city-hero.jpeg"
                    alt="marinaimg"
                    onClick={() => navigateToDist("chennai")}
                  />
                  <h3 className="mirror">CHENNAI</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row load desti-row2 align-items-center" style={{ display: 'flex', placeItems: 'center' }}>
            <div className="col-xl-3 col-md-3" style={{ position: 'relative' }} id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/kaniyakumari.png"
                    alt="kanya-img"
                    className="desti-images"
                    onClick={() => navigateToDist("kanniyakumari")}
                  />
                  <h3 className="mirror">KANYAKUMARI</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" style={{ position: 'relative' }} id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/1.+Brihadishvara.jpg"
                    alt="thanjavurimg"
                    className="desti-images"
                    onClick={() => navigateToDist("thanjavur")}
                  />
                  <h3 className="mirror">THANJAVUR</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" style={{ position: 'relative' }} id="scale4k">
              <div className="boxshadow">
                <div className="box">
                  <img loading="lazy"
                    className="desti-images"
                    src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/trichy.png"
                    alt="trichyimg"
                    onClick={() => navigateToDist("trichy")}
                  />
                  <h3 className="mirror">TRICHY</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-3" id="destipara">
              <p>Find All</p>
              <p>Destination</p>
              <button className="btn btn-info" id="findbtn"
                onClick={() => navigate(`/destination`)}
              >
                Find Now
              </button>
            </div>
          </div>
        </div>
      </section>


      <Testimonials />
      <ScrollArrow />


    </>
  )
}

export default Home