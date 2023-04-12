import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

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
    <div>      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}