import React from 'react';

const RecipeInformation = (props) => {
    return (
        <>
        <h1>User id: {props.match.params.id}</h1>
        </>
      );
}
 
export default RecipeInformation;