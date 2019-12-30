import React, { lazy, Suspense }  from 'react';
import ModalMenu from './ModalMenu';
import SearchBarBS from './SearchBarBS';
import SearchBarSS from './SearchBarSS';
import DashboardTab from './DashboardTab';
import FirstHero from './FirstHero';
import ShopAll from './ShopAll';
import HairTexture from './HairTexture';
import HairCare from '../components/HairCare';
import OurLocations from '../components/OurLocations';
import ContactUs from '../components/ContactUs';
import Footer from './Footer';

export default () => (
  <div className='dashboard'>
    <ModalMenu />
    <SearchBarBS />
    <SearchBarSS />
    <DashboardTab />
    <FirstHero />
    <ShopAll />
    <HairTexture />
    <HairCare />
    <OurLocations />
    <ContactUs />
    <Footer />
  </div>
)
