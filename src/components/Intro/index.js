import React, { useState, useEffect } from "react"; // Obrigatório ter
import eMolde from "../../images/Intro/E_molde.png";
import e from "../../images/Intro/E.png";
import fMolde from "../../images/Intro/F_molde.png";
import f from "../../images/Intro/F.png";
import gMolde from "../../images/Intro/G_molde.png";
import g1 from "../../images/Intro/G1.png";
import g2 from "../../images/Intro/G2.png";
import hMolde from "../../images/Intro/H_molde.png";
import h from "../../images/Intro/H.png";
import iMolde from "../../images/Intro/I_molde.png";
import i from "../../images/Intro/I.png";
import kMolde from "../../images/Intro/K_molde.png";
import k1 from "../../images/Intro/K1.png";
import k2 from "../../images/Intro/K2.png";
import lMolde from "../../images/Intro/L_molde.png";
import l from "../../images/Intro/L.png";

import titulo from "../../images/Intro/ABTitulo.png";

//import Fa1 from "../../images/01_firstA/A1.png"; // Exemplo de como exportar uma imagem -- import NomeVariavel from "url"

import {
  MainContainer,
  Title,
  Dir,
  Esq,
  FirstRow,
  SecondRow,
  Text,
  TextMuda,
  FirstRowContainer,
} from "./IntroElements";
//import "./IntroElements.css";

//import { IntroImgDir, IntroImgEsq } from "../../data/dataIntro";

const IntroSection = () => {
  return (
    <MainContainer id="intro">
      <FirstRowContainer>
        <Title>
          <div>
            <img src={titulo} />
          </div>
        </Title>
        <Dir>
          <FirstRow>
            <div>
              <img src={eMolde} />
            </div>
            <div>
              <img src={e} />
            </div>
            <div>
              <img src={fMolde} />
            </div>
            <div>
              <img src={f} />
            </div>
          </FirstRow>
          <SecondRow>
            <div>
              <img src={gMolde} />
            </div>
            <div>
              <img src={g1} />
            </div>
            <div>
              <img src={g2} />
            </div>
            <div>
              <img src={hMolde} />
            </div>
          </SecondRow>
        </Dir>
      </FirstRowContainer>
      <FirstRowContainer>
        <Esq>
          <FirstRow>
            <div>
              <img src={h} />
            </div>
            <div>
              <img src={iMolde} />
            </div>
            <div>
              <img src={i} />
            </div>
            <div>
              <img src={kMolde} />
            </div>
          </FirstRow>
          <SecondRow>
            <div>
              <img src={k1} />
            </div>
            <div>
              <img src={k2} />
            </div>
            <div>
              <img src={lMolde} />
            </div>
            <div>
              <img src={l} />
            </div>
          </SecondRow>
        </Esq>
        <Text>
          é uma <TextMuda>revista de cultura tipográfica</TextMuda> desenvolvida
          no âmbito académico e que se propõe a refletir sobre todos os aspectos
          da tipografia, incluindo a sua história, e cujos conteúdos são
          deliberadamente ecléticos. Trata-se de uma revista que pretende
          publicar material histórico e contemporâneo, a partir de fontes
          académicas e jornalísticas. Isto significa que a revista deve oferecer
          uma mistura de artigos e materiais de referência e transmitir a
          convicção de que o opções de design devem estar em consonância com o
          conteúdo.
        </Text>
      </FirstRowContainer>
    </MainContainer>
  );
};

export default IntroSection;
