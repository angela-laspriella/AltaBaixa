import { getDefaultNormalizer } from "@testing-library/react";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  background-color: #eb6029;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1100%;
  line-height: 100%;
`;
export const Name = styled.h2`
  font-family: artigo, serif;
  font-weight: 300;
  font-style: italic;
  font-size: 600%;
  padding-top: 3%;
`;

export const SecondContainer = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: hidden;
`;

export const ImgContainer = styled.div`
  img {
  }
`;

export const Text = styled.p`
  width: 41%;
  padding: 2% 1%;
  color: #f9f8f8;
  font-family: artigo, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 145%;
`;
export const Break = styled.br``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title1 = styled.h2`
  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 425%;
  line-height: 100%;
  color: #f9f8f8;
`;

export const Title2 = styled.h2`
  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 711%;
  line-height: 100%;
  color: #1c1c1c;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: fit-content;

  background: #1d1d1d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    width: 600px;
  }

  padding-top: 3%;
  padding-bottom: 4%;
`;

export const Coiso = styled.div`
  width: fit-content;
  height: fit-content;
  min-height: 550px;
`;

export const Number = styled.div`
  position: absolute;
  z-index: 1;

  img {
    margin-top: 2%;
    width: 50%;
    max-width: 150px;
  }
`;
export const TextWrap = styled.div`
  position: absolute;
  z-index: 2;

  display: flex;
  flex-direction: column;
  padding-left: 20%;
  margin-top: 3%;
`;

export const TitleSlider = styled.h3`
  color: white;
  width: 70%;

  font-family: nazare, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 400%;
  line-height: 115%;
`;

export const TextSlider = styled.p`
  color: white;
  width: 80%;

  font-family: artigo, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 120%;

  margin-top: 4%;
`;
