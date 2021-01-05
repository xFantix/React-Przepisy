import React, { useState, useEffect } from "react";
import * as style from "../style/searchRecipeStyle";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import ViewRecipe from "./ViewRecipe";
const SearchRecipe = () => {
  const [optionCuisine, setOptionCuisine] = useState({
    African: false,
    American: false,
    British: false,
    Chinese: false,
    French: false,
    Indian: false,
    Italian: false,
    Mexican: false,
  });

  const [cuisineArray, setCuisineArray] = useState([]);

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

  const handleChangeCuisine = (event) => {
    const inputName = event.target.name;

    setOptionCuisine({
      ...optionCuisine,
      [inputName]: event.target.checked,
    });
  };

  return (
    <>
      {!SearchRecipe.loading && (
        <style.MainContainer>
          <style.CheckboxContainer>
            <style.HeaderOfChecbox>Cuisines</style.HeaderOfChecbox>
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.African}
                  onChange={handleChangeCuisine}
                  name="African"
                />
              }
              label="African"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.American}
                  onChange={handleChangeCuisine}
                  name="American"
                />
              }
              label="American"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.British}
                  onChange={handleChangeCuisine}
                  name="British"
                />
              }
              label="British"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.Chinese}
                  onChange={handleChangeCuisine}
                  name="Chinese"
                />
              }
              label="Chinese"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.French}
                  onChange={handleChangeCuisine}
                  name="French"
                />
              }
              label="French"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.Indian}
                  onChange={handleChangeCuisine}
                  name="Indian"
                />
              }
              label="Indian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.Italian}
                  onChange={handleChangeCuisine}
                  name="Italian"
                />
              }
              label="Italian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={optionCuisine.Mexican}
                  onChange={handleChangeCuisine}
                  name="Mexica"
                />
              }
              label="Mexican"
            />
          </style.CheckboxContainer>
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
