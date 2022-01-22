import React, { useState, useEffect } from "react"; // Obrigatório ter
import dir from "../../images/Michael/dir.png";
import esq from "../../images/Michael/esq.png";

import {
  MainContainer,
  SecondContainer,
  Title,
  Name,
  ImgContainer,
  Text,
  Break,
  TitleContainer,
  Title1,
  Title2,
} from "../Michael_Intro/MichaelIntroElements";

//import "./MichaelElements.css";

const MichaelSection = () => {
  return (
    <MainContainer>
      <Title>Thirteen Ways of Looking at a Typeface</Title>
      <Name>Michael Bierut</Name>
      <SecondContainer>
        <ImgContainer>
          <img src={esq} />
        </ImgContainer>
        <Text>
          For the first ten years of my career, I worked for Massimo Vignelli, a
          designer who is legendary for using a very limited number of
          typefaces. Between 1980 and 1990, most of my projects were set in five
          fonts: Helvetica (naturally), Futura, Garamond No. 3, Century
          Expanded, and, of course, Bodoni.
          <Break></Break>
          <Break></Break>
          For Massimo, this was an ideological choice, an ethical imperative.
          “In the new computer age,” he once wrote, “the proliferation of
          typefaces and type manipulations represents a new level of visual
          pollution threatening our culture. Out of thousands of typefaces, all
          we need are a few basic ones, and trash the rest.” For me, it became a
          time-saving device. Why spend hours choosing between Bembo, Sabon and
          Garamond No. 3 every time you needed a Venetian Roman? For most people
          — my mom, for instance — these were distinctions without differences.
          Why not just commit to Garamond No. 3 and never think about it again?
          My Catholic school education must have well prepared me for this kind
          of moral clarity. I accepted it gratefully.
          <Break></Break>
          <Break></Break>
          Then, after a decade, I left my first job. Suddenly I could use any
          typeface I wanted, and I went nuts. On one of my first projects, I
          used 37 different fonts on 16 pages. My wife, who had attended
          Catholic school herself, found this all too familiar. She remembered
          classmates who had switched to public school after eight years under
          the nuns: freed at last from demure plaid uniforms, they wore the
          shortest skirts they could find. “Jesus,” she said, looking at one of
          my multiple font demolition derbies. “You’ve become a real slut,
          haven’t you?”
          <Break></Break>
          <Break></Break>
          It was true. Liberated from monogamy, I became typographically
          promiscuous. I have since, I think, learned to modulate my behavior —
          like any substance abuser, I learned that binges are time-consuming,
          costly, and ultimately counterproductive — but I’ve never gone back to
          five-typeface sobriety. Those thousands of typefaces are still out
          there, but my recovery has required that I become more discriminating
          and come up with some answers to this seemingly simple question:
        </Text>
        <ImgContainer>
          <img src={dir} />
        </ImgContainer>
      </SecondContainer>
      <TitleContainer>
        <Title1>why choose a particular typeface?</Title1>
        <Title2>Here are 13 reasons.</Title2>
      </TitleContainer>
    </MainContainer>
  );
};

export default MichaelSection;
