import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="navbar-layout">

        <Navbar.Brand href="/" className="brand-container">
          <div className="brand-content">
            <img
              src={logo}
              alt="LabLink logo"
              className="thermoLogo"
            />

            <div className="brand-text-wrapper">
              <span className="brand-text-main">LabLink</span>
              <span className="brand-text-secondary"> 360</span>
            </div>
          </div>
        </Navbar.Brand>

        <div className="navbar-right">
          <div className="search-box">
            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
            <span className="search-text">
              BioExcel Diagnostics Laboratory - Wuesthoff Name (89652)
            </span>
          </div>

          <FontAwesomeIcon icon={faWandMagicSparkles} className="nav-icon" />
          
          <div className="notification-wrapper">
            <FontAwesomeIcon icon={faBell} className="nav-icon" />
            <span className="notification-badge">8</span>
          </div>

          <FontAwesomeIcon icon={faCircleQuestion} className="nav-icon" />

          <img
            src="https://i.pravatar.cc/32"
            alt="User avatar"
            className="avatar"
          />
        </div>

      </Container>
    </Navbar>
  );
}

export default NavBar;
