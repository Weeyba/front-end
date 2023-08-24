import { css, styled } from "styled-components";
import { Colors } from "../Colors/Colors";


const HeaderContainer = styled.header`
  padding: 20px 70px;
  fontWeight:bold;
  fontFamily:Poppins;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 0 5px -2px var(--ash);
  background-color: white;
  z-index: 10;
  height: 90px;

  @media(max-width: 768px) {
    padding: 20px 30px;
  }
`;

const openAnimation = `
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-45deg) translate(-6px, 6px);
  }
`;

const closeAnimation = `
  0% {
    transform: rotate(-45deg) translate(-6px, 6px);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const MenuListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
   fontWeight:bold;
  position: fixed;
  top: 92px;
  left: 0;
  width: 100%;
  height: 110vh;
  background-color: ${Colors.orange_color.color100};
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  padding-top: 40px;
  gap: 30px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0%);
    `}
    body'{
      overflow:hidden;
    '}
`;

const MenuListItem = styled.li`
  padding: 10px 10px 10px 7%;
  
  color: ${Colors.white};
  a {
    text-decoration: none;
    color: ${Colors.white};
    font-size: 18px;
    margin:60% 0% 60% 0%;
    fontFamily:Poppins;    
     fontWeight:bold;

    &:hover {
      color: ${Colors.orange_color.color200};
      transition: all ease 0.5s;
      font-size: 20px;
    }
  }
`;

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
   fontWeight:bold;
  height: 20px;
  cursor: pointer;
`;

const HamburgerBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease-in-out;
`;

const NavContainer = styled.nav`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  align-items: center;
   fontWeight:bold;

  div.Links {
    display: flex;
    gap: 30px;

    a {
      text-decoration: none;
      color: ${Colors.black};
      font-size: 18px;

      &:hover {
        color: ${Colors.orange_color.color200};
        transition: all ease 0.5s;
        font-size: 20px;
      }
    }
  }

  ${HamburgerContainer} {
    display: none;
  }

  ${MenuListContainer} {
    display: none;
  }

  @media (max-width: 780px) {
    div.Links {
      display: none;
    }
    ${MenuListContainer} {
      display: flex;
    }
    ${HamburgerContainer} {
      display: flex;
    }
  }
`;

export {
  HamburgerBar,
  HamburgerContainer,
  HeaderContainer,
  MenuListContainer,
  MenuListItem,
  NavContainer,
  openAnimation,
  closeAnimation
};
