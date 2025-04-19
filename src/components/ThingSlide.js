
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const ThingsSlide = () => {
    const navigate = useNavigate();
    const [autoplay, setAutoplay] = useState(true);

    const Navigate = (name) => {
        return navigate(`/thingsdo/${name}`);
    };

    useEffect(() => {
        const autoplayTimeout = setTimeout(() => {
            setAutoplay(false);
        }, 9000);

        return () => clearTimeout(autoplayTimeout);
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <main
            className="mainslide"
            style={{
                width: "100vw",
                overflowX: "hidden", // Prevent horizontal scrollbar
            }}
            id="mainS"
        >
            <div className="container-fluid" style={{ padding: "20px" }}>
                <h2>Things To Do</h2>
                <Slider
                    {...settings}
                    className="owl-carousel zoom-effect-container"
                    style={{ gap: "20px" }} // Adjust gap between cards
                >
                    <div className="item image-card img" onClick={() => Navigate('adventure')}>
                        <img
                            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/adventure.webp"
                            alt="Village-Adventure"
                            className="imgall"
                            loading="lazy"
                        />
                        <div className="overlay">
                            <span className="placehead">Stunning Adventure</span>
                            <div>
                                <h2>Adventure</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                    <div className="item image-card img" onClick={() => Navigate('artculture')}>
                        <img
                            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/artculture.webp"
                            alt="Village-artculture"
                            className="imgall"
                            loading="lazy"
                        />
                        <div className="overlay">
                            <span className="placehead">Art of our Culture</span>
                            <div>
                                <h2>Art & Culture</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                    <div className="item image-card img" onClick={() => Navigate('cuisine')}>
                        <img
                            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/culture.webp"
                            alt="Village-cuisine"
                            className="imgall"
                            loading="lazy"
                        />
                        <div className="overlay">
                            <span className="placehead">Foodies World</span>
                            <div>
                                <h2>Food</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                    <div className="item image-card img" onClick={() => Navigate('spiritual')}>
                        <img
                            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/spritual.webp"
                            alt="Village-Spiritual"
                            className="imgall"
                            loading="lazy"
                        />
                        <div className="overlay">
                            <span className="placehead">Devotional Blessing</span>
                            <div>
                                <h2>Spiritual</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                    <div className="item image-card img" onClick={() => Navigate('martialart')}>
                        <img
                            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/vilaiyatu.webp"
                            alt="Village-Games"
                            className="imgall"
                            loading="lazy"
                        />
                        <div className="overlay">
                            <span className="placehead">90's Games</span>
                            <div>
                                <h2>Games</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                    <div className="item image-card img" onClick={() => Navigate('festival')}>
                        <img
                            src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/village+festival.webp"
                            alt="Village-Festival"
                            className="imgall"
                            loading="lazy"
                        />
                        <div className="overlay">
                            <span className="placehead">Sparkling Festival</span>
                            <div>
                                <h2>Festival</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                    <div className="item image-card img" onClick={() => Navigate('village')}>
                        <img src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/things/village.webp" alt="Village-Home" className="imgall"loading="lazy"/>
                        <div className="overlay">
                            <span className="placehead">Life of Village</span>
                            <div>
                                <h2>Village</h2>
                                <p>Interested Thought</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </main>
    );
};

export default ThingsSlide;
