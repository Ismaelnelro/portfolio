import React, { useState } from "react";
import styled from "styled-components";

export const Input = ({ typeInput, placeholder, handleValidation, type }) => {
  const [ValidationEmail, setValidationEmail] = useState(true);
  const [ValidationPassword, setValidationPassword] = useState(true);
  const [Completed, setCompleted] = useState(false);

  const {
    height,
    width,
    padding,
    borderRadius,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
  } = typeInput;

  const handleInput = (e) => {
    const value = e.target.value;
    let regex = "";
    if (type === "email") {
      regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const isValid = regex.test(value);
      setValidationEmail(isValid);
      handleValidation(isValid);

      if (isValid) {
        setCompleted(true);
        localStorage.setItem("email", value);
      } else {
        setCompleted(false);
      }
    } else {
      regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
      const isValid = regex.test(value);
      setValidationPassword(isValid);
      handleValidation(isValid);

      if (isValid) {
        setCompleted(true);
        localStorage.setItem("password", value);
      } else {
        setCompleted(false);
      }
    }
  };

  return (
    <StyledContainer className="flex column a-center j-center">
      <StyledInput
        className={`input ${
          !ValidationEmail || !ValidationPassword ? "invalid" : ""
        } ${Completed ? "valid" : ""}`}
        height={height}
        width={width}
        padding={padding}
        borderRadius={borderRadius}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        backgroundColor={backgroundColor}
        id="input"
        name="input"
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleInput(e)}
      />
      {!ValidationEmail && type === "email" && (
        <p>Escribe una dirección de email válida.</p>
      )}
      {!ValidationPassword && type === "password" && (
        <p>1 Mayuscula , 1 Numero +5 Characteres</p>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0;
  padding:0;
  box-sizing:border-box ;
  position: relative;
  p {
    position: absolute;
    top: 2.2rem;
    left: 2.1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: red;
  }
  .invalid {
    border: 1px solid red;
  }
  .valid {
    border: 1px solid green;
  }
`;

const StyledInput = styled.input`
  height: ${(props) => props.height || "3.2rem"};
  width: ${(props) => props.width || "12rem"};
  padding-left: ${(props) => props.padding || "2rem"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.4rem"};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  font-weight: ${(props) => props.fontWeight || "bolder"};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "white"};
`;
