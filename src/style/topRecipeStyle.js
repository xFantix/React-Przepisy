import styled from 'styled-components';

const fontMontserrat = "'Montserrat', sans-serif";

export const Container = styled.section`
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
    color:#FFD800;
`
