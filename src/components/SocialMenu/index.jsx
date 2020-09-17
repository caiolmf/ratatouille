import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import copyToClipboard from 'clipboard-copy';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import ShareIcon from '../../images/shareIcon.svg';
import FavoriteIcon from '../../images/blackHeartIcon.svg';
import NotFavoriteIcon from '../../images/whiteHeartIcon.svg';

/** Styled Components */
import { Social, SocialBtn, SocialBtnIcon } from './StyledComponets';
 
/**
 * Lottie Options
 * Favorite Anim - LottieFiles - User: Gaetan Gonzalez
 * Share Anim - LottieFiles - User: Gaetan Gonzalez
 */
import likeAnim from '../../Assets/Animations/heart-anim.json'

const likeAnimOptions = {
  loop: false,
  autoplay: false,
  animationData: likeAnim,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};


const setLocalStorageFood = (recipe, currentFavoriteRecipes) => {
  const objForFavorite = {
    id: recipe.idMeal,
    type: 'comida',
    area: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    // doneDate: recipe.dateModified,
    // tags: recipe.strTags,
  };
  const favoriteRecipes = [...currentFavoriteRecipes, objForFavorite];
  return localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};

const setLocalStorageDrink = (recipe, currentFavoriteRecipes) => {
  const objForFavorite = {
    id: recipe.idDrink,
    type: 'bebida',
    area: '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
    // doneDate: recipe.dateModified,
    // tags: recipe.strTags,
  };
  const favoriteRecipes = [...currentFavoriteRecipes, objForFavorite];
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};
const checkWindowHef = () => {
  const windowHref = window.location.href;
  if (windowHref.includes('in-progress')) {
    const newHref = windowHref.substr(0, windowHref.length - 12);
    document.getElementById('copyLink').innerHTML = 'Link copiado!';
    return copyToClipboard(newHref);
  }
  return null;
};

const SocialMenu = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const [likeAnimState, setlikeAnimState] = useState(true);

  const currentFavoriteRecipes = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];

  useEffect(() => {
    const current = localStorage.getItem('favoriteRecipes')
      ? JSON.parse(localStorage.getItem('favoriteRecipes')) : [];
    if (recipe.idMeal) {
      setFavorite(current.some((obj) => obj.id === recipe.idMeal));
    } else {
      setFavorite(current.some((obj) => obj.id === recipe.idDrink));
    }
  }, [recipe]);

  const handleShare = () => {
    copyToClipboard(window.location.href);
    document.getElementById('copyLink').innerHTML = 'Link copiado!';
    checkWindowHef();
  };

  const handleFavorite = () => {
    if (recipe.idMeal) {
      setLocalStorageFood(recipe, currentFavoriteRecipes);
    } else {
      setLocalStorageDrink(recipe, currentFavoriteRecipes);
    }
    setlikeAnimState(!likeAnimState);
    setFavorite(!favorite);
  };

  return (
    <Social>
      <SocialBtn
        type="button"
        data-testid="share-btn"
        onClick={() => handleShare()}
      >
        <SocialBtnIcon src={ShareIcon} alt="Share button"/>
      </SocialBtn>
      <SocialBtn
        data-testid="favorite-btn"
        onClick={() => handleFavorite()}
      >
        <Lottie options={likeAnimOptions} isStopped={likeAnimState} />
      </SocialBtn>
      <div id="copyLink" />
    </Social>
  );
};

SocialMenu.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.detailsReducer.recipe,
});

export default connect(mapStateToProps, null)(SocialMenu);
