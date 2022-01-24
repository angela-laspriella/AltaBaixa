import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images de slider que era uma animacao

import a1 from "../../images/Catarina/1.png";
import a2 from "../../images/Catarina/2.png";
import a3 from "../../images/Catarina/3.png";
import a4 from "../../images/Catarina/4.png";
import a5 from "../../images/Catarina/5.png";
import a6 from "../../images/Catarina/6.png";
import a7 from "../../images/Catarina/7.png";
import a8 from "../../images/Catarina/8.png";
import a9 from "../../images/Catarina/9.png";
import a10 from "../../images/Catarina/10.png";
import a11 from "../../images/Catarina/11.png";
import a12 from "../../images/Catarina/12.png";
import a13 from "../../images/Catarina/13.png";
import a14 from "../../images/Catarina/14.png";
import a15 from "../../images/Catarina/15.png";
import a16 from "../../images/Catarina/16.png";
import a17 from "../../images/Catarina/17.png";
import a18 from "../../images/Catarina/18.png";
import a19 from "../../images/Catarina/19.png";
import a20 from "../../images/Catarina/20.png";
import a21 from "../../images/Catarina/21.png";
import a22 from "../../images/Catarina/22.png";
import a23 from "../../images/Catarina/23.png";
import a24 from "../../images/Catarina/24.png";

// Images do primeiro slider da catarina

import aa1 from "../../images/Catarina/aa1.png";
import aa2 from "../../images/Catarina/aa2.png";
import aa3 from "../../images/Catarina/aa3.png";
import aa4 from "../../images/Catarina/aa4.png";
import aa5 from "../../images/Catarina/aa5.png";

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
  SliderContainer,
  SliderContainerF,
  OtherContainerParts,
} from "./CatarinaElements";

import { Catarina, CatarinaTexto } from "../../data/dataCatarina";

const CatarinaSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <MainContainer>
      {Catarina.map((item) => {
        return (
          <>
            <img src={item.img} />
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
                showImage={item.showImage}
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

              <OtherContainerParts showSliderO={item.showSliderO}>
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
                  </SmallContainer>
                </ImgOtherContainer>
                <Text>{item.text2}</Text>

                <ImgOtherContainer
                  margin={item.margin}
                  row={item.row}
                  small={item.small}
                >
                  <img src={item.img3} />
                  <SmallContainer>
                    <div>
                      <SmallTitle>{item.smalltitle2}</SmallTitle>
                      <SmallText>{item.smalltext2}</SmallText>
                    </div>
                  </SmallContainer>
                </ImgOtherContainer>
                <Text>{item.text3}</Text>
              </OtherContainerParts>

              {/* Primeiro slider */}

              <SliderContainerF showSliderF={item.showSliderF}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  keyBoardControl={true}
                  customTransition="all .005"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  arrows={false}
                  renderButtonGroupOutside={true}
                >
                  <img src={aa1} />
                  <img src={aa2} />
                  <img src={aa3} />
                  <img src={aa4} />
                  <img src={aa5} />
                </Carousel>
                <SmallContainer>
                  <div>
                    <SmallTitle>{item.smalltitle}</SmallTitle>
                    <SmallText>{item.smalltext}</SmallText>
                  </div>
                </SmallContainer>
              </SliderContainerF>

              {/* Segundo slider */}

              <SliderContainer showSlider={item.showSlider}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  keyBoardControl={true}
                  customTransition="all .005"
                  transitionDuration={0.5}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  arrows={false}
                  renderButtonGroupOutside={true}
                >
                  <img src={a1} />
                  <img src={a2} />
                  <img src={a3} />
                  <img src={a4} />
                  <img src={a5} />
                  <img src={a6} />
                  <img src={a7} />
                  <img src={a8} />
                  <img src={a9} />
                  <img src={a10} />
                  <img src={a11} />
                  <img src={a12} />
                  <img src={a13} />
                  <img src={a14} />
                  <img src={a15} />
                  <img src={a16} />
                  <img src={a17} />
                  <img src={a18} />
                  <img src={a19} />
                  <img src={a20} />
                  <img src={a21} />
                  <img src={a22} />
                  <img src={a23} />
                  <img src={a24} />
                </Carousel>
                <SmallContainer>
                  <div>
                    <SmallTitle>{item.smalltitle}</SmallTitle>
                    <SmallText>{item.smalltext}</SmallText>
                  </div>
                </SmallContainer>
              </SliderContainer>
            </OtherContainer>
          </>
        );
      })}
    </MainContainer>
  );
};

export default CatarinaSection;
