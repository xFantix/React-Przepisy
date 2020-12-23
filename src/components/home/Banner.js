import React from 'react';
import * as style from '../../style/bannerStyle';
const Banner = () => {
    return ( 
        <style.Container>
        <style.Header>Kuchnia całego Świata w jednym miejscu</style.Header>
        <style.MediumHeader>Sprawdz setki przepisów z całego świata i zaskocz swoją rodzinę i przyjaciół</style.MediumHeader>
        <style.ButtonLink to="/searchRecipe"><style.Button>zobacz przepisy</style.Button></style.ButtonLink>
        </style.Container>
     );
}
 
export default Banner;
