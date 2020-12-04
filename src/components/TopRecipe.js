import React, { useEffect, useContext } from "react";
import * as style from "../style/topRecipeStyle";
import ViewRecipe from './ViewRecipe';
import {AppContext} from '../context/AppContext';
const TopRecipe = () => {

    const { topRecipe,setTopRecipe } = useContext(AppContext);

  useEffect(() => {
    const API =
      "https://api.spoonacular.com/recipes/complexSearch?number=4&apiKey=210c10f0f72a4f999d2c566a257ce155";
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Dont work :(");
      })
      .then((response) => response.json())
      .then((data) => {
        setTopRecipe(data.results);
      });
  }, [setTopRecipe]);

 
 const viewList = topRecipe.map(el=><ViewRecipe key={el.id} el={el}/>)

  return (
    <style.Container>
      <style.Header>Top Przepisy na naszej stronie</style.Header>
      <style.HeaderDescription>
        Szukasz pomysłu na ciekawy obiad, znajdzie go na pewno
      </style.HeaderDescription>
        <style.RecipeContainer>
            {viewList}
        </style.RecipeContainer>
    </style.Container>
  );
};

export default TopRecipe;
