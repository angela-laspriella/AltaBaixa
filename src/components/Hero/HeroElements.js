import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

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

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  margin-top: 40px;
`;

export const FirstWrap = styled.div`
  width: 33.33%;
  height: 100%;

  img {
    cursor: pointer;
  }
`;

export const TopPlease = styled.div`
  display: inline;

  img {
    margin-bottom: 100px;
    margin-right: 16px;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const SecondWrap = styled.div`
  width: 33.33%;

  img:first-child {
    width: 80%;
    margin-bottom: 5%;
  }

  img {
    cursor: pointer;
  }
`;

export const ThirdWrap = styled.div`
  width: 100%;
  margin-bottom: 64px;

  img {
    width: 100%;
  }
`;

export const FourthWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
`;

export const LastWrap = styled.div`
  width: 33.32%;
  display: flex;
  flex-direction: column;
`;

export const One = styled.div`
  margin-right: 40px;
`;

export const Two = styled.div`
  width: 100%;

  img:first-child {
    width: 100%;
    margin-bottom: 8%;
  }
`;
