import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollArrow from "./ScrollArrow";

const Destination = () => {
    const navigate = useNavigate()
    const DistrictName = ["ariyalur", "chengalpattu", "chennai", "coimbatore", "cuddalore", "dharmapuri", "dindigal", "erode", "kallakurichi", "kanchipuram", "kanniyakumari", "karur", "krishnagiri", "madurai", "mayiladuthurai", "nagapattinam", "namakkal", "nilgiris", "perambalur", "pudukkottai", "ramanathapuram", "ranipet", "salem", "sivagangai", "tenkasi", "thanjavur", "theni", "thirunelveli", "thirupathur", "thiruppur", "thiruvallur", "thiruvannamalai", "thiruvarur", "trichy", "tuticorin", "vellore", "vilupuram", "virudhunagar", "pondicherry"]

    const navigateToThings = (index) => {
        navigate(`/destination/${DistrictName[index]}`)
    }

    useEffect(() => {
        document.title = "Destination - Explore Places | TravelEasy | Travel Guide";
    }, []);
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section>
                <div id="destination-bg" className="justify-content-center align-items-center d-flex">
                    <h1 className="text-center fw-bold px-3 w-75 text-light user-select-none above-text" >Join us to explore the world! Discover, share, and create unforgettable memories with our vibrant travel community</h1>

                </div>
            </section>

            <div className="wave-container">
                <div className="wave1"></div>
                <div className="wave2"></div>
            </div>
            <section>
                <div className="container-fluid " id="district-container">
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/ariyalur.webp" alt="ariyalur" className="district-img" onClick={() => navigateToThings(0)} />
                        <p className="image-description">Ariyalur</p>
                        <button className="btn btn-warning" id="district-spot">11 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/chengalpattu.webp" alt="chengalpattu" className="district-img" onClick={() => navigateToThings(1)} />
                        <p className="image-description">Chengalpattu</p>
                        <button className="btn btn-warning" id="district-spot">13 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/chennai.webp" alt="chennai" className="district-img" onClick={() => navigateToThings(2)} />
                        <p className="image-description">Chennai</p>
                        <button className="btn btn-warning" id="district-spot">30 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/covai.webp" alt="covai" className="district-img" onClick={() => navigateToThings(3)} />
                        <p className="image-description">Coimbatore</p>
                        <button className="btn btn-warning" id="district-spot">19 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/cuddalore.webp" alt="cuddalore" className="district-img" onClick={() => navigateToThings(4)} />
                        <p className="image-description">Cuddalore</p>
                        <button className="btn btn-warning" id="district-spot">13 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/dharmapuri.webp" alt="dharmapuri" className="district-img" onClick={() => navigateToThings(5)} />
                        <p className="image-description">Dharmapuri</p>
                        <button className="btn btn-warning" id="district-spot">11 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/dindigal.webp" alt="dindigal" className="district-img" onClick={() => navigateToThings(6)} />
                        <p className="image-description">Dindigal</p>
                        <button className="btn btn-warning" id="district-spot">21 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/erode.webp" alt="erode" className="district-img" onClick={() => navigateToThings(7)} />
                        <p className="image-description">Erode</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/kallakurichi.webp" alt="kallakurichi" className="district-img" onClick={() => navigateToThings(8)} />
                        <p className="image-description">Kallakurichi</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/kanchipuram_1.webp" alt="kanchipuram" className="district-img" onClick={() => navigateToThings(9)} />
                        <p className="image-description">Kanchipuram</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/kaniyakumari_1.webp" alt="kaniyakumari" className="district-img" onClick={() => navigateToThings(10)} />
                        <p className="image-description">Kanyakumari</p>
                        <button className="btn btn-warning" id="district-spot">20 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/karur_1.webp" alt="karur" className="district-img" onClick={() => navigateToThings(11)} />
                        <p className="image-description">Karur</p>
                        <button className="btn btn-warning" id="district-spot">6 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/krishnagiri_1.webp" alt="krishnagiri" className="district-img" onClick={() => navigateToThings(12)} />
                        <p className="image-description">Krishnagiri</p>
                        <button className="btn btn-warning" id="district-spot">7 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/madurai.webp" alt="madurai" className="district-img" onClick={() => navigateToThings(13)} />
                        <p className="image-description">Madurai</p>
                        <button className="btn btn-warning" id="district-spot">12 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/mayiladurai.webp" alt="mayiladurai" className="district-img" onClick={() => navigateToThings(14)} />
                        <p className="image-description">Mayiladuthurai</p>
                        <button className="btn btn-warning" id="district-spot">8 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/nagapattinam.webp" alt="nagapattinam" className="district-img" onClick={() => navigateToThings(15)} />
                        <p className="image-description">Nagapattinam</p>
                        <button className="btn btn-warning" id="district-spot">11 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/namakkal.webp" alt="namakkal" className="district-img" onClick={() => navigateToThings(16)} />
                        <p className="image-description">Namakkal</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/nilgiris.webp" alt="nilgiris" className="district-img" onClick={() => navigateToThings(17)} />
                        <p className="image-description">Nilgiris</p>
                        <button className="btn btn-warning" id="district-spot">19 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/prembalur.webp" alt="prembalur" className="district-img" onClick={() => navigateToThings(18)} />
                        <p className="image-description">Perambalur</p>
                        <button className="btn btn-warning" id="district-spot">4 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/pudukottai.webp" alt="pudukottai" className="district-img" onClick={() => navigateToThings(19)} />
                        <p className="image-description">Pudukkottai</p>
                        <button className="btn btn-warning" id="district-spot">11 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/ramanathapuram.webp" alt="ramanathapuram" className="district-img" onClick={() => navigateToThings(20)} />
                        <p className="image-description">Ramanathapuram</p>
                        <button className="btn btn-warning" id="district-spot">24 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/ranipet.webp" alt="ranipet" className="district-img" onClick={() => navigateToThings(21)} />
                        <p className="image-description">Ranipet</p>
                        <button className="btn btn-warning" id="district-spot">6 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/salem.webp" alt="salem" className="district-img" onClick={() => navigateToThings(22)} />
                        <p className="image-description">Salem</p>
                        <button className="btn btn-warning" id="district-spot">11 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/sivagangai.webp" alt="sivagangai" className="district-img" onClick={() => navigateToThings(23)} />
                        <p className="image-description">Sivagangai</p>
                        <button className="btn btn-warning" id="district-spot">6 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/tenkasi.webp" alt="tenkasi" className="district-img" onClick={() => navigateToThings(24)} />
                        <p className="image-description">Tenkasi</p>
                        <button className="btn btn-warning" id="district-spot">13 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thanjavur.webp" alt="thanjavur" className="district-img" onClick={() => navigateToThings(25)} />
                        <p className="image-description">Thanjavur</p>
                        <button className="btn btn-warning" id="district-spot">12 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/theni.webp" alt="theni" className="district-img" onClick={() => navigateToThings(26)} />
                        <p className="image-description">Theni</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thirunelveli.webp" alt="thirunelveli" className="district-img" onClick={() => navigateToThings(27)} />
                        <p className="image-description">Thirunelveli</p>
                        <button className="btn btn-warning" id="district-spot">22 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thirupathur.webp" alt="thirupathur" className="district-img" onClick={() => navigateToThings(28)} />
                        <p className="image-description">Thirupathur</p>
                        <button className="btn btn-warning" id="district-spot">7 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thirupur.webp" alt="thirupur" className="district-img" onClick={() => navigateToThings(29)} />
                        <p className="image-description">Thiruppur</p>
                        <button className="btn btn-warning" id="district-spot">4 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thiruvallur.webp" alt="thiruvallur" className="district-img" onClick={() => navigateToThings(30)} />
                        <p className="image-description">Thiruvallur</p>
                        <button className="btn btn-warning" id="district-spot">6 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thiruvanamalai.webp" alt="thiruvanamalai" className="district-img" onClick={() => navigateToThings(31)} />
                        <p className="image-description">Thiruvannamalai</p>
                        <button className="btn btn-warning" id="district-spot">8 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/thiruvarur.webp" alt="thiruvarur" className="district-img" onClick={() => navigateToThings(32)} />
                        <p className="image-description">Thiruvarur</p>
                        <button className="btn btn-warning" id="district-spot">8 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/trichy.webp" alt="trichy" className="district-img" onClick={() => navigateToThings(33)} />
                        <p className="image-description">Trichy</p>
                        <button className="btn btn-warning" id="district-spot">13 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/tuticorin.webp" alt="tuticorin" className="district-img" onClick={() => navigateToThings(34)} />
                        <p className="image-description">Tuticorin</p>
                        <button className="btn btn-warning" id="district-spot">9 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/vellore.webp" alt="vellore" className="district-img" onClick={() => navigateToThings(35)} />
                        <p className="image-description">Vellore</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/viluppuram.webp" alt="viluppuram" className="district-img" onClick={() => navigateToThings(36)} />
                        <p className="image-description">Vilupuram</p>
                        <button className="btn btn-warning" id="district-spot">10 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/viruthunagar.webp" alt="viruthunagar" className="district-img" onClick={() => navigateToThings(37)} />
                        <p className="image-description">Virudhunagar</p>
                        <button className="btn btn-warning" id="district-spot">11 Spots</button>
                    </div>
                    <div className="district-container">
                        <img loading="lazy" src="https://traveleasystorage.s3.eu-north-1.amazonaws.com/fulldistrictimage/pondi.webp" alt="pondi" className="district-img" onClick={() => navigateToThings(38)} />
                        <p className="image-description">Pondicherry</p>
                        <button className="btn btn-warning" id="district-spot">18 Spots</button>
                    </div>
                </div>
            </section>
            <ScrollArrow />
        </>
    )
}
export default Destination;