import React from 'react';
import BrazilianHair from '../images/BrazilianHair.png';
import MalaysianHair from '../images/MalaysianHair.png';
import KinkyHair from '../images/shopallpics.png';

export default () => (
  <div className='ads-banner-div'>
    <div className='ads-banner-header'>
      <p className='ads-banner-text'>KUEEN FEATURED FAVORITES</p>
    </div>
    
    <div className='ads-banner-images-div'>
      <div className='ads-banner-image-item'>
        <img className='ads-banner-imagery' src={BrazilianHair} />
        <p className='add-banner-list-text'>BRAZILIAN HAIR</p>
      </div>
      <div className='ads-banner-image-item'>
        <img className='ads-banner-imagery' src={KinkyHair} />
        <p className='add-banner-list-text'>NATURAL KINKY HAIR</p>
      </div>
      <div className='ads-banner-image-item'>
        <img className='ads-banner-imagery' src={MalaysianHair} />
        <p className='add-banner-list-text'>MALAYSIAN HAIR</p>
      </div>
    </div>
  </div>
)
