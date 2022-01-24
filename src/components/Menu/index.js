import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { MenuContainer, BallContainer, Ball } from "./MenuElements";

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <Link
          to="intro"
          smooth={true}
          duration={800}
          spy={true}
          exact="true"
          offsett={0}
        >
          <BallContainer>
            <Ball />
            <p>Intro</p>
          </BallContainer>
        </Link>

        <Link
          to="thirdteen"
          smooth={true}
          duration={800}
          spy={true}
          exact="true"
          offsett={0}
        >
          <BallContainer>
            <Ball />
            <p>13 Ways</p>
          </BallContainer>
        </Link>

        <Link
          to="tyEm"
          smooth={true}
          duration={800}
          spy={true}
          exact="true"
          offsett={0}
        >
          <BallContainer>
            <Ball />
            <p>tyEm</p>
          </BallContainer>
        </Link>
      </MenuContainer>
    </>
  );
};

export default Menu;
