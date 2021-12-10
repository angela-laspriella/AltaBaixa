import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 8vh;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //background-color: blue;
  font-family: "Cutive", serif;
  color: #fbfafa;

  @media screen and (max-width: 1200px) {
    padding: 0 24px;
  }
`;

export const Logo = styled.a`
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: #fbfafa;
  }
`;

export const Title = styled.div`
  font-size: 75%;
`;
