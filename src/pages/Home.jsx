import React from 'react'
import Header from '../components/Header'
import Feed from '@containers/Feed'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Feed />
      <Footer />
    </div>
  );
}

export default Home;
