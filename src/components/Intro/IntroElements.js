import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background-color: #f9f8f8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  padding-top: 2%;
  padding-bottom: 2%;
`;

export const FirstRowContainer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 45%;
  height: 100%;
  align-self: flex-end;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Dir = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;

  width: 45%;
  height: 100%;

  padding-left: 1%;

  div {
    width: 100%;
  }
`;

export const Esq = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;

  width: 45%;
  height: 100%;

  margin-top: 2%;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;

  width: 100%;

  div {
    width: 25%;
  }

  img {
    width: 100%;
  }
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
  width: 100%;

  div {
    width: 25%;
  }

  img {
    width: 100%;
  }
`;

export const Text = styled.p`
  color: #1c1c1c;
  width: 45%;

  align-self: flex-start;
  margin-top: 2%;

  padding-left: 1%;
  font-family: artigo, serif;
  font-size: 140%;
  font-weight: 300;
  font-style: normal;

  @media screen and (max-width: 1024px) {
    & {
      font-size: 110%;
    }
  }
`;

export const TextMuda = styled.span`
  font-family: Cutive-Regular, serif;
  text-transform: uppercase;
`;
