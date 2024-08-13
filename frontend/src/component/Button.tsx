import React from "react";

import styled from "styled-components";
interface ButtonStyleProps {
  bg?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  height?: string;
}
const Wrapper = styled.button<ButtonStyleProps>`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bg ?? "#ff6f61"};
  width: ${(props) => props.width || "100%"};
  width: ${(props) => props.height || "auto"};
  padding: 12px 24px;
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.borderColor ?? "none"}`};
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  height?: string;
}

const Button = ({
  text,
  onClick,
  bg,
  color,
  width,
  borderColor,
}: ButtonProps) => {
  return (
    <Wrapper
      bg={bg}
      color={color}
      width={width}
      borderColor={borderColor}
      onClick={onClick}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
