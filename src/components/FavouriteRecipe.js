import React, { useContext } from "react";
import * as style from "../style/FavouriteRecipeStyle";
import { AppContext } from "../context/AppContext";
import ViewRecipe from "./ViewRecipe";
const FavouriteRecipe = () => {
  const { favouriteRecipe } = useContext(AppContext);
  return (
    <>
      <style.MainContainer>
        <style.Header>Your Favourite Recipe</style.Header>
        <style.RecipeContainer>
          {favouriteRecipe.map((el) => (
            <ViewRecipe key={el.id} el={el} />
          ))}
        </style.RecipeContainer>
      </style.MainContainer>
    </>
  );
};

export default FavouriteRecipe;
