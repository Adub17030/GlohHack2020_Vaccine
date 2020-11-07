import React from 'react';
import './LandingText.css'; 
import wave from '../../wave (1).svg';
import scientists from '../../scientifics.webp';

const LandingText = () => {
    return (
        
        <section>
        <img src={wave} alt='Wave' id='wave' />
         <h1>V-TRACK <br/> VACCINE <span>VICTORY</span> </h1>
         <hr/>
         <p>A global health solution for vaccine tracking, distribution, & feedback in one central application. </p>
         <div className='bottom'>
             {/* <p>If you are a representative of an organization involved with COVID-19 vaccine distribution, contact us here or submit a registration form.</p> */}
             <div className='buttons'>
                <div className='btn'>
                    <button>Contact Us</button>
                    {/* <p>Yes</p> */}
                </div>
                <div className='btn'>
                    <button>Sign-In</button>
                    {/* <p>Yes</p> */}
                </div>
             </div>
         </div>
        </section>
            
       
    );
}



export default LandingText; 