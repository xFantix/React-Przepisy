import React, { useEffect, useState } from "react";
import * as style from "../style/recipeInformationStyle";
const RecipeInformation = (props) => {
  const { id } = props.match.params;

  const [recipeInformation, setRecipeInformation] = useState({
    loading: true,
    information: {},
  });

  useEffect(() => {
    const API = `https://api.spoonacular.com/recipes/${id}/information?apiKey=210c10f0f72a4f999d2c566a257ce155`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Dont work :(");
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipeInformation({
          information: { ...data },
          loading: false,
        });
      });
  }, []);

  return (
    <>
      {!recipeInformation.loading && (
        <style.Container>
          <style.Main>
            <style.ContainerInformation>
              <style.MainHeader>
                {recipeInformation.information.title}
              </style.MainHeader>
              <style.SmallHeader>
                {recipeInformation.information.dishTypes.map((el) => (
                  <p>{el}</p>
                ))}
              </style.SmallHeader>
              <style.IngredientsHeader>Ingredients</style.IngredientsHeader>
              <style.ListIngredients>
                {recipeInformation.information.extendedIngredients.map((el) => (
                  <li>{el.originalName}</li>
                ))}
              </style.ListIngredients>
            </style.ContainerInformation>
            <style.MealImage
              bgImage={recipeInformation.information.image}
            >
              <style.MainHeaderMobile>{recipeInformation.information.title}</style.MainHeaderMobile>
              <style.ListIngredientsMobile>
              {recipeInformation.information.extendedIngredients.map((el) => (
                  <li>{el.originalName}</li>
                ))}
              </style.ListIngredientsMobile>
              <style.InformationBar>
                  <style.InformationBarParagraph>{recipeInformation.information.readyInMinutes} minutes</style.InformationBarParagraph>
                  <style.InformationBarParagraph>{recipeInformation.information.servings} servings</style.InformationBarParagraph>
              </style.InformationBar>
            </style.MealImage>
          </style.Main>
          <style.RecipeListContainer>
            {recipeInformation.information.analyzedInstructions.map(el=>(el.steps.map(el=>(<li>{el.step}</li>))))}
          </style.RecipeListContainer>
        </style.Container>
      )}
    </>
  );
};

export default RecipeInformation;
