import React, { lazy, Suspense }  from 'react';
import SearchBarSS from './SearchBarSS';
import DashboardTab from './DashboardTab';
import FirstHero from './FirstHero';
import AdsBanner from '../components/AdsBanner';
import SecondHero from '../components/SecondHero';
import AdsBannerOil from '../components/AdsBannerOil';

const ShopAll = lazy(() => import('./ShopAll'));
const ModalMenu = lazy(() => import('./ModalMenu'));
const SearchBarBS = lazy(() => import('./SearchBarBS'));
const HairTexture = lazy(() => import('./HairTexture'));
const HairCare = lazy(() => import('./HairCare'));
const OurLocations = lazy(() => import('./OurLocations'));
const ContactUs = lazy(() => import('./ContactUs'));
const Footer = lazy(() => import('./Footer'));

export default () => (
  <div className='dashboard'>
    <Suspense fallback={<p>Loading...</p>}>
      <ModalMenu />
      <SearchBarBS />
    </Suspense>
    <SearchBarSS />
    <DashboardTab />
    <Suspense fallback={<p>Loading...</p>}>
      <ShopAll />
      <HairTexture />
      <HairCare />
      <OurLocations />
      <ContactUs />
    </Suspense>
    <FirstHero />
    <AdsBanner />
    <SecondHero />
    <AdsBannerOil />
    <Suspense fallback={<p>Loading...</p>}>
      <Footer />
    </Suspense>
  </div>
)
