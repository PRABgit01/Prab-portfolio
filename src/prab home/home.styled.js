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
  opacity: 10px;
`;

export const TextContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: WyDon;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1;
  font-size: 2em;
  text-align: left;
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

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AnimeButton = styled.button`
  border: solid 1px transparent;
  color: white;
  font-size: large;
  border-radius: 12%;
  background: url(https://i.pinimg.com/originals/33/f9/f2/33f9f2691b305a7bb61ff7ff835e6ca3.gif);
  background-size: cover, 100%;
  padding: 10px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: url(https://i.pinimg.com/originals/2e/f8/84/2ef8848c6a4b3177e974d31ea521a0c7.gif);
    background-size: cover, 100%;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  min-width: 400px;
`;

export const TypeEffect = styled.span`
  color: #7C0200;
  font-weight: bold;
  font-size: 5rem;
`;
