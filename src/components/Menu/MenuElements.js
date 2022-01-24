import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  margin-top: 40vh;
  padding-left: 24px;

  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 24px;
`;

export const BallContainer = styled.a`
  width: fit-content;
  height: 25px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  p {
    font-family: artigo, serif;
    font-weight: 800;
    font-size: 120%;
    font-style: normal;
    color: #5c3120;
  }

  p {
    display: none;
  }

  &:hover {
    div {
      background: #5c3120;
    }

    p {
      display: inline-block;
    }
  }
`;

export const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: #d7d7d7;
`;
