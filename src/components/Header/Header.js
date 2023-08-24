import React, { useState } from "react";
import BrandLogo from "../../assets/images/Logo.png";
import {
    HamburgerBar,
  HamburgerContainer,
  HeaderContainer,
  MenuListContainer,
  MenuListItem,
  NavContainer,
  closeAnimation,
  openAnimation,
} from "./Header.styled";
import { css } from "styled-components";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderContainer>
      <NavContainer>
        <a style={{ marginRight: "auto" }} href="/">
          <img
            aria-label="Weeyba brand logo"
            style={{ width: 87, height: 50 }}
            src={BrandLogo}
            alt="Weeyba brand logo"
          />
        </a>

        <div className="Links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact-us">Contact us</a>
          <a href="/login">Sign in</a>
          <a href="/SignUp">Sign Up</a>
        </div>


        <HamburgerContainer onClick={handleToggle}>
            <HamburgerBar
              style={{
                transform: isOpen
                  ? "rotate(-45deg) translate(-6px, 6px)"
                  : "none",
                animation: isOpen
                  ? css`
                      ${closeAnimation} 0.3s forwards
                    `
                  : "none",
              }}
            />
            <HamburgerBar
              style={{
                opacity: isOpen ? 0 : 1,
                animation: isOpen
                  ? css`
                      ${closeAnimation} 0.3s forwards
                    `
                  : css`
                      ${openAnimation} 0.3s reverse forwards
                    `,
              }}
            />
            <HamburgerBar
              style={{
                transform: isOpen
                  ? "rotate(45deg) translate(-6px, -6px)"
                  : "none",
                animation: isOpen
                  ? css`
                      ${closeAnimation} 0.3s forwards
                    `
                  : "none",
              }}
            />
          </HamburgerContainer>

        <MenuListContainer isOpen={isOpen}>
          <MenuListItem onClick={handleToggle}>
            <a href="/"><i style={{
              marginRight:'10px'
            }} class="fa-solid fa-house"></i>Home</a>
          </MenuListItem>
          <MenuListItem onClick={handleToggle}>
            <a href="/about"><i style={{
              marginRight:'10px'
            }} class="fa-solid fa-user"></i>About</a>
          </MenuListItem>
          <MenuListItem
            onClick={() => {
              handleToggle();
            }}
          >
            <a href="/contact-us"><i style={{
              marginRight:'10px'
            }} class="fa-solid fa-phone"></i>Contact us</a>
          </MenuListItem>
          <MenuListItem
            onClick={() => {
              handleToggle();
            }}
          >
            <a href="/login"><i style={{
              marginRight:'10px'
            }} class="fa-solid fa-right-to-bracket"></i>LogIn</a>
        
          </MenuListItem>
          <MenuListItem
          onClick={() => {
            handleToggle();
          }}
        >
          <a href="/SignUp"><i style={{
            marginRight:'10px'
          }} class="fa-solid fa-user-plus"></i>Create Account</a>
        </MenuListItem>
        </MenuListContainer>
      </NavContainer>
    </HeaderContainer>
  );
}
