import React, { Component, useState } from 'react';
import './Tracking.css';
import LandingText from '../LandingText/LandingText.js';
import LandingPhoto from '../LandingPhoto/LandingPhoto';
import ReactMapGl, {Marker} from 'react-map-gl';

// import Navbar from './Components/Navbar/Navbar';

    // support rendering markers with simple data
    
    // simple component usage
function getPhotonData(){

}

export default function Tracking() {
       
   const [viewport, setViewport] = useState({
      latitude: 45.4211,
      longitude: -75.6903,
      width: "100vw",
      height: "100vh",
      zoom: 10
   });

    return(
            <main>
            <section>
            <div class='row'>
    <div class='double-column'>
      <div class='map-column'>
      <ReactMapGl 
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoicm9oYW5wYXJpa2giLCJhIjoiY2toN3dxaDgwMGN6bDJxbzQ2Mm8xcGY5eCJ9.U_uG-acBkynQ1tk7lfSIJw"
        onViewportChange={viewport => { setViewport(viewport);}}
        mapStyle="mapbox://styles/rohanparikh/ckh7x592a0p3b1anw6s7t6bky"
      > 
      {/* {photon.map(photon => (
        <Marker key={photon.properties.id} latitude></Marker>
      ))} */}
      </ReactMapGl>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        Some Text in Column Two
      </div>
    </div>
  </div>
            </section>
            
            </main>
        );
}
