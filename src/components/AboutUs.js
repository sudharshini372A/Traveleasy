import React, { useEffect } from 'react'
import ScrollArrow from './ScrollArrow'

const AboutUs = () => {
    useEffect(() => {
        document.title = "About - Page | TravelEasy | Travel Guide";
    }, []);
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section id='aboutus'>
                <div className="container-fluid justify-content-center align-items-center d-flex " id='abtimg'>
                    <h1 className="text-center fw-bold px-3 w-75 text-light user-select-none above-text">In one location, discover stunning destinations, locate ideal hotels, and create unforgettable memories</h1>
                </div>
            </section>
            <div className="wave-container">
                <div className="wave1"></div>
                <div className="wave2"></div>
            </div>
            <section>
                <div className="container-fluid py-5">
                    <p className="abth4">WELCOME TO TRAVEL EASY</p>
                    <p className="aboutpara text-center">
                        Traveling is one of life’s greatest joys—a gateway to discovering new cultures, forming cherished memories, and experiencing the thrill of the unknown.
                        <br />
                        At Travel Easy, we firmly believe that the process of exploring the world should not only be seamless and stress-free but also an exciting and highly personalized adventure.
                        <br />
                        Whether you’re planning a weekend getaway, an exotic vacation, or a soul-searching journey across continents, our mission is to make every step of your travel experience as smooth and fulfilling as possible.
                    </p>
                </div>
            </section>
            <section>
                <div className="container-fluid" id="blurimg">
                    <div className="row p-3 mt-5">
                        <div className="col-md-8 col-xl-8">
                            <h5 className="headpara">
                                <b>Grafting Journeys Tailored to You</b>
                            </h5>
                            <ul>
                                <li className="h5para">
                                    Travel isn’t one-size-fits-all. Every traveler has unique dreams, tastes, and expectations. At Travel Easy, we understand that your travel aspirations are as unique as your fingerprint. That’s why we’ve developed a platform designed to empower you to craft a journey that resonates with your individuality. Whether you’re drawn to the hustle and bustle of vibrant cities, the tranquility of remote villages, or the awe-inspiring beauty of nature, we’ve got you covered.
                                </li>
                                <li className="h5para">
                                    Our diverse range of accommodation options ensures that you’ll always find a place to stay that feels just right for you. For those who crave luxury and indulgence, we offer opulent suites in some of the world’s most renowned hotels and resorts. Imagine waking up to panoramic views, enjoying top-notch amenities, and being pampered by world-class service. For travelers who prefer a cozy and intimate experience, our selection of charming homestays offers the perfect retreat. These accommodations provide the comfort of home with the added charm of local hospitality, making them ideal for immersing yourself in the culture and traditions of your destination.
                                </li>
                            </ul>
                            <h5 className="headpara">
                                <b>A Personalized Approach to Planning</b>
                            </h5>
                            <ul>
                                <li className="h5para">
                                    At Travel Easy, we know that the best trips are those that feel truly yours. That’s why we prioritize personalization at every stage of your journey. From the moment you begin planning to the day you return home, our platform is designed to cater to your unique preferences. Want to explore local cuisine? We’ll guide you to accommodations near the best eateries and food markets. Interested in outdoor adventures? We’ll connect you with lodging close to hiking trails, beaches, or national parks. Passionate about history and culture? We’ll help you find stays near museums, historical landmarks, and cultural hubs.
                                </li>
                                <li className="h5para">
                                    Our platform doesn’t just offer options—it offers opportunities to create a travel experience that feels tailor-made for you. With Travel Easy, you’re not just booking a trip; you’re curating a journey that reflects your passions, interests, and desires.
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-xl-4" style={{ padding: '3%' }}>
                            <p className="para1">Best Place & Spot</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <p className="para1">Best Hotel & Stay</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <p className="para1">Village Life</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '80%' }}
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <p className="para1">Hidden Spot</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '60%' }}
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <p className="para1">Art & Culture</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: '90%' }}
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="whychoose">
                    <p className="whychooseh1">Why Choose Travel Easy</p>
                    <p className='whychoosep'>
                        The world is vast and full of possibilities, and choosing the right travel partner can make all the difference.
                        <br />
                        Here’s why Travel Easy is the perfect choice for your next adventure.
                    </p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="choosebox">
                                <h5>User-Friendly Platform</h5>
                                <p>
                                    Our intuitive interface makes it easy to search, compare, and book accommodations that match your
                                    preferences and budget.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choosebox">
                                <h5>Wide Range of Options</h5>
                                <p>
                                    From luxurious suites to charming homestays, we offer a variety of accommodations to suit every
                                    traveller’s needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="choosebox">
                                <h5>Personalized Recommendation</h5>
                                <p>
                                    Our platform is designed to help you create a journey that reflects your unique interests and desires.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choosebox">
                                <h5>Trusted By Travelers</h5>
                                <p>
                                    With reviews and ratings from fellow travelers, you can book with confidence and peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="choosebox1">
                        <h5>Dedicated Support</h5>
                        <p>
                            Our customer service team is here to assist you every step of the way, ensuring that your travel experience
                            is as seamless as possible.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid" id="chooseend">
                    <div class="choosepara">
                        <h1>About Softnova</h1>
                        <p>At Softnova we are developing our own project & working on client project to help people explore new possibilities. <br />Our skilled team is dedicated to creating innovating websites & providing training to empower student in steping their futures.</p>
                    </div>
                </div>
            </section>
            <ScrollArrow />
        </>
    )
}

export default AboutUs