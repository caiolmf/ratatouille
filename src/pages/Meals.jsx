import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getMealsByName, getMealsCategories, getMealsByCategory } from '../service/fetchAPI';
import { setDataAction, getCategoryAction } from '../actions';
import { useState } from 'react';

const handleCategory = (categoryName, getData, setSelectedCategory, selectedCategory) => {
  // console.log(categoryName, getData);
  if (selectedCategory !== categoryName && categoryName !== 'All') {
    setSelectedCategory(categoryName);
    return getMealsByCategory(categoryName).then((Meals) => getData(Meals.meals));
  }
  if (categoryName === 'All' || selectedCategory === categoryName) {
    setSelectedCategory(categoryName);
    return getMealsByName('').then((Meals) => getData(Meals.meals));
  }
};

const Meals = ({ getData, data, getCategories, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    getMealsByName('').then((Meals) => getData(Meals.meals));
  }, [getData]);
  useEffect(() => {
    getMealsCategories().then((categories) => getCategories(categories.meals));
  }, [getCategories]);

  const mealsRecipe = data.slice(0, 12).map((recipe, index) => (
    <Link to={`/comidas/${data[index].idMeal}`} key={recipe.idMeal}>
      <div key={recipe.idMeal} data-testid={`${index}-recipe-card`}>
        <img src={recipe.strMealThumb} alt="foto receita" data-testid={`${index}-card-img`} />
        <span data-testid={`${index}-card-name`}>{recipe.strMeal}</span>
      </div>
    </Link>
  ));
  const mealsCategories = categories.slice(0, 5).map(({ strCategory: categoryName }, index) => (
    <button type="button" key={categoryName} data-testid={`${categoryName}-category-filter`} onClick={() => handleCategory(categoryName, getData, setSelectedCategory, selectedCategory)}>{categoryName}</button>
  ));
  return (data.length === 1 && selectedCategory !== 'Goat') ? <Redirect to={`/comidas/${data[0].idMeal}`} /> :
    (
      <div>
        <Header />
        <div>
          <button type="button" data-testid="All-category-filter" onClick={() => handleCategory('All', getData, setSelectedCategory, selectedCategory)}>All</button>
          {mealsCategories}
        </div>
        {mealsRecipe}
        <BottomMenu />
      </div>
    );
}

const mapStateToProps = (state) => ({
  data: state.dataReducers.data,
  categories: state.dataReducers.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
  getCategories: (category) => dispatch(getCategoryAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);