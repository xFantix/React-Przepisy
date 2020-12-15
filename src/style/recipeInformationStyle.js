import styled from 'styled-components';
const fontMontserrat = "'Montserrat', sans-serif";
export const Container = styled.div`
    width:100%;
    display:flex;
    min-height:calc(100vh - 56px);
`
export const ContainerInformation = styled.div`
    width:40%;
    background-color:#F8F8F8;
`
export const MainHeader = styled.h2`
    font-family:${fontMontserrat};
    padding:50px 10px 0px 10px;
    color:#FFD71D;
    font-weight:700;
    font-size:30px;
    text-transform:uppercase;
`
export const SmallHeader = styled.h3`
    font-family:${fontMontserrat};
    padding-left:10px;
    padding-top:10px;
    color:#393A3B;
    font-weight:400;
    text-transform:uppercase;
    font-size:18px;
`
export const IngredientsHeader = styled.h3`
    font-family:${fontMontserrat};
    padding-left:10px;
    padding-top:40px;
    color:#393A3B;
    font-size:25px;
    text-transform:uppercase;
`
export const  MealImage = styled.div`
    width:60%;
    background-image:url(${props=>props.bgImage});
    background-position:center;
    background-size:cover;
`
export const ListIngredients = styled.ul`
    padding:20px 0px 0px 35px;
    font-family:${fontMontserrat};
    font-size:25px;
`