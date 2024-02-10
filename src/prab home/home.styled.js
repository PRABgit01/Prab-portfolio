import styled, { keyframes } from "styled-components";

export const BackGroundVideo = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;
  transition: 1s;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: WyDon;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 2em;
`;

export const AnimatedButton = styled.div`
  background: transparent;
  border: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;
