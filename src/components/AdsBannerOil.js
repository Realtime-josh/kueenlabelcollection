import React from 'react';
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';

export default () => (
  <div className='ads-banner-div2'>
    <div className='ads-banner-header'>
      <p className='ads-banner-text'>HAIR CARE PRODUCTS</p>
    </div>
    
    <div className='ads-banner-images-div'>
      <div className='ads-banner-image-item'>
        <img className='ads-banner-imagery img-oil' src={Img1} />
        <p className='add-banner-list-text'>ULTRA HYDRATING SHAMPOO</p>
        <p>$ 14.99</p>
      </div>
      <div className='ads-banner-image-item'>
        <img className='ads-banner-imagery img-oil' src={Img2} />
        <p className='add-banner-list-text'>JOJOBA OIL INFUSED CONDITIONER</p>
        <p>$ 16.99</p>
      </div>
      <div className='ads-banner-image-item'>
        <img className='ads-banner-imagery img-oil' src={Img3} />
        <p className='add-banner-list-text'>MOROCCAN ARGAN OIL</p>
        <p>$10.99</p>
      </div>
    </div>
  </div>
)
