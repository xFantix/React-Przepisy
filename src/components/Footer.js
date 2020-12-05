import React from 'react';
import {Link} from 'react-router-dom';
import * as style from '../style/footerStyle';
const Footer = () => {
    return ( 
        <style.Footer>
              <Link to="">
                 <style.Icone className="fab fa-facebook"></style.Icone>
            </Link>
            <Link to="">
                <style.Icone className="fab fa-instagram"></style.Icone>
            </Link>
            <Link to="">
                 <style.Icone className="fab fa-twitter"></style.Icone>
            </Link>
        </style.Footer>
     );
}
 
export default Footer;