import React, { Component } from "react";

import {
  HeaderBox,
  NavBox,
  Logo,
  NavList,
  NavListItem,
  NavAuth,
  LogIn,
  NavBtn,
  MainContent,
  HeaderTag,
  Headline,
  SubHeadline,
  HeaderBtn,
} from "./style";

class Header extends Component {
  render() {
    return (
      <>
        <HeaderBox>
          <NavBox>
            <Logo>MedicalGenuin</Logo>

            <NavList>
              <NavListItem>Home</NavListItem>
              <NavListItem>Product</NavListItem>
              <NavListItem>Pricing</NavListItem>
              <NavListItem>Contact</NavListItem>
            </NavList>
            <NavAuth>
              <LogIn href="">Login</LogIn>
              <NavBtn>Join Us &#8594;</NavBtn>
            </NavAuth>
          </NavBox>

          <MainContent>
            <HeaderTag>Join Us</HeaderTag>
            <Headline>
              Meet the Best
              <br /> Hospital
            </Headline>

            <SubHeadline>
              We are always fully focused on helping
              <br /> your child and you
            </SubHeadline>
            <HeaderBtn>Join Us</HeaderBtn>
          </MainContent>
        </HeaderBox>
      </>
    );
  }
}

export default Header;
