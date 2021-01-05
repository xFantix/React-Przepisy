import styled from 'styled-components';
const fontMontserrat = "'Montserrat', sans-serif";
export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
`
export const ElementContainer = styled.div`
    padding:15px;
    font-family:${fontMontserrat};
    border-bottom:1px solid white;
    cursor: pointer;
`
export const Header =  styled.h2`
    text-align:center;
    font-family:${fontMontserrat};
    text-transform:uppercase;
    color:#282627;
    padding-top:40px;
    font-size:30px;
`
export const RecipeContainer = styled.div`
    display:flex;
    padding:0px 40px;
    justify-content:space-around;
    flex-wrap:wrap;
`
