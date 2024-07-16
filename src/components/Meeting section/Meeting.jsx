import React, { Component } from "react";
import { Section, Title, Box, Paragraph, Strip, Container } from "./style";

export default class Meeting extends Component {
  render() {
    return (
      <Section>
        <Container>
          <div>
            <img src="./src/assets/images/doctor.png" alt="" />
          </div>
          <Box>
            <Strip></Strip>
            <Title>Meet Our Experts</Title>
            <Paragraph>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </Paragraph>
          </Box>
        </Container>
      </Section>
    );
  }
}
