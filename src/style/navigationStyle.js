import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const fontMontserrat = "'Montserrat', sans-serif";

export const NavContainer = styled.div`
    width:100%;
    background-color:rgba(36,37,38,.9);
    box-shadow:0 1px 6px rgba(0,0,0,0.5);
    display:flex;
    position:fixed;
`

export const StyleHeader = styled(NavLink)`
    font-family:${fontMontserrat};
    text-transform:uppercase;
    font-weight:600;
    color:white;
    padding:10px 10px;
    text-decoration:none;
    font-size:30px;
`
export const NavigationList = styled.ul`
    display:flex;
    
`

