import React from "react";
import * as style from "../../style/bannerStyle";
const Banner = () => {
  return (
    <style.Container>
      <style.Header>Cuisine of the whole world in one place</style.Header>
      <style.MediumHeader>
        Check out hundreds of recipes from around the world and surprise your
        family and friends
      </style.MediumHeader>
      <style.ButtonLink to="/searchRecipe">
        <style.Button>Check out recipe</style.Button>
      </style.ButtonLink>
    </style.Container>
  );
};

export default Banner;
