import styled from 'styled-components';
const fontMontserrat = "'Montserrat', sans-serif";
export const Main = styled.div`
    width:100%;
    display:flex;
    min-height:calc(100vh - 56px);
`
export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    
`
export const ContainerInformation = styled.div`
    width:40%;
    background-color:#F8F8F8;
    @media(max-width:860px)
    {
        display:none;
    }
`
export const MainHeader = styled.h2`
    font-family:${fontMontserrat};
    padding:50px 15px 0px 15px;
    color:#FFD71D;
    font-weight:700;
    font-size:35px;
    text-transform:uppercase;
`
export const SmallHeader = styled.h3`
    font-family:${fontMontserrat};
    padding-left:15px;
    padding-top:10px;
    color:#393A3B;
    font-weight:400;
    text-transform:uppercase;
    font-size:18px;
`
export const IngredientsHeader = styled.h3`
    font-family:${fontMontserrat};
    padding-left:15px;
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
    position: relative;
    @media(max-width:860px)
    {
        width:100%;
        background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.405)),url(${props=>props.bgImage});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        display:flex;
        flex-direction:column;
    }
`
export const ListIngredients = styled.ul`
    padding:20px 0px 0px 35px;
    font-family:${fontMontserrat};
    font-size:20px;
`
export const InformationBar = styled.div`
    width:100%;
    justify-content:space-around;
    align-items:center;
    background-color:#FFD71D;
    position:absolute;
    bottom:0;
    display:flex;
`
export const InformationBarParagraph = styled.div`
    font-family:${fontMontserrat};
    font-size:20px;
    padding:10px 0px;
`
export const RecipeListContainer = styled.ol`
    padding:30px 30px;
    font-family:${fontMontserrat};
    &>li{
        padding-top:10px;
    }
`
export const MainHeaderMobile = styled.h2`
 font-family:${fontMontserrat};
    padding:50px 0px;
    color:#FFD71D;
    font-weight:700;
    font-size:45px;
    text-transform:uppercase;
    text-align:center;
    @media(min-width:861px){
        display:none;
    }
`
export const ListIngredientsMobile = styled.ul`
    text-align:center;
    font-family:${fontMontserrat};
    font-size:25px;
    text-transform:uppercase;
    letter-spacing:3px;
    list-style:none;
    padding-bottom:95px;
    color:white;
    @media(min-width:861px){
        display:none;
    }
`
export const AddFavButton = styled.button`
    background-color:transparent;
    border:none;
    cursor: pointer;
    font-size:20px;
`
