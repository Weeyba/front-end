import { styled } from "styled-components";

// const main = {
//  backgroundColor:'red',
//  marginTop:'100px',
// };
const Main= styled.div`
display:flex;
justify-content:center;
flex-direction:column;
background-color:blue;
margin:100px 0px 0px 0px;
width:100%;
height:auto;

form{
 width:70%;
 dipslay:flex;
 flex-direction:column;
 align-items:center;
}
input{
 height:20px;
 width:80%;

}
`;

export { Main };

