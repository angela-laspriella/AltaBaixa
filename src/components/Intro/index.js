import React, { useState, useEffect } from "react"; // Obrigatório ter
import eMolde from "../../images/Intro/E_molde.png";
import e from "../../images/Intro/E.png";
import fMolde from "../../images/Intro/F_molde.png";
import f from "../../images/Intro/F.png";
import gMolde from "../../images/Intro/G_molde.png";
import g1 from "../../images/Intro/G1.png";
import g2 from "../../images/Intro/G2.png";
import hMolde from "../../images/Intro/H_molde.png";
//import Fa1 from "../../images/01_firstA/A1.png"; // Exemplo de como exportar uma imagem -- import NomeVariavel from "url"

import {
  MainContainer,
  Title,
  Dir,
  Esq,
  FirstRow,
  SecondRow,
  Text,
} from "./IntroElements";
//import "./IntroElements.css";

//import { IntroImgDir, IntroImgEsq } from "../../data/dataIntro";

const IntroSection = () => {
  return (
    <MainContainer>
      <Title>ALTA & BAIXA</Title>
      <Dir>
        <FirstRow>
      <img src= {eMolde} /> 
      <img src={e} />
      <img src={fMolde} />
      <img src={f} />
      </FirstRow>
      <SecondRow>
      <img src= {gMolde} /> 
      <img src={g1} />
      <img src={g2} />
      <img src={hMolde} />
      </SecondRow>
      </Dir>
      <Esq>
        <FirstRow>
      <img src= {eMolde} /> 
      <img src={e} />
      <img src={fMolde} />
      <img src={f} />
      </FirstRow>
      <SecondRow>
      <img src= {gMolde} /> 
      <img src={g1} />
      <img src={g2} />
      <img src={hMolde} />
      </SecondRow>
      </Esq>
      <Text>é uma revista de cultura tipográfica desenvolvida no âmbito académico 
        e que se propõe a refletir sobre todos os aspectos da tipografia, incluindo 
        a sua história, e cujos conteúdos são deliberadamente ecléticos. 
        Trata-se de uma revista que pretende publicar material histórico e 
        contemporâneo, a partir de fontes académicas e jornalísticas. 
        Isto significa que a revista deve oferecer uma mistura de artigos e 
        materiais de referência e transmitir a convicção de que o opções de 
        design devem estar em consonância com o conteúdo.</Text>
    </MainContainer>
  );
};

export default IntroSection;
