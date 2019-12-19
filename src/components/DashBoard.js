import React, { lazy, Suspense }  from 'react';
import SearchBarBS from './SearchBarBS';
import SearchBarSS from './SearchBarSS';
import DashboardTab from './DashboardTab';
import FirstHero from './FirstHero';
import Footer from './Footer';

export default () => (
  
  <div className='dashboard'>
    <SearchBarBS />
    <SearchBarSS />
    <DashboardTab />
    <FirstHero />
    <Footer />
  </div>
)
