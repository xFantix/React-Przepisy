import React, { useState, useEffect } from "react";
import * as style from "../style/searchRecipeStyle";
import ViewRecipe from "./ViewRecipe";
const SearchRecipe = () => {
  


  const [inputValue, setInputValue] = useState("");

  const [searchRecipe, setSearchRecipe] = useState({
    loading: true,
    information: [],
  });

  useEffect(() => {
    const API = `https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&instructionsRequired=true&number=99&apiKey=210c10f0f72a4f999d2c566a257ce155`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Dont work :(");
      })
      .then((response) => response.json())
      .then((data) => {
        setSearchRecipe({
          information: data.results,
          loading: false,
        });
      });
  }, [inputValue]);

  const viewSearch = searchRecipe.information.map((el) => (
    <ViewRecipe key={el.id} el={el} />
  ));


  return (
    <>
      {!SearchRecipe.loading && (
        <style.MainContainer>
          <style.SearchRecipeContainer>
            <style.SearchForm>
              <style.InputText
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="What do you want?"
                type="text"
              />
            </style.SearchForm>
            <style.SearchViewContainer>
              {searchRecipe.information.map((el) => (
                <ViewRecipe key={el.id} el={el} />
              ))}
            </style.SearchViewContainer>
          </style.SearchRecipeContainer>
        </style.MainContainer>
      )}
    </>
  );
};

export default SearchRecipe;
