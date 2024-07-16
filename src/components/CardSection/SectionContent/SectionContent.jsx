import React, { Component } from "react";
import Card from "../Card/Card";

import {
  ProvideTitle,
  MainTitle,
  Paragraph,
  Section,
  Container,
} from "./style";

export default class SectionContent extends Component {
  render() {
    return (
      <>
        <Section>
          <Container>
            <ProvideTitle>Practice Advice</ProvideTitle>
            <MainTitle>Our Department</MainTitle>
            <Paragraph>
              Problems trying to resolve the conflict between
              <br /> the two major realms of Classical physics: Newtonian
              mechanics{" "}
            </Paragraph>
            <ul>
              <Card
                imgSrc={"./src/assets/images/cardimg1.png"}
                link="Canser Care"
                title="Best dental surgeons"
                description="We focus on ergonomics and meeting you where you work. Its only a keystroke away"
                btn="Learn More"
              />
              <Card
                imgSrc={"./src/assets/images/cardimg2.png"}
                link="Emergency Case"
                title="Online Appoinment"
                description="We focus on ergonomics and meeting you where you work. Its only a keystroke away"
                btn="Learn More"
              />
              <Card
                imgSrc={"./src/assets/images/cardimg3.png"}
                link="Painless procedures"
                title="Best dental surgeons"
                description="We focus on ergonomics and meeting you where you work. Its only a keystroke away"
                btn="Learn More"
              />
            </ul>
          </Container>
        </Section>
      </>
    );
  }
}
