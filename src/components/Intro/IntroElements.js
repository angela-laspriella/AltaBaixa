import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  background-color: #f9f8f8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.h1`
  color: #1c1c1c;
  font-family: Cutive-Regular, serif;
  font-size: 900%;
  font-weight: 200;
  width: 50%;
`;

export const Dir = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 50%;
  height: auto;
`;

export const Esq = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 50%;
  height: auto;
`;

export const FirstRow = styled.div`
  background-color: green;
  height: 100px;
  img {
    height: 100%;
  }
`;

export const SecondRow = styled.div`
  background-color: blue;
  height: 100px;
  img {
    height: 100%;
  }
`;

export const Text = styled.p`
  color: #1c1c1c;

  width: 50%;
  font-family: artigo, serif;
  font-weight: 300;
  font-style: normal;
`;
