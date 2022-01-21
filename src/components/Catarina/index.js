import React from "react";

import {
  MainContainer,
  Title,
  Name,
  Intro,
  Text,
  ImageContainer,
} from "./CatarinaElements";

import { Catarina, CatarinaTexto } from "../../data/dataCatarina";

const CatarinaSection = () => {
  return (
    <MainContainer>
      {Catarina.map((item) => {
        return (
          <>
            <Title>{item.text}</Title>
            <Name>{item.name}</Name>
            <Intro>{item.intro}</Intro>
          </>
        );
      })}
      {CatarinaTexto.map((item) => {
        return (
          <>
            <Text>{item.text}</Text>
            <ImageContainer>
              <img src={item.img} />
            </ImageContainer>
          </>
        );
      })}
    </MainContainer>
  );
};

export default CatarinaSection;
