import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import a1 from "../../images/Catarina/a1.png";
import a2 from "../../images/Catarina/a2.png";
import a3 from "../../images/Catarina/a3.png";
import a4 from "../../images/Catarina/a4.png";
import a5 from "../../images/Catarina/a5.png";
import a6 from "../../images/Catarina/a6.png";

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

              <SliderContainer showSlider={item.showSlider}>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={false}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
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
