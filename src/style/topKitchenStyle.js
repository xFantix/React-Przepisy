import styled from 'styled-components';
import {Link} from "react-router-dom";
import bgItaly from '../image/itFood.jpg';
import bgBrit from '../image/britFood.jpg';
import bgIndian from '../image/indianFood.jpg'
const fontMontserrat = "'Montserrat', sans-serif";
export const Section = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
`
export const Header = styled.h2`
    text-align:center;
    font-family:${fontMontserrat};
    text-transform:uppercase;
    color:#282627;
    padding-top:40px;
    font-size:30px;
`
export const HeaderDescription = styled.p`
    font-family:${fontMontserrat};
    text-align:center;
    color:#282627;
`
export const LinkContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
export const LinkKitchen = styled(Link)`
    width:350px;
    height:200px;
    margin-top:30px;
`
export const KitchenCard = styled.div`
    width:100%;
    height:100%;
    position:relative;
    background-position:center;
    background-size:cover;
    background-image:url(${props=>(props.kitchenGB && bgBrit) || (props.kitchenItaly && bgItaly) || (props.kitchenIndian && bgIndian) });
`
export const KitchenCardHeader = styled.h2`
    position:absolute;
    font-family:${fontMontserrat};
    color:black;
    bottom:0;
    right:0;
    padding:10px 10px;
    display:block;
    background-color:white;
`
