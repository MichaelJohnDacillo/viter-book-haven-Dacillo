import React from 'react'
import Faq from './faq/Faq'
import Hero from './hero/Hero'
import Featured from './featured/Featured';
import Categories from './categories/Categories';
import Testimonials from './testimonials/Testimonials';
import Newsletters from '../../partials/Newsletters';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Featured/>
      <Categories/>
      <Testimonials/>
      <Faq/>
      <Newsletters/>
      <Footer/>
    </>
  );
};

export default Home;