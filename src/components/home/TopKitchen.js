import React from "react";
import * as style from "../../style/topKitchenStyle";

const TopKitchen = () => {
  return (
    <style.Section>
      <style.Header>Top Kitchen</style.Header>
      <style.HeaderDescription>
        The most interesting flavors from around the world
      </style.HeaderDescription>
      <style.LinkContainer>
        <style.LinkKitchen to="/">
          <style.KitchenCard kitchenGB>
            <style.KitchenCardHeader>British Kitchen</style.KitchenCardHeader>
          </style.KitchenCard>
        </style.LinkKitchen>
        <style.LinkKitchen to="/">
          <style.KitchenCard kitchenItaly>
            <style.KitchenCardHeader>Italy Kitchen</style.KitchenCardHeader>
          </style.KitchenCard>
        </style.LinkKitchen>
        <style.LinkKitchen to="/">
          <style.KitchenCard kitchenIndian>
            <style.KitchenCardHeader>Indian Kitchen</style.KitchenCardHeader>
          </style.KitchenCard>
        </style.LinkKitchen>
      </style.LinkContainer>
    </style.Section>
  );
};

export default TopKitchen;
