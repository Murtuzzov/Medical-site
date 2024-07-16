import styled from "styled-components";

const HeaderBox = styled.header`
  width: 1440px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./src/assets/images/hero-2-cover.png");
`;

const NavBox = styled.nav`
  display: flex;
  padding: 6px 0px;
  width: 1320px;
  margin-bottom: 130px;
`;

const Logo = styled.h3`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: white;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding-right: 500px;
`;

const NavListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin: 0px;
  margin: 0px;
  color: white;
`;

const NavAuth = styled.div`
  display: flex;
  gap: 45px;
`;

const LogIn = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: white;
`;

const NavBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  color: white;
  background-color: rgb(150, 187, 124);
  padding: 15px 25px 15px 25px;
  border-radius: 5px;
  border: none;
  gap: 30px;
`;

const MainContent = styled.div`
  width: 700px;
  height: 496;
  margin: 0 auto;
  padding: 40px 0px;
`;

const HeaderTag = styled.h5`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin-bottom: 40px;
  color: rgb(150, 187, 124);
`;

const Headline = styled.h1`
  font-size: 58px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  margin-bottom: 40px;
  color: white;
`;

const SubHeadline = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 40px;
  text-align: center;
  color: white;
`;

const HeaderBtn = styled.button`
  padding: 15px 40px;
  margin-bottom: 160px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  background-color: rgb(150, 187, 124);
  border: none;
  border-radius: 5px;
  color: white;
`;

export {
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
};
