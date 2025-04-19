import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import ThingsToDo from './components/ThingsToDo'
import Destination from './components/Destination'
import TourPackages from './components/TourPackages'
import PlaceToVisit from './components/PlaceToVisit'
import HotelResort from './components/HotelResort'
import ThingsData from './pages/ThingsData'
import DestData from './pages/DestData'
import DistrictData from './pages/DistrictData'
import DestAllPlaces from './pages/DestAllPlaces'
import Footer from './components/Footer'
import PlaceSpots from './pages/PlaceSpots'
import Spotdetailplaces from './pages/PlaceData'
// import { Atom } from 'react-loading-indicators'
import TravelLoading from './css/TravelLoading'
import DistrictPage from './components/Meta'

const App = () => {
  const [isLottieLoaded, setIsLottieLoaded] = useState(true);

  setTimeout(() => {
    setIsLottieLoaded(false)
  }, 4000)

  return (
    <>
      <div>
        {isLottieLoaded && <div style={{ position: 'fixed', backgroundColor: "rgb(141, 227, 248)", justifyContent: 'center', top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 10000, display: 'flex', alignItems: 'center' }}>
          <TravelLoading />

        </div>}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/thingsdo' element={<ThingsToDo />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/tourPackage' element={<TourPackages />} />
          <Route path='/placetovisit' element={<PlaceToVisit />} />
          <Route path='/hotels_resorts' element={<HotelResort />} />
          {/* DYnamic  */}
          <Route path='/thingsdo/:name' element={<ThingsData />} />
          <Route path='/destination/:name' element={<DestData />} />
          <Route path='/destination/:name/allPlaces' element={<DestAllPlaces />} />
          <Route path='/destination/:district/:name' element={<DistrictData />} />
          <Route path='/placetovisit/:spot' element={<PlaceSpots />} />
          <Route path='/placetovisit/:spot/:spotName' element={<Spotdetailplaces />} />
          <Route path="/destination/:district" component={DistrictPage} />

        </Routes>
      </div>


      <Footer />
    </>

  )
}

export default App