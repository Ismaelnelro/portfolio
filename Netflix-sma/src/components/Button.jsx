import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = ({ children, classname, path, disable }) => {
  const {
    height,
    width,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
  } = classname;

  return (
      <Link className="link" to={path}>
        <StyledButton
          height={height}
          width={width}
          borderRadius={borderRadius}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
          backgroundColor={backgroundColor}
          disabled={disable}
        >
          {children}
        </StyledButton>
      </Link>
  );
};
const StyledButton = styled.button`
  cursor: pointer;
  height: ${(props) => props.height || "3.2rem"};
  width: ${(props) => props.width || "12rem"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.4rem"};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: ${(props) => props.fontSize || "1.2rem"};
  font-weight: ${(props) => props.fontWeight || "bolder"};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "#dc1a28"};
  &:hover {
    background-color: #ad0c18;
  }
`;
