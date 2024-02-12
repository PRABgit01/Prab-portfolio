import React from "react";
import kaisen from "../assets/kaisenbro.mp4";
import { Cursor, Typewriter } from "react-simple-typewriter";

import {
  AnimatedButton,
  AnimatedText,
  AnimeButton,
  BackGroundVideo,
  LeftContainer,
  TextBox,
  TextContainer,
  TypeEffect,
} from "./home.styled";

export function PrabHome() {
  return (
    <>
      <BackGroundVideo autoPlay loop muted>
        <source src={kaisen} type="video/mp4" />
      </BackGroundVideo>
      <TextContainer>
        <LeftContainer>
          <TextBox>
            <span>
              <TypeEffect>
                <Typewriter
                  words={["Prabhanjan", "develop", "Code", "Sleep", "Repeat!"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </TypeEffect>
            </span>
          </TextBox>
          <AnimeButton>
            <span style={{ color: "white", fontWeight: "bold" }}>
              <Typewriter
                words={["click ", "me ", "me"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </AnimeButton>
        </LeftContainer>
      </TextContainer>
    </>
  );
}
