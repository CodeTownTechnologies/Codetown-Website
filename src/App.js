import React from 'react'
import "./app.scss"
import Home from "../src/component/Home/Home"
import "swiper/css/bundle";
import Navbar from './component/navbar/Navbar';
import AboutUs from './component/fullAboutPage/aboutus/AboutUs';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
// import { Route, Switch} from "react-router-dom";
import {
  BrowserRouter as Router,  
  Route,
  Link, Routes
} from "react-router-dom";
const App = () => {
  return (<>

      <div className="app">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    

   

      {/* <div>
        <Navbar />
      </div>
      <div className='section'>
        <Home />
      </div> */}
    </div>

  </>

  )
}

export default App