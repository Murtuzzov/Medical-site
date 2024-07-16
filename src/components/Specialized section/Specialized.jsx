import React, { Component } from "react";
import {
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
} from "./style";

class Specialized extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Description>
            <Strip></Strip>

            <SectionTitle>
              Our Doctors
              <br /> Specialize in you
            </SectionTitle>
            <TitleParagraph>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </TitleParagraph>
            <LearnMore href="#">Learn More &#8594;</LearnMore>
          </Description>
          <CardList>
            <ListItem>
              <img
                src="./src/assets/images/fixed-width.png"
                alt=""
                width={70}
                height={76}
              />
              <FirstCardTitle>Quick examination</FirstCardTitle>

              <CardStrip></CardStrip>

              <FirstCardDesc>
                The gradual accumulation of information about
              </FirstCardDesc>
            </ListItem>
            <ListItem>
              <img
                src="./src/assets/images/fixed-width3.png"
                alt=""
                width={70}
                height={76}
              />
              <FirstCardTitle>Emergancy Case</FirstCardTitle>
              <CardStrip></CardStrip>
              <FirstCardDesc>
                The gradual accumulation of information about
              </FirstCardDesc>
            </ListItem>

            <ListItem>
              <img
                src="./src/assets/images/fixed-width2.png"
                alt=""
                width={70}
                height={76}
              />
              <FirstCardTitle>Best dental surgeons</FirstCardTitle>
              <CardStrip></CardStrip>
              <FirstCardDesc>
                The gradual accumulation of information about
              </FirstCardDesc>
            </ListItem>
          </CardList>
        </Container>
      </Section>
    );
  }
}

export default Specialized;
