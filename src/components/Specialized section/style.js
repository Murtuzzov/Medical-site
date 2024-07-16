import styled from "styled-components";

const Section = styled.section`
  width: 1440px;
  background-color: rgb(45, 64, 89);
  padding-top: 100px;
  padding-bottom: 160px;
`;

const Container = styled.div`
  display: flex;
  width: 1040px;

  padding-bottom: 80px;
`;

const Description = styled.div`
  width: 500px;

  padding-top: 200px;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  list-style: none;
  margin-right: 300px;

  li:nth-child(3) {
    position: absolute;
    left: 260px;
    top: 160px;
  }
`;

const ListItem = styled.li`
  width: 160px;
  background-color: white;
  margin-bottom: 24px;
  padding: 35px 40px;
`;

const Strip = styled.div`
  width: 90px;
  height: 5px;
  margin: 0px;
  margin-bottom: 36px;
  background-color: rgb(255, 113, 113);
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  margin-bottom: 36px;
  color: white;
`;

const TitleParagraph = styled.p`
  width: 350px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin: 0px;
  margin-bottom: 36px;
  color: white;
`;

const LearnMore = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: rgb(150, 187, 124);
`;

const FirstCardTitle = styled.h5`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardStrip = styled.div`
  width: 50px;
  height: 2px;
  background-color: rgb(255, 113, 113);
  margin: 0px;
  margin-bottom: 20px;
`;

const FirstCardDesc = styled.p`
  width: 132px;
  margin: 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(115, 115, 115);
`;

export {
  Section,
  Container,
  Description,
  CardList,
  ListItem,
  Strip,
  SectionTitle,
  TitleParagraph,
  LearnMore,
  FirstCardTitle,
  CardStrip,
  FirstCardDesc,
};
