import React from "react";
import Anime from "../assets/jujustus.mp4";
import kaisen from "../assets/kaisenbro.mp4";
import {
  AnimatedButton,
  AnimatedText,
  AnimeButton,
  BackGroundVideo,
  LeftContainer,
  TextContainer,
  TwitchContainer,
  TwitchSpan,
  TwitchText,
} from "./home.styled";

// ... (styled components and keyframes)

export function PrabHome() {
  return (
    <>
      <BackGroundVideo autoPlay loop muted>
        <source src={kaisen} type="video/mp4" />
      </BackGroundVideo>
      <TextContainer>
        <LeftContainer>
          <AnimatedText>prabhanjan</AnimatedText>
          {/* <AnimatedText>portfolio </AnimatedText> */}

          <AnimeButton>my world 🗺</AnimeButton>
        </LeftContainer>
        {/* <AnimatedButton>clikc me</AnimatedButton> */}
      </TextContainer>
    </>
  );
}
