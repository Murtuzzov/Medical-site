import React from "react";
import { CardItem } from "./style";

const Сard = ({ imgSrc, link, title, paragraph, btn }) => {
  return (
    <>
      <CardItem>
        <img src={imgSrc} alt="" />
        <a href={link}></a>
        <h5>{title}</h5>
        <p>{paragraph}</p>
        <button>{btn}</button>
      </CardItem>
    </>
  );
};

export default Сard;
