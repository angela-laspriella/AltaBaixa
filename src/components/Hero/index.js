import React from "react";

import a1 from "../../images/A1.png";
import l from "../../images/L.png";
import t from "../../images/T.png";
import a2 from "../../images/A2.png";

import ii from "../../images/&.png";

import b from "../../images/b.png";
import a3 from "../../images/A3.png";
import i from "../../images/I.png";
import x from "../../images/X.png";
import a4 from "../../images/A4.png";

import {
  HeroContainer,
  HeroContent,
  FirstWrap,
  SecondWrap,
  ThirdWrap,
  FourthWrap,
  LastWrap,
  TopPlease,
  One,
  Two,
} from "./HeroElements";

const HeroSection = () => {
  /*Cena vou chamar no pages */
  return (
    <HeroContainer>
      <HeroContent>
        <FirstWrap>
          <TopPlease>
            <img src={a1} />
          </TopPlease>
          <img src={l} />
          <img src={ii} />
        </FirstWrap>

        <SecondWrap>
          <img src={t} />
          <img src={b} />
          <img src={a3} />
        </SecondWrap>

        <LastWrap>
          <ThirdWrap>
            <img src={a2} />
          </ThirdWrap>

          <FourthWrap>
            <One>
              <img src={i} />
            </One>
            <Two>
              <img src={a4} />
              <img src={x} />
            </Two>
          </FourthWrap>
        </LastWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
