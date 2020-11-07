import React from 'react';
import './LandingPhoto.css'; 

import scientists from '../../scientifics.webp';
const LandingPhoto = () => {
    return (
        <section>
            {/* <div className='floater'> */}
            {/* <div className='icon-temp'> */}
            <img src={scientists} alt='Scientists' id='scientists' />
            
            {/* </div> */}
            {/* </div> */}
        </section>
    
    );
}



export default LandingPhoto; 