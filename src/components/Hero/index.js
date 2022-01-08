import React, { useState, useEffect } from "react";

// FirstA -------------------

import Fa1 from "../../images/01_firstA/A1.png";
import Fa2 from "../../images/01_firstA/A2.svg";
import Fa3 from "../../images/01_firstA/A3.svg";

// L -------------------
import l1 from "../../images/02_L/L.png";

// T -------------------
import t1 from "../../images/03_T/T.png";
import t2 from "../../images/03_T/t2.svg";
import t3 from "../../images/03_T/t3.svg";

// SecondA -------------------
import Sa1 from "../../images/04_A2/A1.png";
import Sa2 from "../../images/04_A2/A2.svg";
import Sa4 from "../../images/04_A2/A4.svg";

// & -------------------
import ii from "../../images/05_ii/&.png";

// b -------------------
import b1 from "../../images/06_b/b.png";
import b2 from "../../images/06_b/b2.svg";
import b4 from "../../images/06_b/b4.svg";

// ThirdA -------------------
import a3 from "../../images/07_ThirdA/A3.png";

// i -------------------
import i from "../../images/08_i/I.png";

// x -------------------
import x1 from "../../images/09_x/X.png";
import x2 from "../../images/09_x/x2.svg";

// FouthA -------------------
import a4 from "../../images/10_FouthA/A4.png";

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
  // FirstA -------------------

  //  Isto é o array de img
  const firstA = [Fa1, Fa2, Fa3];

  // Isto é o intervalo e onde muda a imagem
  const [currentIndexFa, setCurrentIndexFa] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexFa((prevIndex) =>
        currentIndexFa == firstA.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndexFa]); // Isto aqui reinicia o loop por alguma razao

  // T -------------------

  const t = [t1, t2, t3];
  const [currentIndexT, setCurrentIndexT] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexT((prevIndex) =>
        currentIndexT == t.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndexT]);

  // SecondA -------------------

  const SecondA = [Sa1, Sa2, Sa4];
  const [currentIndexSa, setCurrentIndexSa] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexSa((prevIndex) =>
        currentIndexSa == SecondA.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndexSa]);

  // b -------------------

  const b = [b1, b2, b4];
  const [currentIndexB, setCurrentIndexB] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexB((prevIndex) =>
        currentIndexB == b.length - 1 ? 0 : prevIndex + 1
      );
    }, 2400);

    return () => clearInterval(timer);
  }, [currentIndexB]);

  // x -------------------

  const x = [x1, x2];
  const [currentIndexX, setCurrentIndexX] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexX((prevIndex) =>
        currentIndexX == x.length - 1 ? 0 : prevIndex + 1
      );
    }, 2800);

    return () => clearInterval(timer);
  }, [currentIndexX]);

  /*Cena vou chamar no pages */
  return (
    <HeroContainer>
      <HeroContent>
        <FirstWrap>
          <TopPlease>
            {/* Isto onde metes o nome do array e o intervalo*/}
            <img src={firstA[currentIndexFa]} />{" "}
          </TopPlease>
          <img src={l1} />
          <img src={ii} />
        </FirstWrap>

        <SecondWrap>
          <img src={t[currentIndexT]} /> <img src={b[currentIndexB]} />
          <img src={a3} />
        </SecondWrap>

        <LastWrap>
          <ThirdWrap>
            <img src={SecondA[currentIndexSa]} />
          </ThirdWrap>

          <FourthWrap>
            <One>
              <img src={i} />
            </One>
            <Two>
              <img src={a4} />
              <img src={x[currentIndexX]} />
            </Two>
          </FourthWrap>
        </LastWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
