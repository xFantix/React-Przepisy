import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const fontMontserrat = "'Montserrat', sans-serif";

export const NavContainer = styled.div`
    width:100%;
    background-color:rgba(36,37,38,.9);
    box-shadow:0 1px 6px rgba(0,0,0,0.5);
    display:flex;
    justify-content:space-between;
`

export const StyleHeader = styled(NavLink)`
    font-family:${fontMontserrat};
    text-transform:uppercase;
    font-weight:600;
    color:#FFD800;
    padding:10px 40px;
    text-decoration:none;
    font-size:30px;
`
export const NavigationList = styled.ul`
    display:flex;
    list-style:none;
    align-items:center;
    padding-right:40px;
    @media(max-width:860px){
        display:none;
    }
`
export const ElementOfList = styled.li`
    text-decoration:none;
    color:white;
    padding:0px 10px;
`
export const LinkList = styled(NavLink)`
    color:white;
    text-decoration:none;
    font-family:${fontMontserrat};
`


