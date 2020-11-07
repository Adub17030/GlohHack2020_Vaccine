import React, { Component } from 'react';
import './Home.css';
import LandingText from '../LandingText/LandingText.js';
import LandingPhoto from '../LandingPhoto/LandingPhoto';
// import Navbar from './Components/Navbar/Navbar';
import { ReactNavbar } from "react-responsive-animate-navbar";


const Home = () => {
        return(
            <div>
            
          <main>
                <LandingText></LandingText>
                <LandingPhoto></LandingPhoto>
          </main>
          </div>
            
        );
}

export default Home;