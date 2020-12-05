import React,{useEffect} from 'react';

const RecipeInformation = (props) => {

  const{id} = props.match.params;

  useEffect(()=>{

    const API = `https://api.spoonacular.com/recipes/${id}/information?apiKey=210c10f0f72a4f999d2c566a257ce155`

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
      });

  },[id])



    return (
        <>
        </>
      );
}
 
export default RecipeInformation;