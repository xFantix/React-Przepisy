import React from 'react';
import {Link} from "react-router-dom";
import * as style from '../../style/topKitchenStyle';

const TopKitchen = () => {
    return ( 
        <style.Section>
            <style.Header>Top Kitchen</style.Header>
            <style.HeaderDescription>The most interesting flavors from around the world</style.HeaderDescription>
            <style.LinkContainer>
                <style.LinkKitchen>
                    <style.KitchenCard kitchenGB>
                    <style.KitchenCardHeader>British Kitchen</style.KitchenCardHeader>
                    </style.KitchenCard>
                </style.LinkKitchen>
                <style.LinkKitchen>
                    <style.KitchenCard kitchenItaly>
                    <style.KitchenCardHeader>Italy Kitchen</style.KitchenCardHeader>
                    </style.KitchenCard>
                </style.LinkKitchen>
                <style.LinkKitchen>
                    <style.KitchenCard kitchenIndian>
                        <style.KitchenCardHeader>Indian Kitchen</style.KitchenCardHeader>
                    </style.KitchenCard>
                </style.LinkKitchen>
            </style.LinkContainer>
        </style.Section>
     );
}
 
export default TopKitchen;