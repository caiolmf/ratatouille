import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearchFoods from './HeaderSearch';
import './header.css';

const Header = ({ title }) => {
  const [displayInputShow, setdisplayInputShow] = useState(false);

  const showInputSearch = () => {
    setdisplayInputShow(!displayInputShow);
  };

  return (
    <div className="container">
      <div className="containerHeader">
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={profileIcon} alt="imageLogo" />
        </Link>
        <h1 className="header-title">{title}</h1>
        <input
          type="image"
          src={searchIcon}
          onClick={() => showInputSearch()}
          data-testid="search-top-btn"
          alt="imageLogo"
        />
      </div>
      {displayInputShow && <HeaderSearchFoods />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.appReducers.location,
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
