import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Card, Carroussel, CardsContainer } from './StyledComponents';

const RecipesRecommendations = ({ recommendations, recommendationsFetching, appLocation }) => {
  const [actualPosition, setactualPosition] = useState({ position: 0, card: 0 });
  const [recommendationsState, setrecommendationsState] = useState([]);

  useEffect(() => {
    setrecommendationsState(() => {
      return recommendations.reduce((result, recommendation) => {}, []);
    });
  }, []);

  const handlePosition = () => {
    setactualPosition((prevState) => ({
      position: prevState.position + 50,
      card: prevState.card + 1,
    }));
  };

  if (recommendationsFetching) return null;

  return (
    <div>
      <h2>Recomendadas</h2>
      <Carroussel>
        <CardsContainer position={`-${actualPosition}%`}>
          {recommendations.map((recipe, index) => (
            <Card data-testid={`${index}-recomendation-card`}>
              <span data-testid={`${index}-recomendation-title`}>
                {appLocation === 'comidas' ? recipe.strDrink : recipe.strMeal}
              </span>
            </Card>
          ))}
        </CardsContainer>
      </Carroussel>
      <button type="button" onClick={() => handlePosition()}>
        Proxima
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendationsReducer.recommendations,
  recommendationsFetching: state.recommendationsReducer.isFetching,
  appLocation: state.appReducers.location,
});

export default connect(mapStateToProps)(RecipesRecommendations);
