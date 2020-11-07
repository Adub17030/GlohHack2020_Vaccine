import React, { Component } from 'react';
import './App.css';
import LandingText from './Components/LandingText/LandingText.js';
import LandingPhoto from './Components/LandingPhoto/LandingPhoto';
// import Navbar from './Components/Navbar/Navbar';
import { ReactNavbar } from "react-responsive-animate-navbar";


const App = () => {
        return(
            <div>
            <ReactNavbar
            color="#191919"
            logo="logo.svg"
            menu={[
              { name: "HOME", to: "/" },
              { name: "TRACKING", to: "/tracking" },
              { name: "FEEDBACK", to: "/feedback" },
              { name: "ABOUT US", to: "/aboutus" },
            ]}
            social={[
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/in",
                icon: ["fab", "linkedin-in"],
              },
              {
                name: "Facebook",
                url: "https://www.facebook.com",
                icon: ["fab", "facebook-f"],
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com",
                icon: ["fab", "instagram"],
              },
              { name: "Twitter", url: "", icon: ["fab", "twitter"] }
            ]}
          />
          <main>
                <LandingText></LandingText>
                <LandingPhoto></LandingPhoto>
          </main>
          </div>
            
        );
}

export default App;
