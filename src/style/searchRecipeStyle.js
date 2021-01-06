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

export const SearchRecipeContainer = styled.div`
  padding:0px 90px;
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
