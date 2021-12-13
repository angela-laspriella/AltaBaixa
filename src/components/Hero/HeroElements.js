import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  overflow: hidden;
  background-color: #1c1c1c;

  padding-top: 24px;

  @media screen and (max-width: 900px) {
    padding-top: 0;
    padding-bottom: 32px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const FirstWrap = styled.div`
  width: 33.33%;
  height: 100%;

  img {
    cursor: pointer;
  }

  img:nth-child(2) {
    width: 25%;
  }

  img:nth-child(3) {
    width: 100%;
  }
`;

export const TopPlease = styled.div`
  display: inline;

  img {
    width: 60%;
    margin-bottom: 28%;
    margin-right: 16px;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const SecondWrap = styled.div`
  width: 33.33%;

  img:first-child {
    width: 82%;
    margin-bottom: 5%;
  }

  img:nth-child(2) {
    width: 40%;
  }

  img:nth-child(3) {
    width: 50%;
  }

  img {
    cursor: pointer;
  }
`;

export const ThirdWrap = styled.div`
  width: 100%;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const FourthWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;

  img {
    cursor: pointer;
  }

  img:nth-child(1) {
    width: 120%;
  }
`;

export const LastWrap = styled.div`
  width: 33.32%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const One = styled.div`
  margin-right: 40px;
`;

export const Two = styled.div`
  img:first-child {
    margin-bottom: 8%;
  }

  img:nth-child(1) {
    width: 100%;
  }

  img:nth-child(2) {
    width: 45%;
  }
`;
