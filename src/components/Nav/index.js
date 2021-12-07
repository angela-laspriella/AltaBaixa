import React from "react";
import { HeaderContainer, HeaderContent, Logo, Title } from "./NavElements";

import { NavInfo } from "../../data/data";

const NavSection = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {NavInfo.map((item) => {
          return (
            <>
              <Logo href="/">{item.logo}</Logo>
              <Title>{item.title}</Title>
            </>
          );
        })}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default NavSection;
