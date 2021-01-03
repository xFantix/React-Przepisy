import styled from 'styled-components';
const fontMontserrat = "'Montserrat', sans-serif";
export const ContainerViewRecipe = styled.div`
    display:flex;
    flex-direction:column;
    width:350px;
    margin-top:30px;
    overflow:hidden;
`
export const Header = styled.h2`
    font-family:${fontMontserrat};
    font-size:20px;
    font-weight:600;
    text-transform:uppercase;
    color:#282627;
    padding-top:15px;
    display:block;
    min-height:65px;
`
export const Button = styled.button`
    background-color:#FFD800;
    border:none;
    color:white;
    font-family:${fontMontserrat};
    font-weight:700;
    cursor: pointer;
    padding:10px 0px;
    width:100%;
`
export const Image = styled.img`
    border-radius:5px;
    overflow:hidden;
`