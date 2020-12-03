import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../image/banner-food.jpg';

const fontMontserrat = "'Montserrat', sans-serif";

export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.405)),url(${bg});
    height:600px;
    background-position:top;
    background-size:cover;
`
export const Header = styled.h2`
    font-family:${fontMontserrat};
    color:white;
    font-size:45px;
`
export const MediumHeader = styled.h3`
    font-family:${fontMontserrat};
    color:white;
    font-weight:300;
`
export const Button = styled.button`
  padding: 10px 40px;
    background-color:#FFD800;
    font-family:${fontMontserrat};
    border: none;
    color: white;
    font-size: 25px;
    font-weight: 400;
    cursor: pointer;
    margin-top:45px;
`
export const ButtonLink = styled(NavLink)`
    display: block;
    text-align: center;
`


