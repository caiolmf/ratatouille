/**
 *
 * BottomMenu
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAppLocation } from '../../actions/appActions';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';
import MealIcon from '../../images/mealIcon.svg';

/**
 *
 * In use styled coponents
 *
 */
import { Menu, MenuItem, MenuIcon } from './StyledComponents';

const BottomMenu = ({ changeAppLocation, appLocation }) => {
  const history = useHistory();

  const handleLocationChange = (location) => {
    changeAppLocation(location);
    history.push(`/${location}`);
  };

  return (
    <Menu data-testid="footer">
      <MenuItem
        data-testid="drinks-bottom-btn"
        isSelected={appLocation === 'bebidas' && true}
        onClick={() => handleLocationChange('bebidas')}
      >
        <MenuIcon src={DrinkIcon} />
        <span>Bebidas</span>
      </MenuItem>
      <MenuItem
        data-testid="explore-bottom-btn"
        isSelected={appLocation === 'explorar' && true}
        onClick={() => handleLocationChange('explorar')}
      >
        <MenuIcon src={ExploreIcon} />
        <span>Explorar</span>
      </MenuItem>
      <MenuItem
        data-testid="food-bottom-btn"
        isSelected={appLocation === 'comidas' && true}
        onClick={() => handleLocationChange('comidas')}
      >
        <MenuIcon src={MealIcon} />
        <span>Comidas</span>
      </MenuItem>
    </Menu>
  );
};

const mapStateToProps = (state) => ({
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  changeAppLocation: (location) => dispatch(setAppLocation(location)),
});

BottomMenu.propTypes = {
  appLocation: PropTypes.string.isRequired,
  changeAppLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);
