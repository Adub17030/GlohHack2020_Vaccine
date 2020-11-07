import React, { Component } from 'react';
import './App.css';
import LandingText from './Components/LandingText/LandingText.js';
import LandingPhoto from './Components/LandingPhoto/LandingPhoto';
import Home from './Components/Home/Home.js';
import Tracking from './Components/Tracking/Tracking.js';
// import Navbar from './Components/Navbar/Navbar';
import { ReactNavbar } from "react-responsive-animate-navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
      return (      
         <Router>
          <div>
          <ReactNavbar
            color="#191919"
            logo=""
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
              <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/tracking" component={Tracking}/>
               {/* <Route path="/contact" component={Contact}/> */}
              <Route component={Error}/>
             </Switch>
          </div> 
        </Router>
      );
    }
  }
   
  export default App;
