import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import details from './../json/morePlace.json';
import ScrollArrow from './ScrollArrow';

const Placetovisit = () => {
    const navigate = useNavigate();

    const PlaceToSpots = ['backwater', 'beach', 'fort', 'heritage', 'hiking', 'hills', 'museum', 'palace', 'temple', 'waterfall', 'wildlife']

    const navigateToSpots = (index) => {
        const spotData = details.places[index];
        navigate(`/placetovisit/${PlaceToSpots[index]}`, { state: { spotData } });
    };
    useEffect(() => {
        document.title = "Place to Visit - Explore places | TravelEasy Make Easy";
    }, []);
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section >
                <div id="placetovisit-bg" className="justify-content-center align-items-center d-flex">
                    <h1 className="text-center fw-bold px-3 w-75 text-light user-select-none above-text" > Your Gateway to Effortless, Thrilling, and Personalized Journeys</h1>
                </div>
            </section>

            <div className="wave-container">
                <div className="wave1"></div>
                <div className="wave2"></div>
            </div>
            <section>
                <div className="container-fluid" id="place-container">
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/backwater.webp" alt="backwater" className="district-img" onClick={() => navigateToSpots(0)} />
                        <p className="image-description">Backwater</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/beach.webp" alt="beach" className="district-img" onClick={() => navigateToSpots(1)} />
                        <p className="image-description">Beach</p>
                        <button className="btn btn-warning" id="district-spot">31 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/fort.webp" alt="fort" className="district-img" onClick={() => navigateToSpots(2)} />
                        <p className="image-description">Fort</p>
                        <button className="btn btn-warning" id="district-spot">13 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/heritage.webp" alt="heritage" className="district-img" onClick={() => navigateToSpots(3)} />
                        <p className="image-description">Heritage</p>
                        <button className="btn btn-warning" id="district-spot">14 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/hiking.webp" alt="hiking" className="district-img" onClick={() => navigateToSpots(4)} />
                        <p className="image-description">Hiking</p>
                        <button className="btn btn-warning" id="district-spot">28 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/hills.webp" alt="hills" className="district-img" onClick={() => navigateToSpots(5)} />
                        <p className="image-description">Hills</p>
                        <button className="btn btn-warning" id="district-spot">28 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/museum.webp" alt="museum" className="district-img" onClick={() => navigateToSpots(6)} />
                        <p className="image-description">Museum</p>
                        <button className="btn btn-warning" id="district-spot">16 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/palace.webp" alt="palace" className="district-img" onClick={() => navigateToSpots(7)} />
                        <p className="image-description">Palace</p>
                        <button className="btn btn-warning" id="district-spot">15 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/temple.webp" alt="temple" className="district-img" onClick={() => navigateToSpots(8)} />
                        <p className="image-description">Temple</p>
                        <button className="btn btn-warning" id="district-spot">51 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/waterfall.webp" alt="waterfall" className="district-img" onClick={() => navigateToSpots(9)} />
                        <p className="image-description">Waterfall</p>
                        <button className="btn btn-warning" id="district-spot">31 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/placetovisit/zoo.webp" alt="zoo" className="district-img" onClick={() => navigateToSpots(10)} />
                        <p className="image-description">Wildlife</p>
                        <button className="btn btn-warning" id="district-spot">24 Spots</button>
                    </div>


                </div>
            </section>
            <ScrollArrow />
        </>
    )
}

export default Placetovisit
