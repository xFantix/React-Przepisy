import React from "react";
import { Link } from "react-router-dom";
import * as style from "../style/viewRecipeStyle";
const ViewRecipe = (props) => {
  const { title, image, id } = props.el;

  return (
    <style.ContainerViewRecipe>
      <style.Image src={image} alt="image food" />
      <style.Header>{title}</style.Header>
      <Link to={`/recipe/${id}`}>
        <style.Button>Let's cook</style.Button>
      </Link>
    </style.ContainerViewRecipe>
  );
};

export default ViewRecipe;
