import React from 'react'
import Navbar from '../components/Navbar';
import Here from '../components/Here'
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Here/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default Home;
