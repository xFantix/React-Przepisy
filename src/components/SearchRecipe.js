import React,{useState} from 'react';
import * as style from  '../style/searchRecipeStyle';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
const SearchRecipe = () => {

    const [cuisineOfRecipe, setCuisineOfRecipe] = useState({
        African:false,
        American:false,
        British:false,
        Chinese:false,
        French:false,
        Indian:false,
        Italian:false,
        Mexican:false,
    })

    const [diet, setDiet] = useState({
        GlutenFree:false,
        Ketogenic:false,
        Vegetarian:false,
        Vegan:false,
        Paelo:false,
    })

    const handleChange = (event) =>{
        
        const name = event.target.name;
        setCuisineOfRecipe({
            ...cuisineOfRecipe,[name]:event.target.checked,
        })
    }

    return ( 
        <style.MainContainer>
            <form></form>
            <div>
            <style.CheckboxContainer>
            <style.HeaderOfChecbox>Cuisines</style.HeaderOfChecbox>
               <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.African} onChange={handleChange} name="African" />
               }
                label="African"
               />
                <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.American} onChange={handleChange} name="American" />
               }
                label="American"
               /> 
                <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.British} onChange={handleChange} name="British" />
               }
                label="British"
               />
               <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.Chinese} onChange={handleChange} name="Chinese" />
               }
                label="Chinese"
               />
               <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.French} onChange={handleChange} name="French" />
               }
                label="French"
               />
               <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.Indian} onChange={handleChange} name="Indian" />
               }
                label="Indian"
               />
               <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.Italian} onChange={handleChange} name="Italian" />
               }
                label="Italian"
               />
               <FormControlLabel control={
                   <Checkbox checked={cuisineOfRecipe.Mexican} onChange={handleChange} name="Mexica" />
               }
                label="Mexican"
               />
               <style.HeaderOfChecbox>Diet Definitions</style.HeaderOfChecbox>
               <FormControlLabel control={
                   <Checkbox checked={diet.GlutenFree} onChange={handleChange} name="GlutenFree" />
               }
                label="Gluten Free"
               />
            </style.CheckboxContainer>
            </div>
           
        </style.MainContainer>
     );
}
 
export default SearchRecipe;