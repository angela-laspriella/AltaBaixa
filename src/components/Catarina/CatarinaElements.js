import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;

  background-color: #f9f8f8;
  background: linear-gradient(90deg, #e86028 0%, rgba(232, 96, 40, 0) 27.56%);
`;

export const Title = styled.h2`
  font-family: nazare, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 900%;

  color: black;
`;

export const Name = styled.p`
  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 500%;

  color: black;

  margin-top: 2%;
  margin-left: 4%;
`;

export const Intro = styled.p`
  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 300%;

  color: black;

  width: 60%;

  margin-top: 4%;
  padding-left: 4%;
`;

export const Text = styled.p`
  font-family: artigo, serif;
  font-weight: 200;
  font-style: normal;
  font-size: 200%;

  color: black;

  width: 60%;

  margin-top: 4%;
  padding-left: 4%;
`;

export const ImageContainer = styled.div`
  width: 100%;

  img {
    margin-top: 8%;
    width: 100%;
  }
`;
