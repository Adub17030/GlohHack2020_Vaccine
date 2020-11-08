import React, { Component, useState, useEffect } from 'react';
import './Tracking.css';
import LandingText from '../LandingText/LandingText.js';
import LandingPhoto from '../LandingPhoto/LandingPhoto';
import ReactMapGl, {Marker, Popup} from 'react-map-gl';
import * as p from "./testData.json"
// import Navbar from './Components/Navbar/Navbar';
import Syringe from '../../syringe.png';
    // support rendering markers with simple data
    


export default function Tracking() {
       
   const [viewport, setViewport] = useState({
      latitude: 45.4211,
      longitude: -75.6903,
      width: "100vw",
      height: "100vh",
      zoom: 10
   });

    const [selectedShipment, setSelectedShipment] = useState(null)

    
    
    const [phantomData, setphantomData] = useState(null)
    function getPhotonData(param){
      // temp is double
      // tooHigh boolean - but int
      // coord 0 - double
      // coord 1 - double
      // id - int
      // provider - string
      // inventory - integer
      // status - string
      fetch(`https://vtack-api-glohack.herokuapp.com/photon/${param}`)
      .then(response => response.json())
      .then(data => {
        setphantomData(data)
        //console.log(data)
      }
        );

    }

    useEffect(() => {
      const listener = (e) => {
        if (e.key === "Escape") {
          setSelectedShipment(null);
        }

      };
      getPhotonData("status");
      console.log(phantomData)
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);

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
      

      {p.photon.map(photon => (
        <Marker key={1} latitude={photon.properties.location[0]} longitude={photon.properties.location[1]}>
          <button class="marker-btn" onClick={(e) => {
            e.preventDefault();
            setSelectedShipment(photon);

          }}>
            <img src={Syringe} alt="Syringe"/>
          </button>
        
        </Marker>
       ))}
       {selectedShipment ? (
         <Popup latitude={45.4211} longitude={-75.6903} 
         onClose={() => {
           setSelectedShipment(null);
         }}>

         <div className="popup-div">
           <h2>Good Morning</h2>
           <p>test</p>
           <p></p>
            <p></p>
         </div>
        </Popup>
       ) : null}

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
