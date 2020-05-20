import React, { lazy, Suspense }  from 'react';
import DashboardTab from './DashboardTab';
import AboutPageBody from '../components/AboutPageBody';

const ShopAll = lazy(() => import('./ShopAll'));
const ModalMenu = lazy(() => import('./ModalMenu'));
const SearchBarBS = lazy(() => import('./SearchBarBS'));
const SearchBarSS = lazy(() => import('./SearchBarSS'));
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
      <SearchBarSS />
    </Suspense>
    <DashboardTab />
    <Suspense fallback={<p>Loading...</p>}>
    <ShopAll />
      <HairTexture />
      <HairCare />
      <OurLocations />
      <ContactUs />
    </Suspense>
    <AboutPageBody />
    <Suspense fallback={<p>Loading...</p>}>
      <Footer />
    </Suspense>
  </div>
)
