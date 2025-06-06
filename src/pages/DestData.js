import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import packageData from "../json/packages.json"
import ThingsSlide from '../components/ThingSlide';
import ScrollArrow from '../components/ScrollArrow';
import { FaCircleArrowLeft } from "react-icons/fa6";
import DistrictPage from '../components/Meta';

const DestData = () => {
    const navigate = useNavigate();
    const { name } = useParams()
    const DistrictName = ["ariyalur", "chengalpattu", "chennai", "coimbatore", "cuddalore", "dharmapuri", "dindigal", "erode", "kallakurichi", "kanchipuram", "kanniyakumari", "karur", "krishnagiri", "madurai", "mayiladuthurai", "nagapattinam", "namakkal", "nilgiris", "perambalur", "pudukkottai", "ramanathapuram", "ranipet", "salem", "sivagangai", "tenkasi", "thanjavur", "theni", "thirunelveli", "thirupathur", "thiruppur", "thiruvallur", "thiruvannamalai", "thiruvarur", "trichy", "tuticorin", "vellore", "vilupuram", "virudhunagar", "pondicherry"]
    let index = DistrictName.findIndex(item => item === name);
    const data = packageData.category[index]
    const otherDistrict = packageData.districts;


    let sideImage = Object.values(data?.side_img[0])
    let hotelImage = Object.values(data?.hotel_img[0])

    const Carousel = (images) => {
        return (
            <div id="carouselExampleMain" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images?.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <img loading="lazy" src={imageUrl || ""} className="d-block w-100" alt={`Carousel${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const Data = (heading, paragraph) => {
        return (
            <div>
                <h3>{heading || ""}</h3><p>{paragraph || ""}</p>
            </div>
        )
    }
   

    useEffect(() => {
        window.scroll(0, 0)
    }, [name])
    return (
        <div>
            <DistrictPage />
            <div className='btn btn-primary' style={{ position: 'fixed', zIndex: 1000 }} onClick={() => {
                navigate(`/destination`);
                document.title = "-TravelEasy | Districts Spot | Guide for Travel to Make Easy";
            }}><FaCircleArrowLeft size={20} color='white' /></div>
            <section>
                <div className="container-fluid" id="DistPage">
                    <div className="row">
                        <div className="col-xl-8">
                            <img loading="lazy" id="main-image" src={data?.image} width="100%" alt="distImages" />
                        </div>
                        <div className="col-xl-4" id="colRow">
                            <div className="row">
                                <p id="districtPara1">{data.sideHead1}</p>
                                <div id="carouselExampleMain" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner" id="carousel-images">
                                        {Carousel(sideImage)}
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleMain"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden" >Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleMain"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <p id="districtPara2">{data.sideHead2}</p>
                                <div id="carouselExampleSide" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner" id="side-image">
                                        {Carousel(hotelImage)}
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleSide"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleSide"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid" id="content-section">
                {Data(data.districthead, data.districtheadpara)}
                {Data(data.subhead1, data.subpara1)}
                {Data(data.subhead2, data.subpara2)}
                {Data(data.subhead3, data.subpara3)}
                {Data(data.conclusion, data.conclusionpara)}
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-xl-6" id="content-howto">
                            <h2 id="how-to-reach-title">How to Reach</h2>
                            <p id="how-to-reach-description">{data.howtoreachpara}</p>
                        </div>
                        <div className="col-xl-6" id="content-howto">
                            <h2 id="time-to-visit-title">Best Time To Visit</h2>
                            <p id="time-to-visit-description">{data.timetovisitpara}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <h3 id="major-attarctionh3" className="mt-5">Major Attraction Places</h3>
                    <div className="row mt-4 d-flex justify-content-center" id="major-attraction-cards">
                        {data.majorattractionplace.map((attraction, index) => (
                            <div className="col-xl-4 col-md-4" key={index}>
                                <div
                                    className="card hover-card"
                                    onClick={() => { }}
                                >
                                    <img loading="lazy"
                                        src={attraction.ffg || "assets/images/default-placeholder.png"}
                                        alt={attraction.place_title}
                                        className="card-img-top"
                                        onClick={() => { navigate(`/destination/${name}/allPlaces`); document.title = `${name.charAt(0).toUpperCase() + name.slice(1)}-TravelEasy | Districts Spot | Guide for Travel to Make Easy`; }} />
                                    <p className="card-title-district always-visible">{attraction.place_title}</p>
                                    <div className="card-body hidden-content">
                                        <p className="card-text-district">{attraction.place_content}</p>
                                        <button className="read-more-btn">
                                            Read More{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.146 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.293 8H2.5a.5.5 0 0 1 0-1h9.793L10.146 4.854a.5.5 0 0 1 0-.708z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <button className="show-more-btn" onClick={() => navigate(`/destination/${name}/allPlaces`)}>
                Show More
            </button>

            <section>
                <div className="container-fluid" id="Other-district">
                    <h3>Other District</h3>
                    <div id="district-images">
                        <div className="row">
                            {data.district_name.map((distIndex) => {
                                return (
                                    <div key={otherDistrict[distIndex]?.name.trim().replaceAll(" ", "_").toLowerCase()} className="col-xl-3 col-md-3 mb-3" onClick={() => {
                                        navigate(`/destination/${otherDistrict[distIndex]?.name.trim().replaceAll(" ", "_").toLowerCase()}`)
                                    }}>
                                        <img loading="lazy" src={otherDistrict[distIndex]?.image} alt={otherDistrict[distIndex]?.name} className="img-fluid" />
                                        <p className="text-center mt-2">{otherDistrict[distIndex]?.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


            <ThingsSlide />
            <ScrollArrow />
        </div>
    )
}

export default DestData;
