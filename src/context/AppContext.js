import { createContext } from 'react';

export const AppContext = createContext({
    topRecipe:[],
    setTopRecipe:()=>{},
    recipeInfo:{},
    setRecipeInfo:()=>{},
    favouriteRecie:[],
    setFavouriteRecipe:()=>{},
});