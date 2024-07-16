import styled from "styled-components";

const Section = styled.section`
  width: 1440px;
  background-color: rgb(45, 64, 89);
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 1050px;
`;

const ListTitle = styled.h2`
  color: rgb(150, 187, 124);
  font-size: 60px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
`;

const ListDescription = styled.h5`
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin-bottom: 240px;
`;

export { Section, List, ListTitle, ListDescription };
