import React from 'react';
import * as style from '../style/navigationStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Navigation = () => {
    return ( 
        <Router>
        <style.NavContainer>
            <style.StyleHeader 
                to="/">
                Twojakuchnia
            </style.StyleHeader>
            <style.NavigationList>
                
            </style.NavigationList>
        </style.NavContainer>
        </Router>
     );
}
 
export default Navigation;


