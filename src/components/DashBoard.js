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
import AdsBanner from '../components/AdsBanner';
import SecondHero from '../components/SecondHero';
import Footer from './Footer';

export default () => (
  <div className='dashboard'>
    <ModalMenu />
    <SearchBarBS />
    <SearchBarSS />
    <DashboardTab />
    <ShopAll />
    <HairTexture />
    <HairCare />
    <OurLocations />
    <ContactUs />
    <FirstHero />
    <AdsBanner />
    <SecondHero />
    <Footer />
  </div>
)
