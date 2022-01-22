import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f8f8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  color: #1c1c1c;
  font-family: Cutive-Regular, serif;
  padding-left: 3%;
  font-size: 900%;
  font-weight: 200;
  width: 45%;
`;

export const Dir = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 50%;
  height: auto;
`;

export const Esq = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  width: 50%;
  height: auto;
`;

export const FirstRow = styled.div`
  height: 25%;
  width: 83%;
  img {
    height: 100%;
  }
`;

export const SecondRow = styled.div`
  height: 25%;
  width: 83%;
  img {
    height: 100%;
  }
`;

export const Text = styled.p`
  color: #1c1c1c;
  width: 40%;
  padding-left: 3%;
  font-family: artigo, serif;
  font-size: 140%;
  font-weight: 300;
  font-style: normal;
`;

export const TextMuda = styled.span`
  font-family: Cutive-Regular, serif;
  text-transform: uppercase;
`;
