import { styled } from "styled-components";
import AfBg from "../../../assets/images/bg2.jpeg";
// const main = {
//  backgroundColor:'red',
//  marginTop:'100px',
// };




const Main= styled.div`
display:flex;
background: url(${AfBg}) no-repeat;
backgground-position:top;
background-size:cover;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:Poppins;

margin:100px 0px 0px 0px;
width:100%;
height:max-content;

form{
 display:flex;
 max-width:65%;
 min-width:80%;
 padding:10px 0px 10px 0px;
 flex-direction:column;
 align-items:left;
 justify-content:center;
}
input{
 height:50px;
 width:100%;
 border: none;
 padding:0px 10px 0px 10px;
 border-bottom: 2px solid #FF7C00; 
 outline:none;
 border-radius:5px;
 font-size:120%;
 font-family:Poppins;
 margin:0px 0px 10px 0px 

}
option, select{
 width:100%;
 hieght:50px;
 font-size:110%;
 outline:none;
 border:none;
}
p{
 margin:10px 0px 0px 0px
}



`;
const Withdraw = styled.button`

margin:0 auto;
font-size:130%;
padding:5px 20px 5px 20px;
background-color:#FF7C00;
color:white;
height:auto;
border:none;
border-radius:5px;
width:40%;

`;



export { Main, Withdraw };

