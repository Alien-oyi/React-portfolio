import React,{useEffect} from 'react';
import './Styles/Navbar.css'


function NavTabs({ currentPage, handlePageChange }) {
  useEffect(() => {
      document.title = currentPage;
    }, [currentPage]);
  return (
    <div className="NavBar">
    <span className="nav-logo">Jinmin Dai</span>
      <div className="nav-items">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange('Portfolio')}       
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
        <a
          href="#blog"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavTabs;

