import styled from "styled-components";

const Section = styled.section`
  width: 1440px;
  background-color: rgb(45, 64, 89);
  padding-bottom: 290px;
`;

const Container = styled.div`
  display: flex;
  gap: 160px;
  width: 1045px;
`;

const Box = styled.div`
  width: 380px;
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  text-align: left;
  margin-bottom: 35px;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

const Strip = styled.div`
  width: 90px;
  height: 5px;
  margin: 0px;
  margin-bottom: 36px;
  margin-top: 50px;
  background-color: rgb(255, 113, 113);
`;

export { Section, Title, Box, Paragraph, Strip, Container };
