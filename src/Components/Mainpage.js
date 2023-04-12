import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

export default function Mainpage() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        <title>Welcome | {currentPage} </title>
      </div>
      ;
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </>
  );
}