import React from "react";
import Anime from "../assets/jujustus.mp4";
import {
  AnimatedButton,
  BackGroundVideo,
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
        <source src={Anime} type="video/mp4" />
      </BackGroundVideo>
      <TextContainer>
        <h1>its prabhanjs </h1>
        <AnimatedButton>clikc me</AnimatedButton>
      </TextContainer>
    </>
  );
}
