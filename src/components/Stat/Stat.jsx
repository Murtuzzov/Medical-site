import React, { Component } from "react";
import { Section, List, ListTitle, ListDescription } from "./style";

export default class Stat extends Component {
  render() {
    return (
      <Section>
        <List>
          <li>
            <ListTitle>15K</ListTitle>
            <ListDescription>Happy Customers</ListDescription>
          </li>
          <li>
            <ListTitle>150K</ListTitle>
            <ListDescription>Monthly Visitors</ListDescription>
          </li>
          <li>
            <ListTitle>15</ListTitle>
            <ListDescription>Countries Worldwide</ListDescription>
          </li>
          <li>
            <ListTitle>100+</ListTitle>
            <ListDescription>Top Partners</ListDescription>
          </li>
        </List>
      </Section>
    );
  }
}
