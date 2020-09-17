import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import BottomMenu from '../../components/BottomMenu';
import { getMealsByName, getMealsCategories, getMealsByCategory } from '../../service/fetchAPI';
import { setDataAction, getCategoryAction } from '../../actions';
import Card from '../../components/Card';
import RecipesShowcase from '../../components/RecipesShowcase';

/** Styled Component */
import { Recipes, SectionHeader, CategoriesButton, Categories, MealsContainer } from './StyledComponets';
import { SectionTitle, SmallButton } from '../../Assets/Style';

const handleCategory = (categoryName, getData, setSelectedCategory, selectedCategory) => {
  // console.log(categoryName, getData);
  if (selectedCategory !== categoryName && categoryName !== 'All') {
    setSelectedCategory(categoryName);
    return getMealsByCategory(categoryName).then((Meals) => getData(Meals.meals));
  }
  if (categoryName === 'All' || selectedCategory === categoryName) {
    setSelectedCategory('All');
    return getMealsByName('').then((Meals) => getData(Meals.meals));
  }
  return false;
};

const mealsRecipe = (data) =>
  data.slice(0, 12).map((recipe, index) => <Card type="meal" data={recipe} index={index} />);

const mealsCategories = (categories, getData, setSelectedCategory, selectedCategory) => (
  <div>
    <SmallButton
      type="button"
      data-testid="All-category-filter"
      selected={selectedCategory === 'All'}
      onClick={() => handleCategory('All', getData, setSelectedCategory, selectedCategory)}
    >
      All
    </SmallButton>
    {categories.slice(0, 5).map(({ strCategory: categoryName }) => (
      <SmallButton
        type="button"
        key={`${categoryName} melas`}
        data-testid={`${categoryName}-category-filter`}
        selected={selectedCategory === categoryName}
        onClick={() => handleCategory(categoryName, getData, setSelectedCategory, selectedCategory)}
      >
        {categoryName}
      </SmallButton>
    ))}
  </div>
);

const Meals = ({ getData, data, getCategories, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoriesState, setCategoriesState] = useState(false);

  useEffect(() => {
    if (!data.length) getMealsByName('').then((recipes) => getData(recipes.meals));
  }, [getData]);

  useEffect(() => {
    getMealsCategories().then((recipesCategories) => getCategories(recipesCategories.meals));
  }, [getCategories]);

  return data.length === 1 && selectedCategory !== 'Goat' && selectedCategory !== 'All' ? (
    <Redirect to={`/comidas/${data[0].idMeal}`} />
  ) : (
    <MealsContainer>
      <Header />
      <SectionTitle>Destaques</SectionTitle>
      <RecipesShowcase type="meal" data={data} />
      <SectionHeader>
        <SectionTitle>Receitas</SectionTitle>
        <CategoriesButton onClick={() => setCategoriesState(!categoriesState)}>
          Categorias
        </CategoriesButton>
      </SectionHeader>
      <Categories visible={categoriesState}>
        {mealsCategories(categories, getData, setSelectedCategory, selectedCategory)}
      </Categories>
      <Recipes>{mealsRecipe(data)}</Recipes>
      <BottomMenu />
    </MealsContainer>
  );
};

Meals.propTypes = {
  getData: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.dataReducers.data,
  categories: state.dataReducers.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
  getCategories: (category) => dispatch(getCategoryAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
