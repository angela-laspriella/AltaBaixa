import React from "react";

import {
  MainContainer,
  Title,
  Name,
  Intro,
  Text,
  ImageContainer,
  OtherContainer,
  ImgOtherContainer,
  IntroContainer,
  SmallTitle,
  SmallText,
  SmallContainer,
} from "./CatarinaElements";

import { Catarina, CatarinaTexto } from "../../data/dataCatarina";

const CatarinaSection = () => {
  return (
    <MainContainer>
      {Catarina.map((item) => {
        return (
          <>
            <Title>{item.text}</Title>
            <IntroContainer>
              <div>
                <Name>{item.name}</Name>
                <Intro>{item.intro}</Intro>
              </div>
              <div>
                <img src={item.img2} />
              </div>
            </IntroContainer>
          </>
        );
      })}

      {CatarinaTexto.map((item) => {
        return (
          <>
            <ImageContainer>
              <img src={item.img} />
            </ImageContainer>
            <OtherContainer row={item.false}>
              <Text>{item.text}</Text>
              <ImgOtherContainer
                margin={item.margin}
                row={item.row}
                small={item.small}
              >
                <img src={item.img2} />
                <SmallContainer>
                  <div>
                    <SmallTitle>{item.smalltitle}</SmallTitle>
                    <SmallText>{item.smalltext}</SmallText>
                  </div>
                  <div>
                    <SmallTitle>{item.smalltitle2}</SmallTitle>
                    <SmallText>{item.smalltext2}</SmallText>
                  </div>
                </SmallContainer>
              </ImgOtherContainer>
            </OtherContainer>
          </>
        );
      })}
    </MainContainer>
  );
};

export default CatarinaSection;
