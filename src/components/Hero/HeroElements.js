import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  background-color: #1c1c1c;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: blue;
`;
