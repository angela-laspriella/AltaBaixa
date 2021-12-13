import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 8vh;
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
  font-family: "Cutive", serif;
  color: #fbfafa;

  @media screen and (max-width: 1200px) {
    padding: 0 24px;
  }
`;

export const Logo = styled.a`
  font-size: 100%;
  text-decoration: none;
  text-transform: uppercase;
  &:visited {
    text-decoration: none;
    color: #fbfafa;
  }
`;

export const Title = styled.div`
  font-size: 100%;
  //font-size: 75%;
  text-transform: uppercase;
`;
