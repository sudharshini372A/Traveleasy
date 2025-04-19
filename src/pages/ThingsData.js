import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import packageData from '../json/thingstodo.json';
import ScrollArrow from '../components/ScrollArrow';
import { FaCircleArrowLeft } from "react-icons/fa6";

const ThingsData = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const ThingsVisit = ["adventure", "cuisine", "spiritual", "village", "festival", "artculture", "martialart"];
    
    const index = ThingsVisit.findIndex(item => item === name);
    const data = index !== -1 ? packageData.places[index] : []; // Ensure `data` is an array

    const metaTitle = data[0]?.name || "Things to Do";
    const metaDescription = data[0]?.description.replace(/<[^>]+>/g, '').trim() || "Explore exciting things to do.";
    const metaImage = data[0]?.image.includes("http") ? data[0]?.image : "https://traveleasy.co.in/default-image.jpg";
    const metaURL = `https://traveleasy.co.in/destination/${name}`;

    useEffect(() => {
        window.scroll(0, 0);

        document.title = `${name ? name.charAt(0).toUpperCase() + name.slice(1) : "Things to Do"} of Tamilnadu | Things To Do | TravelEasy`;

        const updateMetaTag = (metaName, content) => {
            const tag = document.querySelector(`meta[name="${metaName}"]`);
            if (tag) tag.setAttribute('content', content);
        };
        updateMetaTag("title", metaTitle);
        updateMetaTag("description", metaDescription);
        updateMetaTag("keywords", `${metaTitle}, ${name}, travel, places to visit, tourism`);
        updateMetaTag("og:title", metaTitle);
        updateMetaTag("og:description", metaDescription);
        updateMetaTag("og:url", metaURL);
    }, [name]);

    return (
        <>
            <div className='btn btn-primary' style={{ position: 'fixed', zIndex: 1000 }} 
                onClick={() => {
                    navigate(`/thingsdo`);
                    setTimeout(() => {
                        document.title = "Spots in Places - Explore Places | TravelEasy-Guide";
                    }, 200); 
                }}>
                <FaCircleArrowLeft />
            </div>
            <Helmet>
                <title>{name ? name.charAt(0).toUpperCase() + name.slice(1) : "Things to Do"} of Tamilnadu</title>
                <meta name="description" content={metaDescription} />
                <meta name="title" content={metaTitle} />
                <meta name="keywords" content={`${metaTitle}, ${name}, travel, places to visit, tourism`} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={metaURL} />
                <meta property="og:site_name" content="TravelEasy" />
                <link rel="canonical" href={metaURL} />
            </Helmet>
            
            {/* Page Content */}
            <div className="container" id="ThingsInsidePage">
                <div id="thingsInside">
                    {data.map((place, placeIndex) => (
                        <div key={placeIndex} className="projcard">
                            <div className="projcard projcard-blue">
                                <div className="projcard-innerbox">
                                    <img loading="lazy" className="projcard-img placeImage" src={place.image} alt={place.name} />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title" id="catHead">{place.name}</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description" id="catPara" dangerouslySetInnerHTML={{ __html: place.description }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow />
        </>
    );
}

export default ThingsData;
