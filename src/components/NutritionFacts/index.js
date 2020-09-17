import React, { useEffect } from 'react';
import { fetchNutrition } from '../../actions/nutritionActions';
import { connect } from 'react-redux';
import {
  Nutrition,
  NutritionFact,
  FactHeader,
  FactImage,
  FactTitle,
  FactSubTitle,
  FactHeaderText,
  Fact,
  Quantity,
  FactContainer,
  CloseBtn,
} from './StyledComponents';

const NutritionFacts = ({ query, stateChanger, isFetching, nutritionFacts, getNutritionFacts }) => {
  useEffect(() => {
    getNutritionFacts(query);
  }, []);
  let food = {};

  if (!isFetching) {
    food = nutritionFacts.foods[0];
  }

  return (
    <Nutrition>
      {isFetching ? (
        <p>Carregando fatos nutricionais</p>
      ) : (
        <NutritionFact>
          <FactHeader>
            {console.log('teste ok')}
            <FactImage src={food.photo.thumb} />
            <FactHeaderText>
              <FactTitle>{`${food.serving_qty} ${food.food_name}(s)`}</FactTitle>
              <FactSubTitle>{food['serving_weight_grams']} gramas</FactSubTitle>
            </FactHeaderText>
          </FactHeader>
          <FactContainer>
            <Fact>Calorias</Fact>
            <Quantity>{food.nf_calories}</Quantity>
          </FactContainer>
          <FactContainer>
            <Fact>Gordura Total</Fact>
            <Quantity>{food.nf_total_fat}</Quantity>
          </FactContainer>
          <FactContainer>
            <Fact>Gordura Str.</Fact>
            <Quantity>{food.nf_saturated_fat}</Quantity>
          </FactContainer>
          <FactContainer>
            <Fact>Carboidratos</Fact>
            <Quantity>{food.nf_total_carbohydrate}</Quantity>
          </FactContainer>
          <FactContainer>
            <Fact>Proteinas</Fact>
            <Quantity>{food.nf_protein}</Quantity>
          </FactContainer>
          <FactContainer>
            <Fact>Sodio</Fact>
            <Quantity>{food.nf_sodium}</Quantity>
          </FactContainer>
          <CloseBtn onClick={() => stateChanger('none')}>Fechar</CloseBtn>
        </NutritionFact>
      )}
    </Nutrition>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.nutritionReducer.isFetching,
  nutritionFacts: state.nutritionReducer.nutrition,
});

const mapDispatchToProps = (dispatch) => ({
  getNutritionFacts: (query) => dispatch(fetchNutrition(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NutritionFacts);
