import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/color";

const Wrapper = styled.div`
  height: 100px;
  border-bottom: 1px solid #ccc;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
const ImageWrapper = styled.div`
  height: 48px;
  min-height: 48px;
  width: 48px;
  min-width: 48px;
  border-radius: 50%;
  border: ${(props) => `3px solid ${props.color}`};

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const AppHeader = () => {
  return (
    <Wrapper>
      {[...Array(16)].map((_, index: number) => (
        <ImageWrapper color={colors[index]} key={index}>
          <img
            src="https://images.unsplash.com/photo-1723429676019-d52dea259562?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
          />
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default AppHeader;
