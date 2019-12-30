import React, { lazy, Suspense} from 'react';
import SearchBarBS from './SearchBarBS';
import SearchBarSS from './SearchBarSS';
import DashboardTab from './DashboardTab';
import ShopAll from './ShopAll';
import HairTexture from './HairTexture';
import HairCare from '../components/HairCare';
import OurLocations from '../components/OurLocations';
import ContactUs from '../components/ContactUs';
import Footer from './Footer';
import ModalMenu from './ModalMenu'

// const ContactBanner = lazy(() => import('./ContactBanner'));
const ContactPageBody = lazy(() => import('./ContactPageBody'));

export default (props) => (
  <div className='dashboard'>
    <ModalMenu />
    <SearchBarBS />
    <SearchBarSS />
    <DashboardTab />
    <Suspense fallback={<div>Loading...</div>}>
      {/* <ContactBanner /> */}
      <ContactPageBody />
    </Suspense>
    <ShopAll />
    <HairTexture />
    <HairCare />
    <OurLocations />
    <ContactUs />
    <Footer />
  </div>
)
