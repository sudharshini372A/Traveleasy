import React, { useRef, useState } from "react";
import "../css/index.css";
import logo from "../assets/images/logoTravelEasy.jpg"
import toggle from "../assets/images/toggle.jpg"
import { Link, useNavigate, useLocation } from "react-router-dom";
import packageData from '../json/packages.json'
import dataJson from '../json/data.json'

const Navbar = () => {
  const [suggestion, setSuggestion] = useState([])
  const [suggestion1, setSuggestion1] = useState([])
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0)

  const searchRef = useRef(null)
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname); 

  const showModal = () => {
    setModalVisible(true)
    setTimeout(() => {
      searchRef.current?.focus();
    }, 0);
  }
  const hideModal = () => setModalVisible(false);

  const [search, setSearch] = useState('')
  const PlaceToVisit = ['backwater', 'beach', 'fort', 'heritage', 'hiking', 'hills', 'museum', 'palace', 'temple', 'waterfall', 'wildlife']

  const allPlace = dataJson.dtdata;
  const flatArray = allPlace.flat()



  const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToPlace = (place) => {
    if (place === "") {
      return hideModal()
    }
    setSuggestion([])
    setSuggestion1([])
    setSearch("")

    hideModal()
    navigate(`/destination/${place?.trim().toLowerCase()}`)
  }
  const navigateToPlace1 = (place) => {
    if (place === "") {
      return hideModal()
    }
    setSuggestion([])
    setSuggestion1([])
    setSearch("")

    const containingObject = allPlace
      .flat()
      .find(obj => obj.title === place)

    const containingArrayIndex = allPlace.findIndex(arr =>
      arr.some(obj => obj === containingObject)
    );
    hideModal()
    return navigate(`/placetovisit/${PlaceToVisit[containingArrayIndex]}/${place?.replaceAll(" ", "_").toLowerCase()}`)

  }

  const handleSearch = (e) => {
    e.preventDefault()
    let query = e.target.value;
    setSearch(query)
    let result = packageData.districts.filter(data => data.name?.trim().toLowerCase().includes(query?.trim().toLowerCase()))
    let result1 = flatArray.filter(data => data.title?.trim().toLowerCase().includes(query?.trim().toLowerCase()))
    setSuggestion(result)
    setSuggestion1(result1)

  }

  const handleKeyDown = (e) => {
    const data = suggestion.concat(suggestion1);
    if (e.key === "ArrowDown") {

      // setSearch(data[activeIndex].name || data[activeIndex].title)

      setActiveIndex((prev) => (prev + 1) % data.length)
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
      // setSearch(data[activeIndex].name || data[activeIndex].title)
    } else if (e.key === "Enter") {


      if (data.length > 0) {
        hideModal()
        suggestion.find(it => it === data[activeIndex]) ? navigateToPlace(data[activeIndex].name) : navigateToPlace1(data[activeIndex].title)
      } else {
        setSearch("")
        hideModal()
      }
      setActiveIndex(0)
      setSuggestion([]);
      setSuggestion1([])
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar fixed-top" id="winNav" style={{ zIndex: 1000 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img loading="lazy" src={logo} alt="logoTravel" id="logoTrav" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img loading="lazy"
              src={toggle}
              className="navbar-toggler-icon"
              alt="ToggleIcon"
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly" id="nav4k">
              {[
                { href: "/", text: "Home", icon: "bi-house-door" },
                { href: "/hotels_resorts", text: "Hotel & Resort", icon: "bi-building" },
                { href: "/placetovisit", text: "Place to Visit", icon: "bi-map" },
                { href: "/tourPackage", text: "Tour Package", icon: "bi-suitcase" },
                { href: "/destination", text: "Destinations", icon: "bi-geo-alt" },
                { href: "/thingsdo", text: "Things To Do", icon: "bi-calendar-event" },
                { href: "/aboutus", text: "About Us", icon: "bi-info-circle" },
                { href: "/contactus", text: "Contact", icon: "bi-envelope" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active d-flex align-items-center"
                    onClick={scrollToTop}
                    to={item.href}
                  >
                    <i className={`bi ${item.icon} me-2 d-lg-none`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="d-flex" onClick={() => showModal()}>
              <button
                aria-label="Search"
                className="btn btn-primary"
                id="searchbtn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="rgb(95, 196, 209)"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar fixed-top" id="mobNav" style={{ zIndex: 1000 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img loading="lazy" src={logo} alt="logoTravel1" width="100px"
            height="60px" /></a>
          <div className="d-flex" id="ms-5">
            <button aria-label="Search" className="btn btn-primary" onClick={() => showModal()} id="searchbtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(95, 196, 209)" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{ border: 'none' }}>
            <img loading="lazy" src={toggle} className="navbar-toggler-icon" alt="TogIcon" />
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '70%', height: '450px', marginTop: '3%' }}>
            <div className="offcanvas-header">

              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>
            <div className="offcanvas-body" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li  className='nav-item'>
                    <a className="nav-link active" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg> Home</a>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className={`nav-item ${activeItem === "/about" ? "active-nav" : ""}`}
          onClick={() => setActiveItem("/about")}
         to="/hotels_resorts"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                        <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                      </svg> Hotel& Resort</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" to="/placetovisit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-signpost-2-fill" viewBox="0 0 16 16">
                      <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707" />
                    </svg> Place to visit</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" to="/tourPackage"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-tags-fill" viewBox="0 0 16 16">
                      <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                      <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z" />
                    </svg> Tour Package</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" to="/destination"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg> Destinations</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" to="/thingsdo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                    </svg> Things To Do</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" to="/aboutus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-globe2" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                    </svg> About Us</Link>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" to="/contactus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708" />
                    </svg> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
      </nav>
      {isModalVisible && <div style={{ position: 'fixed', top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: '#00000096', zIndex: 1000 }}
      >
        <div tabIndex={0}
          onKeyDown={handleKeyDown}>
          <div >
            <div className="position-absolute text-light " style={{ right: 50, zIndex: 1000 }} onClick={() => hideModal()}>
              <h2 className="btn btn-danger">x</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div
                className="w-50 w-lg-25"
                style={{
                  position: "absolute",
                  display: "inline-block"
                }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  id="searchInput"
                  ref={searchRef}
                  placeholder="Search"
                  onChange={handleSearch}
                  value={search}
                  aria-label="Search"
                  style={{ paddingRight: "40px" }}
                />
                <div onClick={() => {
                  const data = suggestion.concat(suggestion1);

                  if (search !== "" && data.length >= 1) {
                    suggestion.find(it => it === data[0]) ? navigateToPlace(data[0].name) : navigateToPlace1(data[0].title)

                  } else {
                    hideModal()
                  }
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="rgb(95, 196, 209)"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      cursor: "pointer",
                    }}
                    id="searchIcon"

                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>


                <ul
                  id="liveResults"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    position: "absolute",
                    background: "white",
                    width: "100%",
                    zIndex: 1000,
                  }}
                >
                  {
                    suggestion.concat(suggestion1).map((item, i) => {
                      return <li
                        key={i}
                        onClick={() => {

                          suggestion.find(it => it === item) ? navigateToPlace(item.name) : navigateToPlace1(item.title)
                        }}
                        style={{ padding: "8px", cursor: "pointer", backgroundColor: activeIndex === i ? "#f0f0f0" : "transparent" }}
                      >
                        {item.name || item.title}
                      </li>
                    })
                  }
                </ul>



              </div>


            </div>
          </div>
        </div>
      </div>}

    </>
  );
};

export default Navbar;
