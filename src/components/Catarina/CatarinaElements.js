import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;

  background-color: #f9f8f8;
  background: linear-gradient(90deg, #e86028 0%, rgba(232, 96, 40, 0) 27.56%);
`;

export const Title = styled.h2`
  color: black;

  font-size: 1000%;
  font-weight: 800;
`;

export const Name = styled.p`
  color: black;
  font-size: 300%;

  margin-top: 4%;
`;

export const Intro = styled.p`
  color: black;

  width: 60%;
  font-size: 300%;
  font-weight: 400;

  margin-top: 4%;
  padding-left: 4%;
`;

export const Text = styled.p`
  color: black;

  width: 60%;
  font-size: 200%;
  font-weight: 400;

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
