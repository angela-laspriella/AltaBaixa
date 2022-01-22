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
