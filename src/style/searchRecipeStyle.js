import styled from 'styled-components';
const fontMontserrat = "'Montserrat', sans-serif";

export const MainContainer = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    padding:30px 40px 0px;
    @media(max-width:860px){
        padding:30px 0px;
    }
`
export const CheckboxContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:35px 35px 25px 35px;
    border:1px solid #e1e1e1;
    max-height:80vh;
    min-width:300px;
    @media(max-width:860px){
        display:none;
    }
`

export const HeaderOfChecbox = styled.h2`
    font-family:${fontMontserrat};
    color:#FFD800;
    font-size:35px;
    padding-top:5px;
`
export const SearchRecipeContainer = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    
`
export const InputText = styled.input`
    width:60%;
    height:40px;
    border-radius:3px;
    border:2px solid #FFD800;
    outline:none;
    font-family:${fontMontserrat};
    padding:10px;
`
export const SearchForm = styled.form`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:30px 0px;
`
export const SearchViewContainer = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    justify-content:space-around;
`
